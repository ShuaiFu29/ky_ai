import {
  NextRequest,
  NextResponse
} from 'next/server';
import {
  prisma
} from '@/lib/db';
import path from 'path';
import fs from 'fs/promises';
export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), "data", "posts.json");

    // 检查文件是否存在
    try {
      await fs.access(dataPath);
    } catch (fileError) {
      return NextResponse.json({
        error: "posts.json file not found",
        path: dataPath
      }, {
        status: 404
      });
    }

    const fileContent = await fs.readFile(dataPath, "utf-8");
    const data = JSON.parse(fileContent);

    // 检查数据格式 - 支持多种格式
    let posts = [];
    if (Array.isArray(data)) {
      // 直接是数组格式
      posts = data;
    } else if (data.posts && Array.isArray(data.posts)) {
      // 包装在posts属性中
      posts = data.posts;
    } else if (data.elements && Array.isArray(data.elements)) {
      // 包装在elements属性中（当前数据格式）
      posts = data.elements;
    } else {
      return NextResponse.json({
        error: "Invalid data format. Expected array or object with 'posts'/'elements' array",
        received: typeof data,
        availableKeys: Object.keys(data)
      }, {
        status: 400
      });
    }

    if (posts.length === 0) {
      return NextResponse.json({
        error: "No posts found in data"
      }, {
        status: 400
      });
    }

    // 批量插入数据
    const createdPosts = [];
    for (const post of posts) {
      if (!post.title || !post.content) {
        console.warn('Skipping post with missing title or content:', post);
        continue;
      }

      try {
        const createdPost = await prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
            publish: true,
            authorId: 1 // 默认作者ID
          }
        });
        createdPosts.push(createdPost);
      } catch (dbError) {
        console.error('Error creating post:', post.title, dbError);
        // 继续处理其他文章
      }
    }

    return NextResponse.json({
      message: 'Posts import completed',
      total: posts.length,
      created: createdPosts.length,
      skipped: posts.length - createdPosts.length
    });

  } catch (err) {
    console.error('Error in crawl posts API:', err);
    return NextResponse.json({
      error: "Internal server error",
      message: err instanceof Error ? err.message : 'Unknown error'
    }, {
      status: 500
    });
  }
}