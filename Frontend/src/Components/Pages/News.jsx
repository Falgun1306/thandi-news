import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper'
import axios from 'axios'
import Loader from '../Loader'
import useMyStore from '../../newsStore'
import Pagination from './Pagination'

const News = ({ className }) => {
  const { news, setNews, IsLoading, setIsLoading, category } = useMyStore();
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

  const URL = import.meta.env.VITE_BACKEND_URL;

  const fetchNews = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(URL, { params: { category } });
      if (response?.data?.articles) {
        setNews(response.data.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error("API ERROR:", error?.response?.data || error.message);
      setNews([]);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setCurrentPage(1);
    fetchNews();
  }, [category]);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex);

  return (
    <section className={`min-h-screen py-8 ${className}`}>
      <Wrapper>
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text-primary)' }}
            >
              {category ? (
                <>
                  <span className="gradient-text capitalize">{category}</span>
                  <span style={{ color: 'var(--text-primary)' }}> News</span>
                </>
              ) : 'Latest News'}
            </h1>
            {!IsLoading && news.length > 0 && (
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {news.length} articles found
              </p>
            )}
          </div>
          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
                animation: 'pulse 1.5s infinite',
              }}
            />
            <span className="text-xs font-medium" style={{ color: '#22c55e' }}>Live</span>
          </div>
        </div>

        {/* Content */}
        {IsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : currentNews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <span className="text-4xl">📰</span>
            <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              No articles found for "{category}"
            </p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger ${className}`}>
            {currentNews.map((article, index) => {
              const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short', year: 'numeric'
              });
              const cleanContent = (text) => {
                if (!text) return '';
                return text.replace(/\[\+\d+\schars\]/, '').trim();
              };
              return (
                <NewsCard
                  key={index}
                  newsImg={article.urlToImage}
                  newsTitle={article.title}
                  publishDate={formattedDate}
                  source={article.source?.name}
                  content={cleanContent(article.description || article.content)}
                  readMore={article.url}
                />
              );
            })}
          </div>
        )}

        <Pagination
          totalNews={news.length}
          newsPerPage={newsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Wrapper>
    </section>
  )
}

/* ── News Card ── */
const NewsCard = ({ newsImg, newsTitle, publishDate, source, content, readMore }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="glass-card fade-up flex flex-col overflow-hidden group">
      {/* Image */}
      <div className="relative h-44 overflow-hidden" style={{ borderRadius: '16px 16px 0 0' }}>
        {newsImg && !imgError ? (
          <img
            src={newsImg}
            alt={newsTitle}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-3xl"
            style={{ background: 'linear-gradient(135deg, #1e1b4b, #1e3a5f)' }}
          >
            📰
          </div>
        )}
        {/* Source badge */}
        {source && (
          <span
            className="absolute bottom-2 left-2 text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(6px)',
              color: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {source}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <p className="text-xs font-medium" style={{ color: '#64748b' }}>{publishDate}</p>
        <h2
          className="text-sm font-semibold leading-snug line-clamp-2"
          style={{ color: 'var(--text-primary)', fontFamily: "'Outfit', sans-serif" }}
        >
          {newsTitle}
        </h2>
        {content && (
          <p className="text-xs leading-relaxed line-clamp-3 flex-1" style={{ color: 'var(--text-muted)' }}>
            {content}
          </p>
        )}
        <a
          href={readMore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold mt-auto pt-1 transition-colors duration-200"
          style={{ color: '#60a5fa' }}
          onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
          onMouseLeave={e => e.currentTarget.style.color = '#60a5fa'}
        >
          Read full story
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
};

/* ── Skeleton Card ── */
const SkeletonCard = () => (
  <div className="glass-card overflow-hidden" style={{ borderRadius: '16px' }}>
    <div className="skeleton-box h-44 w-full" />
    <div className="p-4 flex flex-col gap-3">
      <div className="skeleton-box h-3 w-20 rounded" />
      <div className="skeleton-box h-4 w-full rounded" />
      <div className="skeleton-box h-4 w-4/5 rounded" />
      <div className="skeleton-box h-3 w-full rounded mt-1" />
      <div className="skeleton-box h-3 w-3/4 rounded" />
    </div>
  </div>
);

export default News
