import "./FormStyles.css";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

import React from 'react'

const Form = () => {
    const navigate = useNavigate();

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_z5wpkmt', 'template_4y8s1p2', e.target, 'NG64tna7vTfnCJqjU').then(res =>{
        console.log(res);
        alert("Your message has been sent.");
        navigate("/");
        
    }).catch(err=> console.log(err));
}


  return (
    <div className="form">
        <form onSubmit={sendEmail} >
            <label>Your Name</label>
            <input type="text" name="name" className="form-control"></input>
            <label>Email</label>
            <input type="email" name="user-email" className="form-control"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea name="message" className="form-control" rows="6" placeholder="Type Your Message Here"/>
            <input
                className="submit-btn"
                type="submit"
                value="Submit"
                
            />
            {/* <button className="btn">Submit</button> */}
        </form>
    </div>
  )
}

export default Form