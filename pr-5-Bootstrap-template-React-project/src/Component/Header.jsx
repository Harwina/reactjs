import React from 'react';
import "./style.css";

// Header Component
const Header = () => {
  return (
    <header className="container">
      {/* Top Header Section */}
      <div className="container-fluid bg-white py-4 border-bottom">
        <div className="row align-items-center justify-content-between">
          {/* Logo Section */}
          <div className="col-lg-2 col-md-3 col-sm-4 text-left">
            <a href="/">
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png"
                alt="Carrot Logo"
                className="img-fluid"
                style={{ width: '120px' }}
              />
            </a>
          </div>

          {/* Search Bar Section */}
          <div className="col-lg-7 col-md-6 col-sm-12 d-flex">
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search For items..."
              style={{ maxWidth: '400px', borderRadius: '5px 0 0 5px' }}
            />
            <select className="form-select" style={{ width: '150px' }}>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
            </select>
            <button className="btn btn-success">
              <i className="fa fa-search"></i>
            </button>
          </div>

          {/* User Icons Section */}
          <div className="col-lg-3 col-md-3 d-flex justify-content-end">
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark mx-3 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-user me-2" aria-hidden="true"></i> Account
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/account">My Account</a></li>
                <li><a className="dropdown-item" href="/orders">My Orders</a></li>
                <li><a className="dropdown-item" href="/logout">Logout</a></li>
              </ul>
            </div>
            <div className="nav-item dropdown">
              <a className="nav-link text-dark mx-3 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-heart me-2" aria-hidden="true"></i> Wishlist
              </a>
            </div>
            <a href="/cart" className="text-dark mx-3 d-flex align-items-center">
              <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i> Cart
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="container-fluid bg-light py-2">
        <div className="row align-items-center justify-content-between">
          {/* Menu Icon */}
          <div className="col-2">
            <button className="btn btn-light">
              <i className="fa fa-bars"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="col-8">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Product 1</a></li>
                  <li><a className="dropdown-item" href="#">Product 2</a></li>
                  <li><a className="dropdown-item" href="#">Product 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog 1</a></li>
                  <li><a className="dropdown-item" href="#">Blog 2</a></li>
                  <li><a className="dropdown-item" href="#">Blog 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Elements
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Element 1</a></li>
                  <li><a className="dropdown-item" href="#">Element 2</a></li>
                  <li><a className="dropdown-item" href="#">Element 3</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="col-2 text-right">
            <i className="fa fa-phone"></i> +123 (456) (7890)
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
