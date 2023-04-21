import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-links">
        <h3>Nous contacter</h3>
        <ul>
          <li><i className='bx bxs-phone'></i> +1 555-555-5555</li>
          <li><i className='bx bxs-envelope'></i> rest@gmail.com</li>
          <li><a href="https://www.google.com/maps?q=33.579551696777344,-7.617161750793457&z=17&hl=fr" rel="noreferrer" target="_blank"><i className='bx bxs-map'></i> 2 mars, Casablanca</a></li>
        </ul>
      </div>
      <div>
        <h3>Suivez-nous</h3>
        <ul className="social-media-icons">
          <li><a href="https://web.facebook.com/LORIGINAL023"><i className='bx bxl-facebook'></i></a></li>
          <li><a href="#h"><i className='bx bxl-instagram'></i></a></li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2023 L'Original</p>
    </div>
  </footer>
  )
}

export default Footer
