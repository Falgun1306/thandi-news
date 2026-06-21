import React from "react";

const Loader = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center py-16 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        {/* Spinner ring */}
        <div
          className="relative w-10 h-10"
          style={{ animation: 'spin 1s linear infinite' }}
        >
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
            <path
              d="M20 4 A16 16 0 0 1 36 20"
              stroke="url(#grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad" x1="20" y1="4" x2="36" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          Fetching latest news…
        </p>
      </div>
    </div>
  );
};

export default Loader;
