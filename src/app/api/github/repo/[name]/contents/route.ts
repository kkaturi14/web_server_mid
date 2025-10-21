import { NextRequest, NextResponse } from 'next/server'

const token = process.env.GITHUB_TOKEN

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await context.params
    const response = await fetch(
      `https://api.github.com/repos/kkaturi14/${name}/contents`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
        next: { revalidate: 60 }
      }
    )
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch contents' }, { status: 500 })
  }
}
