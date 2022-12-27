import React from 'react'
import { useState } from 'react';
import Axios from "axios"

const NewsLetterForm = () => {
  // email data state
  let [emailData, setEmailData] = useState("")
  // updates email data
  function getData(val) {
    setEmailData(val.target.value)
  }
  // submiting email data to our server
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: emailData
    }
    console.log("Form Data:", formData)

    Axios.post("http://localhost:4000/", {
      ...formData
    })
    .then((res) => {
      setEmailData("");
      console.log("Email was Sent:", res);
    })
    .catch((err) => {
      console.log("error:", err);
    })
  
  };

  return (
    <form className='form-data' onSubmit={handleSubmit}>
      <input className='newsletter-email-input' type='email' placeholder='email' onChange={getData} value={emailData} />
      <button className='newsletter-submit' type='submit' >Sign Up!</button>
    </form>
  )
}

export default NewsLetterForm