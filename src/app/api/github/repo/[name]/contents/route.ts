import { NextResponse } from 'next/server'

const token = process.env.GITHUB_TOKEN

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/kkaturi14/${params.name}/contents`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
        next: { revalidate: 60 }
      }
    )
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contents' }, { status: 500 })
  }
}

