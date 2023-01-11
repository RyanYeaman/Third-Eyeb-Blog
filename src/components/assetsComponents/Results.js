import React from 'react'

const Results = () => {
  const resultForm = document.querySelector(".results")
  
   //closing result form
   function closeResultForm() {
    resultForm.classList.toggle("hide")
  }
  return (
    <div className='results hide'>
      <h1 className='result-title'>Connecting to Our Newsletter</h1>
      <p className='result-message'>Thanks for waiting!</p>
      <button className='result-button' onClick={closeResultForm}>Finnish</button>
    </div>
  )
}

export default Results