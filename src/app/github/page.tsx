'use client'

import { Repository } from '@/types/repo'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function ReposPage() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/github/repos`)
      .then(res => res.json())
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid rgba(99, 102, 241, 0.2)',
          borderTop: '4px solid #6366f1',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    )
  }
  
  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '8rem 2rem 3rem',
      position: 'relative',
      zIndex: 1
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        fontWeight: '800', 
        color: '#ffffff', 
        marginBottom: '1rem',
        letterSpacing: '-0.03em',
        fontFamily: 'inherit'
      }}>
        GitHub Repositories
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#a1a1aa', 
        marginBottom: '3rem',
        fontFamily: 'inherit'
      }}>
        My repositories
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {repos.map((repo: Repository) => (
          <Link 
            key={repo.id}
            href={`/github/${repo.name}`}
            style={{
              display: 'block',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '2rem',
              borderRadius: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#ffffff', 
              marginBottom: '0.75rem',
              fontFamily: 'inherit'
            }}>
              {repo.name}
            </h3>
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
              color: '#a1a1aa', 
              fontSize: '0.875rem',
              fontFamily: 'inherit'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaStar style={{ color: '#fbbf24', fontSize: '1rem' }} /> {repo.stargazers_count}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaCodeBranch style={{ color: '#6366f1', fontSize: '1rem' }} /> {repo.forks_count}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaEye style={{ color: '#8b5cf6', fontSize: '1rem' }} /> {repo.watchers_count}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
