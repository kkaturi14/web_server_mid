'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div>로딩중........</div>
  }

  if (!isSignedIn) {
    return (
      <div>Sign in to view this page. 이 페이지를 보려면 로그인하세요.</div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (Client-side)</h1>
      <div className="mb-5">
        <p></p>
      </div>
    </div>
  )
}
