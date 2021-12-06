import React from 'react';
import transformerLogo from '../../assets/Transformerlogo.png';
import './footer.css'
const Footer = () => {
   return (
      <div className="transformer__footer section__padding">
         <div className="transformer__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
         </div>

         <div className="transformer__footer-btn">
            <button type="button">Request Early Access</button>
         </div>

         <div className="transformer__footer-links">
            <div className="transformer__footer-links_logo">
               <figure>
                  <img src={transformerLogo} alt="Footer logo"/>
                  <address>
                     <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                  </address>
               </figure>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Links</h4>
               <ul>
                  <li><a href="#">Overons</a></li>
                  <li><a href="#">Social Media</a></li>
                  <li><a href="#">Counters</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Company</h4>
               <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Get in touch</h4>
               <p>Crechterwoord K12 182 DK Alknjkcb</p>
               <p><tel>085-132567</tel></p>
               <p><a href="email">info@payme.net</a></p>
            </div>
         </div>
         <div className="transformer__footer-copyright">
               <p>© 2021 TRANSFORMER. All rights reserved.</p>
            </div>
      </div>
   )
}
export default Footer
