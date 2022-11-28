import React from 'react'
import { useState } from 'react';

const NewsLetterForm = () => {

  const [emailData, setEmailData] = useState(null)
  function getData(val) {
    setEmailData(val.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let FormData = {
      email: emailData
    }
    console.log(FormData)
  }
  

  return (
    <form className='form-data' onSubmit={handleSubmit}>
      <input className='newsletter-email-input' type='email' placeholder='email' onChange={getData}/>
      <button className='newsletter-submit' type='submit' >Sign Up!</button>
    </form>
  )
}

export default NewsLetterForm