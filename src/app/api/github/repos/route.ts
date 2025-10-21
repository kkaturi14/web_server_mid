import { NextResponse } from 'next/server'

const username = 'kkaturi14'
const token = process.env.GITHUB_TOKEN

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
        next: { revalidate: 60 } // Cache for 1 minute
      }
    )
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 500 })
  }
}

