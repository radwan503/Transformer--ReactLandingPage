import React from 'react';
import {blog01,blog02,blog03,blog04,blog05} from './imports'
import { Article } from '../../components';
import './blog.css'

const Blog = () => {
   return (
      <div className="transformer__blog section__padding" id="blog">
         <div className="transformer__blog-heading">
            <h1 className="gradient__text">A lot is happening,<br/> We are blogging about it.</h1>
         </div>

         <div className="transformer__blog-container">
            <div className="transformer__blog-container_groupA">
               <Article imgUrl={blog01} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/>
            </div>
            <div className="transformer__blog-container_groupB">
               <Article imgUrl={blog02} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/>
               <Article imgUrl={blog03} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/>
               <Article imgUrl={blog04} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/>
               <Article imgUrl={blog05} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/>
            </div>
         </div>
      </div>
   )
}

export default Blog
