import React from 'react';
import {google,slack,atlassian,dropbox,shopify} from './import.js'

import './brand.css'



const Brand = () => {
   return (
      <div className="transformer__brand section__padding">
         <figure>
            <img src={google} alt="transformer google"/>
         </figure>
         <figure>
            <img src={slack} alt="transformer slack"/>
         </figure>
         <figure>
            <img src={atlassian} alt="transformer atlassian"/>
         </figure>
         <figure>
            <img src={dropbox} alt="transformer dropbox"/>
         </figure>
         <figure>
            <img src={shopify} alt="transformer shopify"/>
         </figure>
      </div>
   )
}

export default Brand
