'use client'

import Link from 'next/link'
import { GitHubContent } from '@/types/github'
import { FaFolder } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function RepoDirs({ name }: { name: string }) {
  const [dirs, setDirs] = useState<GitHubContent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/github/repo/${name}/contents`)
      .then(res => res.json())
      .then(data => {
        const directories = data.filter((content: GitHubContent) => content.type === 'dir')
        setDirs(directories)
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
        textAlign: 'center',
        color: '#d4d4d8',
        fontFamily: 'inherit'
      }}>
        Loading...
      </div>
    )
  }

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      padding: '2rem',
      borderRadius: '1rem'
    }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '700', 
        color: '#ffffff', 
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        fontFamily: 'inherit'
      }}>
        Directories
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {dirs.map((dir) => (
          <Link
            key={dir.path}
            href={`https://github.com/kkaturi14/${name}/tree/master/${dir.path}`}
            target="_blank"
            className="dir-link"
          >
            <FaFolder style={{ color: '#6366f1', fontSize: '1.125rem' }} />
            {dir.path}
          </Link>
        ))}
      </div>
      
      <style jsx>{`
        .dir-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          text-decoration: none;
          color: #f5f5f5;
          font-size: 0.938rem;
          font-weight: 500;
          transition: all 0.3s;
          font-family: inherit;
        }
        .dir-link:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateX(4px);
        }
      `}</style>
    </div>
  )
}
