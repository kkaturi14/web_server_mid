'use client'

import Link from 'next/link'

export default function ProfilePage() {
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
        Profile
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#a1a1aa', 
        marginBottom: '3rem',
        fontFamily: 'inherit',
        textAlign: 'center'
      }}>
        My profile
      </p>
      
      {/* Main Profile Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Profile Image */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{
            width: '220px',
            height: '280px',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '3px solid rgba(99, 102, 241, 0.3)',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '0.5rem',
              fontFamily: 'inherit'
            }}>
              곽민경
            </h2>
            <p style={{ 
              color: '#a1a1aa',
              fontSize: '0.938rem',
              fontFamily: 'inherit'
            }}>
              정보보호학전공
            </p>
          </div>
        </div>

        {/* Basic Info */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '2rem',
          borderRadius: '1rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#ffffff', 
            marginBottom: '1.5rem',
            fontFamily: 'inherit'
          }}>
            About Me
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            fontFamily: 'inherit'
          }}>
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>나이</p>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>21살</p>
            </div>
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>학번</p>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>92410653</p>
            </div>
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>전공</p>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>정보보호학전공</p>
            </div>
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>관심분야</p>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>WEB</p>
            </div>
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>거주지</p>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>경기도 광주</p>
            </div>
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>MBTI</p>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>ISFP/ISTP</p>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>GitHub</p>
              <a 
                href="https://github.com/kkaturi14" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#6366f1', 
                  fontSize: '1rem', 
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#818cf8'}
                onMouseOut={(e) => e.currentTarget.style.color = '#6366f1'}
              >
                github.com/kkaturi14 →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Security Activities Section */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#ffffff', 
          marginBottom: '1.5rem',
          fontFamily: 'inherit',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🛡️</span> 보안 관련 활동
        </h2>
        <ul style={{ 
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <li style={{
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            padding: '1rem 1.25rem',
            borderRadius: '0.5rem',
            color: '#e4e4e7',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}>
            • 정보보안 동아리 SCP 활동 (2024.09~)
          </li>
          <li style={{
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            padding: '1rem 1.25rem',
            borderRadius: '0.5rem',
            color: '#e4e4e7',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}>
            • 화이트햇 스쿨 3기 수료 (2025.03~09)
          </li>
        </ul>
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
