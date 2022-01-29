import React from "react";
import "./style.scss";
function Footer(props) {
  return (
    <footer className="footer">
      <img src="./img/bgfooter.jpg" alt="footer" />
      <div className="footer-content grid grid-col-4 grid-col-sm-2">
        <div className="footer-content__col">
          <span className="title">SUPPORT</span>
          <span>Contact Us</span>
          <span>FAQs</span>
          <span>Size Guide</span>
        </div>
        <div className="footer-content__col">
          <span className="title">SHOP</span>
          <span>SmartPhone Shopping</span>
          <span>Moto's Shopping</span>
          <span>Camera's Shopping</span>
        </div>
        <div className="footer-content__col">
          <span className="title">COMPANY</span>
          <span>Our Story</span>
          <span>Careers</span>
          <span>Terms & Condition</span>
          <span>Privacy & Cookie policy</span>
        </div>
        <div className="footer-content__col">
          <span className="title">CONTACT</span>
          <span>0334436231</span>
          <span>chuongdinh2202@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
