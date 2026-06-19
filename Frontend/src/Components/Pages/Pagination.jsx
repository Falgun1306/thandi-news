import React from 'react'

const Pagination = ({totalNews, newsPerPage,setCurrentPage, currentPage}) => {
  const pages = [];

  for(let i=1; i<Math.ceil(totalNews/newsPerPage); i++){
    pages.push(i);
  }

  return (
    <div className='flex gap-3 justify-center my-6'>
      {pages.map((pageNum, index)=>(
        <button 
          className= {`border-white 
                        border py-2 px-4 
                         text-black 
                        cursor-pointer
                        ${currentPage === pageNum ? 'bg-white':'bg-yellow-400'}
                    `} 
          key={index}
          onClick={()=>setCurrentPage(pageNum)}
        >
        {pageNum}</button>
      ))}
    </div>
  )
}

export default Pagination
