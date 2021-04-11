import React from 'react'
import {FiHeart} from 'react-icons/fi'


const News = ({news, key, onToggle}) => {
   
    
    return (
        <div className = 'news'   onClick = {() => onToggle(news.id)}>
         <h3 > {news.title}</h3>
         <p> {news.content}</p>
         <p className={`news ${news.like ? 'liked' : 'unliked'}`} > 
             <FiHeart className='like'/>
             </p>
      
        </div>
    )
}





export default News
