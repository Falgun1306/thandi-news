import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper'
import axios from 'axios'
import Loader from '../Loader'
import useMyStore from '../../newsStore'
import Pagination from './Pagination'

const News = ({ className }) => {
  const { news, setNews, IsLoading, setIsLoading, category } = useMyStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(8);

  const URL = `https://newsapi.org/v2/everything?q=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`

  const fetchNews = async () => {
    setIsLoading(true)
    try {
      const response = await axios(URL)

      if (response?.data?.articles) {
        setNews(response.data.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error("API ERROR:", error?.response?.data || error.message);
      setNews([]);
    }finally{
      setIsLoading(false)
    }    
  }

  //currentPage, newsperPage, lastPostIndex = currentPage*newsperPage, firstPostIndex = lastNewsIndex-postperPage

  useEffect(() => {
    setCurrentPage(1)
    fetchNews();
  }, [category]);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex);

  return (
    <div>
      <Pagination
        totalNews={news.length}
        newsPerPage={newsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Wrapper>
        {IsLoading
          ?
          <Loader className='min-h-[30vh] flex justify-center items-center' />
          :
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
            {currentNews.map((news, index) => {
              const formattedDate = new Date(news.publishedAt).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
              });
              const cleanContent = (text) => {
                if (!text) return "";
                return text.replace(/\[\+\d+\schars\]/, "").trim();
              };

              return (
                <NewsCard
                  key={index}
                  newsImg={news.urlToImage}
                  newsTitle={news.title}
                  publishDate={formattedDate}
                  content={cleanContent(news.content)}
                  readMore={news.url}
                />
              )
            })}


          </div>
        }
      </Wrapper>
      <Pagination
        totalNews={news.length}
        newsPerPage={newsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

const NewsCard = ({ newsImg, newsTitle, publishDate, content, readMore }) => {
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img
          src={newsImg || "/no-image.png"}
          alt={newsTitle}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/no-image.png")}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{newsTitle}</h2>
        <p className='text-green-500'>{publishDate}</p>
        <p className='line-clamp-3'>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn border-white"><a href={readMore} target="_blank">Read More</a></button>
        </div>
      </div>
    </div>
  )
}

export default News
