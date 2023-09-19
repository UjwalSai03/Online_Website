import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style = {{backgroundImage : `url(${PizzaLeft})`}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo eius id iure possimus ipsam ratione laborum ipsum obcaecati, sint quod, quos repudiandae harum vitae? Numquam nostrum perferendis at adipisci.
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id = "contact-form" method = "POST">
            <label htmlFor = "name">Form Name : </label>
            <input name = "name" placeholder='Enter full name : ' type = "text" />
            <label htmlFor = "email">Email </label>
            <input name = "email" placeholder='Enter full email : ' type = "email" />
            <label htmlFor = "message">Message </label>
            <textarea rows = "6" placeholder = "Enter message..." name = "message" required> </textarea>
            <button type = "submit">
                Send Message
            </button>
        </form> 
      </div>
    </div>
  );
}

export default Contact;
