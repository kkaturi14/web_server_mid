'use client'

import Link from 'next/link'

export default function ProjectsPage() {
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
        Projects
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#a1a1aa', 
        marginBottom: '3rem',
        fontFamily: 'inherit'
      }}>
        My projects
      </p>
      
      {/* Project 1 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '1.5rem',
        transition: 'all 0.3s'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>🔒</span>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#ffffff', 
            fontFamily: 'inherit'
          }}>
            DevOps CI/CD 파이프라인 구축
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
          Security Focused
        </div>
        <p style={{ 
          color: '#d4d4d8', 
          lineHeight: '1.8',
          fontSize: '1rem',
          fontFamily: 'inherit'
        }}>
          보안을 최우선으로 고려한 CI/CD 파이프라인을 구축하여, 안전한 소프트웨어 배포 프로세스를 구현했습니다.
        </p>
      </div>

      {/* Project 2 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '1.5rem',
        transition: 'all 0.3s'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>⚙️</span>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#ffffff', 
            fontFamily: 'inherit'
          }}>
            IaC 자동화 및 Drift 관리
          </h2>
        </div>
        <div style={{
          display: 'inline-block',
          padding: '0.375rem 0.75rem',
          background: 'rgba(34, 197, 94, 0.2)',
          border: '1px solid rgba(34, 197, 94, 0.4)',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          color: '#86efac',
          fontWeight: '600',
          marginBottom: '1rem',
          fontFamily: 'inherit'
        }}>
          Infrastructure as Code
        </div>
        <p style={{ 
          color: '#d4d4d8', 
          lineHeight: '1.8',
          fontSize: '1rem',
          fontFamily: 'inherit'
        }}>
          인프라를 코드로 관리하고, 실제 인프라와 코드 간의 차이(Drift)를 자동으로 감지하고 관리하는 시스템을 구축했습니다.
        </p>
      </div>

      {/* Project 3 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        transition: 'all 0.3s'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>🎯</span>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#ffffff', 
            fontFamily: 'inherit'
          }}>
            Pentesting Playground
          </h2>
        </div>
        <div style={{
          display: 'inline-block',
          padding: '0.375rem 0.75rem',
          background: 'rgba(239, 68, 68, 0.2)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          color: '#fca5a5',
          fontWeight: '600',
          marginBottom: '1rem',
          fontFamily: 'inherit'
        }}>
          Security Training
        </div>
        <p style={{ 
          color: '#d4d4d8', 
          lineHeight: '1.8',
          fontSize: '1rem',
          fontFamily: 'inherit'
        }}>
          모의해킹 실습을 위한 웹사이트를 제작하여, 다양한 보안 취약점을 학습하고 실습할 수 있는 환경을 구축했습니다.
        </p>
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
