import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(name, email, message)
        emailjs.sendForm('service_2tq69rw', 'template_k54xo9y', form.current, 'oqG8p_rPJSn6Ev42e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div
            className="contact-container" 
            id="contact"
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <form ref={form} onSubmit={sendEmail}>
                <h1 className="contact-title">Contact Me</h1>
                <input className="inputs" type="text" name="user_name" value={name} placeholder="Your name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" name="user_email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <textarea name="message" value={message} rows="6" placeholder="How can I help you?" onChange={(e) => setMessage(e.target.value)} required />
                <input className="submit-button" type="submit" value="Send" onClick={sendEmail} />
            </form>
        </div>
    );
}

export default Contact;
