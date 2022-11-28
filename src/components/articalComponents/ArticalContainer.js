import React from 'react'

const ArticalContainer = (props) => {
  return (
    <div className={props.articalPostNumber === "1" ? "artical-1" : props.articalPostNumber === "2" ? "artical-2" : props.articalPostNumber === "3" ? "artical-3" : ""}>
        <div className="artical-img-container">
            <img className='artical-img' src={props.articalPostNumber === "1" ? "./images/do-more.jpg" : props.articalPostNumber === "2" ? "./images/come-to-far.jpg" : props.articalPostNumber === "3" ? "./images/phone-addiction.jpg" : ""}  alt=""/>
        </div>
        <div className='artical-content'>
            <p className='artical-title'>{props.articalPostNumber === "1" ? "Be in Control of Your Life" : props.articalPostNumber === "2" ? "Dont Realy on Motivation" : props.articalPostNumber === "3" ? "Dont Realy on Motivation" : props.articalPostNumber ? "Negative Impact of Social Media" : "" }</p>
            <p className='artical-summary'>{props.articalPostNumber === "1" ? " Learn how to start taking more control of your life and wield the confidence to pursue the life that's going to make you happy." : props.articalPostNumber === "2" ? "Learn about the misconception of motivation.you should never rely on pure motivation to be proactive for the goals you set for yourself." : props.articalPostNumber === "3" ? "Learn the major negative impact that social media has on your slef-confidence and the way you think." : "" }</p>
            <p className='artical-athor'>{props.articalPostNumber === "1" ? "By: Ryan Yeaman" : props.articalPostNumber === "2" ? "By: Ryan Yeaman" : props.articalPostNumber === "3" ? "By: Ryan Yeaman" : "" }</p>
        </div>
    </div>
  )
}

export default ArticalContainer