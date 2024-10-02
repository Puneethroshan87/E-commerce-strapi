import React from "react";
import "./footyer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            quaerat molestiae in ipsum! Excepturi earum, enim, placeat quo rem
            quae architecto itaque quas doloribus nostrum accusantium nesciunt,
            cupiditate aliquam non.
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            quaerat molestiae in ipsum! Excepturi earum, enim, placeat quo rem
            quae architecto itaque quas doloribus nostrum accusantium nesciunt,
            cupiditate aliquam non.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">PR Fashions</span>
          <span className="copyright">
          © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
