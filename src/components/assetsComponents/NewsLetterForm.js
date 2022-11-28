import React from 'react'
import { useState } from 'react';

const NewsLetterForm = () => {
  let email = document.querySelectorAll(".newsletter-email-input");

  let [emailData, setEmailData] = useState("")
  function getData(val) {
    setEmailData(val.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let formData = {
      email: emailData
    }
    console.log(formData)
    setEmailData("")
  }
  

  return (
    <form className='form-data' onSubmit={handleSubmit}>
      <input className='newsletter-email-input' type='email' placeholder='email' onChange={getData} value={emailData}/>
      <button className='newsletter-submit' type='submit' >Sign Up!</button>
    </form>
  )
}

export default NewsLetterForm