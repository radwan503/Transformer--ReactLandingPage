import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css'

const Possibility = () => {
   return (
      <div className="transformer__possibility section__padding" id="possibility">
         <div className="transformer__posssibility-image">
            <figure>
               <img src={possibilityImage} alt="possobility"/>
            </figure>
         </div>
         <div className="transformer__posssibility-content">
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <h4>Request Early Access to Get Started</h4>
         </div>
         
      </div>
   )
}


export default Possibility
