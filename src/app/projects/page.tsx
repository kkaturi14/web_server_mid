'use client'

import Link from 'next/link'

export default function ProjectsPage() {
  const teamMembers = [
    { name: '곽민경', role: 'PA', image: '/profile.jpg', portfolioLink: 'https://web-server-mid.vercel.app/', githubLink: 'https://github.com/kkaturi14' },
    { name: '박혜수', role: 'PA', image: '/pandyo.png', portfolioLink: 'https://web-server-class-project-01.vercel.app/', githubLink: 'https://github.com/Pandyo' },
    { name: '심재훈', role: 'PA', image: '/sim.png', portfolioLink: 'https://midterm-portfolio-two.vercel.app/', githubLink: 'https://github.com/J4EH00N' },
    { name: '정윤서', role: 'PA', image: '/puppy.jpg', portfolioLink: 'https://wsvbp1-ixms.vercel.app/', githubLink: 'https://github.com/oesp91' },
    { name: '정재성', role: 'PM', image: '/duck.jpg', portfolioLink: 'https://20252-middle.vercel.app/', githubLink: 'https://github.com/Interludeal' }
  ]

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
        Projects
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#a1a1aa', 
        marginBottom: '3rem',
        fontFamily: 'inherit',
        textAlign: 'center'
      }}>
        My projects
      </p>

      {/* Cloud Projects Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '2rem',
          letterSpacing: '-0.03em',
          fontFamily: 'inherit'
        }}>
          Cloud Projects
        </h2>
        
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
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#ffffff', 
              fontFamily: 'inherit'
            }}>
              DevOps CI/CD 파이프라인 구축
            </h3>
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
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#ffffff', 
              fontFamily: 'inherit'
            }}>
              IaC 자동화 및 Drift 관리
            </h3>
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
      </div>

      {/* Web Projects Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '2rem',
          letterSpacing: '-0.03em',
          fontFamily: 'inherit'
        }}>
          Web Projects
        </h2>

        {/* Project 3 */}
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
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#ffffff', 
              fontFamily: 'inherit'
            }}>
              Pentesting Playground
            </h3>
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

        {/* Project 4 */}
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
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#ffffff', 
              fontFamily: 'inherit'
            }}>
              2025 JBU-CTF WEB 문제 출제
            </h3>
          </div>
          <div style={{
            display: 'inline-block',
            padding: '0.375rem 0.75rem',
            background: 'rgba(168, 85, 247, 0.2)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            color: '#c4b5fd',
            fontWeight: '600',
            marginBottom: '1rem',
            fontFamily: 'inherit'
          }}>
            CTF Challenge
          </div>
          <p style={{ 
            color: '#d4d4d8', 
            lineHeight: '1.8',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}>
            2025년 중부대학교 CTF 대회에서 웹 분야 문제를 출제했습니다.
          </p>
        </div>
      </div>

      {/* TEAM Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '2rem',
          letterSpacing: '-0.03em',
          fontFamily: 'inherit',
          textAlign: 'center'
        }}>
          TEAM
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '1.5rem',
                borderRadius: '1rem',
                transition: 'all 0.3s',
                width: '180px'
              }}
            >
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '3px solid rgba(99, 102, 241, 0.3)',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#ffffff',
                fontFamily: 'inherit',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                {member.name} <span style={{ color: '#a1a1aa', fontWeight: '500' }}>({member.role})</span>
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                width: '100%'
              }}>
                <a
                  href={member.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(99, 102, 241, 0.2)',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    borderRadius: '0.5rem',
                    color: '#a5b4fc',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.3)'
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)'
                  }}
                >
                  Portfolio
                </a>
                <a
                  href={member.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(139, 92, 246, 0.2)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    borderRadius: '0.5rem',
                    color: '#c4b5fd',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.3)'
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)'
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
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
