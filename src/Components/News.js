import React from 'react'
import NewsItem from './NewsItem'
// import '../news.css'

export default function News({ items, clickNext, clickPrev, pageValue,results }) {

  return (
    <>
      <h2 className=' my-3'>Top Headlines</h2>
      <div className='box'>
        {items && items.length > 0 ? (
          items.map((e) => {
            return <NewsItem title={e.title.slice(0, 40)} desc={e.description.slice(0, 140)} imgUrl={e.urlToImage} url={e.url} />
          })
        ) : (
          <p className='resultPara'>No news articles available.</p>
        )}
      </div>
      <div className='btn'>
      <button
          type="button"
          onClick={clickPrev}
          disabled={pageValue === 1}
        >
          <i className="fa-solid fa-arrow-left" style={{ padding: "5px 5px 5px 2px" }}></i> Previous
        </button>
        <button
          type="button"
          onClick={clickNext}
          disabled={pageValue + 1 > Math.ceil(results / 20)}
        >
          Next <i className="fa-solid fa-arrow-right" style={{ padding: "5px 2px 5px 5px" }}></i>
        </button>
      </div>
    </>
  )
}
