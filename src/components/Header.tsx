'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(26, 26, 31, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '2px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo with gradient */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
          fontFamily: 'inherit'
        }}>
          Portfolio
        </Link>

        {/* Navigation Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <SignedOut>
            <Link href="/profile" className="nav-link">
              Profile
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/practice" className="nav-link">
              Practice
            </Link>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <SignInButton>
                <button className="btn-outline">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="btn-primary">Sign Up</button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <Link href="/profile" className="nav-link">
              Profile
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/practice" className="nav-link">
              Practice
            </Link>
            <Link href="/github" className="nav-link">
              GitHub
            </Link>
            <UserButton />
            <SignOutButton>
              <button className="btn-outline-red">Sign Out</button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
      
      <style jsx>{`
        .nav-link {
          color: #e4e4e7;
          font-size: 1.063rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
          font-family: inherit;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        
        .btn-outline {
          padding: 0.5rem 1.25rem;
          background: transparent;
          border: 1px solid rgba(99, 102, 241, 0.5);
          border-radius: 0.5rem;
          color: #6366f1;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
        }
        .btn-outline:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
        }
        
        .btn-primary {
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: none;
          border-radius: 0.5rem;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
          font-family: inherit;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
        }
        
        .btn-outline-red {
          padding: 0.5rem 1.25rem;
          background: transparent;
          border: 1px solid rgba(239, 68, 68, 0.5);
          border-radius: 0.5rem;
          color: #ef4444;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
        }
        .btn-outline-red:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
        }
      `}</style>
    </nav>
  )
}
