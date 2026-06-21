import React, { useRef } from 'react'
import Wrapper from './Wrapper'
import useMyStore from '../newsStore'

const NavBar = ({ className }) => {
  const setSearch = useMyStore(state => state.setCategory);
  let timer = useRef(null);

  const handleSearch = (e) => {
    const val = e.target.value.trim();
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSearch(val || 'india');
    }, 700);
  };

  return (
    <header
      className={`sticky top-0 z-30 border-b ${className}`}
      style={{
        background: 'rgba(12,14,22,0.85)',
        backdropFilter: 'blur(16px)',
        borderColor: 'var(--border)',
      }}
    >
      <Wrapper>
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="gradient-text">Thandi</span>
              <span style={{ color: 'var(--text-primary)' }}> News</span>
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                color: 'white',
                fontSize: '0.6rem',
                letterSpacing: '0.05em',
              }}
            >
              LIVE
            </span>
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="search-input pl-8"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default NavBar
