'use client'

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: '800', 
          background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.5rem',
          letterSpacing: '-0.05em',
          lineHeight: '1.1',
          fontFamily: 'inherit'
        }}>
          Welcome to My Portfolio
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#a1a1aa',
          fontWeight: '400',
          fontFamily: 'inherit'
        }}>
          웹서버보안프로그래밍 (Web Server Security Programming)
        </p>
      </div>
    </div>
  )
}
