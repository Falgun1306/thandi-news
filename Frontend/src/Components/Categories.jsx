import React from 'react'
import Wrapper from './Wrapper'
import useMyStore from '../newsStore'

const Categories = ({ className }) => {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  const setCategory = useMyStore(state => state.setCategory);
  const activeCategory = useMyStore(state => state.category);

  return (
    <div
      className={`sticky top-14 z-20 border-b ${className}`}
      style={{
        background: 'rgba(12,14,22,0.9)',
        backdropFilter: 'blur(14px)',
        borderColor: 'var(--border)',
      }}
    >
      <Wrapper>
        <div className="flex items-center gap-2 py-3 overflow-x-auto scroll-none">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategory(category)}
              className={`cat-chip flex items-center gap-1.5 ${activeCategory === category ? 'active' : ''}`}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Categories
