import {
  NextResponse,
  NextRequest
} from "next/server";
import {
  createTokens,
  verifyToken
} from "@/lib/jwt";
import {
  prisma
} from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    console.log('refresh------------')
    const refreshToken = request.cookies.get('refresh_token')?.value
    const redirectUrl = request.nextUrl.searchParams.get('redirect') || '/dashboard'

    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const refreshPayLoad = await verifyToken(refreshToken)
    if (!refreshPayLoad) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const userId = refreshPayLoad.userId as number
    // 刷新？ 数据库再校验一次
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    // console.log(!user || user.refreshToken !== refreshToken)
    if (!user || user.refreshToken !== refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    } = await createTokens(userId)

    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        refreshToken: newRefreshToken
      }
    })


    const response = NextResponse.redirect(new URL(redirectUrl, request.url))

    response.cookies.set('access_token', newAccessToken, {
      httpOnly: true,
      maxAge: 60 * 60,
      sameSite: 'strict',
      path: '/'
    })
    response.cookies.set('refresh_token', newRefreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict',
      path: '/'
    })

    return response
  } catch (error) {
    console.error('refresh token error', error)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}