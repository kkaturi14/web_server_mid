'use client'

import { Repository } from '@/types/repo'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Repo({ name }: { name: string }) {
  const [repo, setRepo] = useState<Repository | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/github/repo/${name}`)
      .then(res => res.json())
      .then(data => {
        setRepo(data)
        setLoading(false)
      })
  }, [name])

  if (loading) {
    return (
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#d4d4d8',
        fontFamily: 'inherit'
      }}>
        Loading...
      </div>
    )
  }

  if (!repo) return null
  
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      padding: '2rem',
      borderRadius: '1rem',
      marginBottom: '1.5rem'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: '700', 
        color: '#ffffff', 
        marginBottom: '0.75rem',
        letterSpacing: '-0.02em',
        fontFamily: 'inherit'
      }}>
        {repo.name}
      </h2>
      <p style={{ 
        color: '#d4d4d8', 
        fontSize: '1rem', 
        marginBottom: '1.5rem', 
        lineHeight: '1.6',
        fontFamily: 'inherit'
      }}>
        {repo.description || 'No description provided'}
      </p>
      
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        alignItems: 'center', 
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        fontFamily: 'inherit'
      }}>
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: '#a1a1aa',
          fontSize: '0.938rem'
        }}>
          <FaStar style={{ color: '#fbbf24', fontSize: '1.125rem' }} /> 
          <strong style={{ color: '#ffffff' }}>{repo.stargazers_count}</strong> Stars
        </span>
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: '#a1a1aa',
          fontSize: '0.938rem'
        }}>
          <FaCodeBranch style={{ color: '#6366f1', fontSize: '1.125rem' }} /> 
          <strong style={{ color: '#ffffff' }}>{repo.forks_count}</strong> Forks
        </span>
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: '#a1a1aa',
          fontSize: '0.938rem'
        }}>
          <FaEye style={{ color: '#8b5cf6', fontSize: '1.125rem' }} /> 
          <strong style={{ color: '#ffffff' }}>{repo.watchers_count}</strong> Watchers
        </span>
      </div>
      
      <Link href={repo.html_url} target="_blank" className="github-btn">
        View on GitHub →
      </Link>
      
      <style jsx>{`
        .github-btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #ffffff;
          border-radius: 0.5rem;
          text-decoration: none;
          font-size: 0.938rem;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
          font-family: inherit;
        }
        .github-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
        }
      `}</style>
    </div>
  )
}
