import React from 'react'
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
        <div className="social-icons">
            <a href="https://github.com/Madraceee/CarRentalSystem"><img src="/github-logo.png"/></a>
        </div>
        <div class="footer-links">
            <a href="#">Info</a>
            <a href="#">Support</a>
            <a href="#">Marketing</a>
        </div>
        <div class="copyright">
            <span>&copy; 2023 RSR Rentals. All Rights Reserved.</span>
        </div>
</footer>
  )
}

export default Footer
