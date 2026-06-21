import React from 'react'

const Pagination = ({ totalNews, newsPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalNews / newsPerPage);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-1.5 py-8">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-all duration-200"
        style={{
          background: currentPage === 1 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)',
          border: '1px solid var(--border)',
          color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.4 : 1,
        }}
      >
        ‹
      </button>

      {pages.map(pageNum => (
        <button
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition-all duration-200"
          style={{
            background: currentPage === pageNum
              ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
              : 'rgba(255,255,255,0.04)',
            border: currentPage === pageNum ? 'none' : '1px solid var(--border)',
            color: currentPage === pageNum ? 'white' : 'var(--text-muted)',
            boxShadow: currentPage === pageNum ? '0 0 12px rgba(99,102,241,0.45)' : 'none',
          }}
        >
          {pageNum}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-all duration-200"
        style={{
          background: currentPage === totalPages ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)',
          border: '1px solid var(--border)',
          color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-primary)',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.4 : 1,
        }}
      >
        ›
      </button>
    </div>
  )
}

export default Pagination
