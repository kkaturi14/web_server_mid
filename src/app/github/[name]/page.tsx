'use client'

import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'
import Link from 'next/link'
import { Suspense } from 'react'

export default function RepoPage({ params }: { params: { name: string } }) {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '8rem 2rem 3rem',
      position: 'relative',
      zIndex: 1
    }}>
      <Link href="/github" className="back-btn">
        ← Back to Repositories
      </Link>
      
      <Suspense fallback={
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem',
          borderRadius: '1rem',
          color: '#d4d4d8',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontFamily: 'inherit'
        }}>Loading repository...</div>
      }>
        <Repo name={params.name} />
      </Suspense>
      
      <Suspense fallback={
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem',
          borderRadius: '1rem',
          color: '#d4d4d8',
          textAlign: 'center',
          fontFamily: 'inherit'
        }}>Loading directories...</div>
      }>
        <RepoDirs name={params.name} />
      </Suspense>
      
      <style jsx>{`
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 1px solid rgba(99, 102, 241, 0.5);
          color: #6366f1;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.938rem;
          margin-bottom: 2rem;
          transition: all 0.3s;
          font-family: inherit;
        }
        .back-btn:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
        }
      `}</style>
    </div>
  )
}
