import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import './header.css'

const Header = () => {
   return (
      <div className="transformer__header section__padding" id="home">
         <div className="transformer__header-content">
            <h1 className="gradient__text">Let’s Build Something amazing with TransformerAI</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

            <div className="transformer__header-content__input">
               <input type="email" placeholder="Enter Your Email" />
               <button type="button">Get Started</button>
            </div>

            <div className="transformer__header-content__people">
               <img src={people} alt="transformer people" />
               <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
         </div>
         <div className="transformer__header-image">
            <figure>
               <img src={ai} alt="transformer ai" />
            </figure>
         </div>
      </div>
   )
}

export default Header
