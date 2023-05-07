import React from 'react'
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
        <div className="social-icons">
            <a href="https://github.com/Madraceee/CarRentalSystem"><img src="/github-logo.png" alt="Github"/></a>
        </div>
        {/* <div className="footer-links">
            <a href="https://www.google.com">Info</a>
            <a href="https://www.google.com">Support</a>
            <a href="https://www.google.com">Marketing</a>
        </div> */}
        <div className="copyright">
            <span>&copy; 2023 RSR Rentals. All Rights Reserved.</span>
        </div>
</footer>
  )
}

export default Footer
