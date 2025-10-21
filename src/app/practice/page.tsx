'use client'

import Link from 'next/link'

export default function PracticePage() {
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
        fontFamily: 'inherit',
        textAlign: 'center'
      }}>
        Practice
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#a1a1aa', 
        marginBottom: '3rem',
        fontFamily: 'inherit',
        textAlign: 'center'
      }}>
        My practice
      </p>
      
      {/* Clerk Authentication Demo */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        transition: 'all 0.3s'
      }}>
        {/* Image */}
        <div style={{
          width: '100%',
          height: '450px',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          position: 'relative',
          background: '#ffffff'
        }}>
          <img 
            src="/clerkapp.png" 
            alt="Clerk Authentication Demo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>🔐</span>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#ffffff', 
            fontFamily: 'inherit'
          }}>
            Clerk Authentication Demo
          </h2>
        </div>
        <div style={{
          display: 'inline-block',
          padding: '0.375rem 0.75rem',
          background: 'rgba(99, 102, 241, 0.2)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          color: '#a5b4fc',
          fontWeight: '600',
          marginBottom: '1rem',
          fontFamily: 'inherit'
        }}>
          User Management
        </div>
        <p style={{ 
          color: '#d4d4d8', 
          lineHeight: '1.8',
          fontSize: '1rem',
          fontFamily: 'inherit',
          marginBottom: '1rem'
        }}>
          Clerk를 활용한 사용자 인증 시스템 구현. React와 Next.js에 최적화된 사용자 관리 UI 및 API를 통합했습니다.
        </p>
        <a 
          href="https://web-server-nine-lemon.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.25rem',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#ffffff',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '600',
            transition: 'all 0.3s',
            fontFamily: 'inherit'
          }}
        >
          View Demo →
        </a>
      </div>

      <Link href="/" className="back-btn">
        ← Back to Home
      </Link>
      
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
