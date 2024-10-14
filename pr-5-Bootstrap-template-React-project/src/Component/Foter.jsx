import React from 'react';
import "./Style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Company Info */}
        <div className="company-info">
          <h2 className="logo fw-bold">🥕Carrot</h2>
          <p className="footer-text">Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
          <p className="footer-text mt-3"><i class="fa-solid fa-location-dot text-success fs-5 me-3"></i>51 Green St.Huntington, Ohio  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beach, Ontario, NY 11746, KY  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4783, USA.</p>
          <p className="footer-text mt-2"><i class="fa-regular fa-envelope text-success fs-5 me-3"></i> example@email.com</p>
          <p className="footer-text mt-2"><i class="fa-solid fa-phone text-success fs-5 me-3"></i>+91 123 4567890</p>
        </div>

        {/* Company Links */}
        <div className="company-links">
          <h4 className="footer-heading fw-bold">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="categories">
          <h4 className="footer-heading fw-bold">Category</h4>
          <ul>
            <li>Dairy & Bakery</li>
            <li>Fruits & Vegetables</li>
            <li>Snack & Spice</li>
            <li>Juice & Drinks</li>
            <li>Chicken & Meat</li>
            <li>Fast Food</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter">
          <h4 className="footer-heading fw-bold">Subscribe Our Newsletter</h4>
          <input type="text" placeholder="Search here..." />
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="image-gallery">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg" alt="gallery1" />
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" alt="gallery2" />
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" alt="gallery3" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2024 <span className='text-success'>Carrot</span>, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
