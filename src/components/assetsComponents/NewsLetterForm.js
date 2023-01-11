import React from 'react'
import { useState } from 'react';
import Axios from "axios"

const NewsLetterForm = () => {
  const resultForm = document.querySelector(".results")
  const resultTitle = document.querySelector(".result-title")
  const resultMessage = document.querySelector(".result-message")

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

    Axios.post("https://thirdeye-api.onrender.com/", {
      ...formData
    })
      .then((res) => {
        setEmailData("");
        resultTitle.innerHTML = res?.data ? "Welcome to The Third Eye" : "Error"
        resultMessage.innerHTML = res?.data ? "Thank you for joining the Third Eye newsletter" : "There was a propblem with the email you entered! Try again."
        console.log("Email was Sent:", res);
      })
      .catch((err) => {
        console.log("error:", err);
      })

    resultForm.classList.remove("hide")
  };



  return (
    <form className='form-data' onSubmit={handleSubmit} >
      <input className='newsletter-email-input' type='email' placeholder='email' onChange={getData} value={emailData} />
      <button className='newsletter-submit' type='submit' >Sign Up!</button>
    </form>
  )
}

export default NewsLetterForm