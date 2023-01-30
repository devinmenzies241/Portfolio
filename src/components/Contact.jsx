import React from "react";
import Form from './form'; 

const Contact  = () => {
  return (
    <div id='contact-pg' className='contact-pg'>
      <h1>Contact</h1>
      <div className='container contact-form-container'>
        <h2 className='contact-h2'>Want to get in touch?</h2>
        <div className='row'>
          <div className='col-12'>
            <Form /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact; 