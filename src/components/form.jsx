import React from 'react'; 
import { useState } from 'react'; 

const Form = () => {

  const test = () => {
    console.log('hello');  
  }

  const [mailerState, setMailerState] = useState({
    name: '',
    email:'',
    message:'', 
  }); 
  
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value, 
    })); 
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData); 
        if(resData.status === 'success') {
          alert('Message Sent');
        } else if (resData.status === 'fail') {
          alert('Message failed to send!');
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <div className="form">
      <form onSubmit={submitEmail}>
        <fieldset className='form-fieldset'>
          <legend className='legend'>Send me a message:</legend>
          <input
            className='form-name form-input'
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
            required
          />
          <input
            className='form-email form-input'
            type='email'
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
            required
          />
          <textarea
            className='form-message form-input'
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
            required
            rows='6'
          />
          <div className='button-div'>
            <button className='pushable big-red'>
              <span className='shadow big-red'></span>
              <span className='edge big-red'></span>
              <span className='front big-red'>
                Send
              </span>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}



export default Form; 