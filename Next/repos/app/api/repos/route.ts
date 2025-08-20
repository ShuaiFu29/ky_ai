import {
  NextResponse
} from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/user/ShuaiFu29/repos')
    const repos = await response.json()
    return NextResponse.json(repos)
  } catch (err) {
    return NextResponse.json({
      err: 'Failed to Fetch repos'
    }, {
      status: 500
    })
  }
}