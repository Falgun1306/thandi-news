import React from 'react'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
    <footer
      className="border-t mt-4"
      style={{
        background: 'rgba(12,14,22,0.95)',
        borderColor: 'var(--border)',
      }}
    >
      <Wrapper>
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <span
              className="text-base font-bold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="gradient-text">Thandi</span>
              <span style={{ color: 'var(--text-primary)' }}> News</span>
            </span>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Real-time news powered by NewsAPI
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {['About', 'Privacy', 'Terms', 'Contact'].map(link => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-4 border-t flex items-center justify-center"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: '#475569' }}>
            © {new Date().getFullYear()} Thandi News. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
