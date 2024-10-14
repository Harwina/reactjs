import React from 'react';
import './Style.css'; // Include the CSS file

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <h2 className='fw-bold'>Latest News</h2>
      <p className="latest-news-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
      </p>

      <div className="news-cards">
        <div className="news-card">
         
          <div className="news-content">
            <p className="news-category">By Admin | Snacks</p>
            <h3>Urna pretium elit mauris cursus at elit Vestibulum.</h3>
            <a href="#" className="read-more">Read More →</a>
          </div>
          <div className="news-image">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" alt="News 1" />
            <div className="news-date">
              <span>10</span>
              <span>Oct</span>
            </div>
          </div>
        </div>

        <div className="news-card">
          
          <div className="news-content">
            <p className="news-category">By Admin | Food</p>
            <h3>Best guide to Shopping for organic ingredients.</h3>
            <a href="#" className="read-more">Read More →</a>
          </div>
          <div className="news-image">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" alt="News 2" />
            <div className="news-date">
              <span>09</span>
              <span>Sep</span>
            </div>
          </div>
        </div>

        <div className="news-card">
          
          <div className="news-content">
            <p className="news-category">By Admin | Snacks</p>
            <h3>Cursus at elit vestibulum urna pretium elit mauris.</h3>
            <a href="#" className="read-more">Read More →</a>
          </div>
          <div className="news-image">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" alt="News 3" />
            <div className="news-date">
              <span>12</span>
              <span>Oct</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
