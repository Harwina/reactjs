import React from 'react';
import './Style.css'; // Include the CSS file

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className='fw-bold'>Great Words From People</h2>
      <p className="testimonials-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
      </p>
      
      <div className="testimonials-cards">
        <div className="testimonial-card">
          <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="Stephen Smith" className="testimonial-image" />
          <h3>Co Founder</h3>
          <p className="testimonial-name">Stephen Smith</p>
          <p className="testimonial-quote">
            "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."
          </p>
          <div className="testimonial-rating">
            ★★★★★
          </div>
        </div>
        
        <div className="testimonial-card">
          <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="Lorem Robinson" className="testimonial-image" />
          <h3>Manager</h3>
          <p className="testimonial-name">Lorem Robinson</p>
          <p className="testimonial-quote">
            "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."
          </p>
          <div className="testimonial-rating">
            ★★★★☆
          </div>
        </div>
        
        <div className="testimonial-card">
          <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="Saddika Alard" className="testimonial-image" />
          <h3>Team Leader</h3>
          <p className="testimonial-name">Saddika Alard</p>
          <p className="testimonial-quote">
            "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."
          </p>
          <div className="testimonial-rating">
            ★★★★★
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
