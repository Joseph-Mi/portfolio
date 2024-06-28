import React, { useState, useEffect } from 'react';
import styles from './Contact.module.scss'; // Assuming you have a CSS module for styling
import { getImageUrl } from '../../utils/utils';

const Contact = () => {
    const myImage = getImageUrl("my_photos/heroImage.png");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message_type: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://my-portfolio-backend-fnbh.onrender.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', message_type: '', message: '' });
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('error');
        }
    };

  return (
    <div className={styles.contactContainer}>
        <div className={styles.info}>
            <h1>Ask Me Anything!</h1>
            <br />
            <p>Please submit any specific inquiries to this forum. It will be directly sent to my inbox. 
                Please note that all messages will be logged and used to train a ML model, so please refrain from disclosing personal or confidential information.
                <br />
                Feel free to use the chatbot to ask any preliminary questions, such as educational background or work experience.
            </p>
        </div>
        <div className={styles.contact}>
            <div className={styles.askMe}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Full Name" value={formData.name} onChange={handleInputChange}/>
        
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleInputChange}/>
        
                    <label htmlFor="message_type">Message Type:</label>
                    <select id="message_type" name="message_type" required value={formData.message_type} onChange={handleInputChange}>
                        <option value="">Select a message type</option>
                        <option value="chat">Coffee Chat</option>
                        <option value="referral">Referrals</option>
                        <option value="inquiry">General Inquiries</option>
                        <option value="job">Seeking Candidates</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required placeholder="Enter Message" value={formData.message} onChange={handleInputChange}></textarea>
        
                    <button className={styles.submit} type="submit">Submit</button>
                </form>

                {submissionStatus === 'success' && <p>Form submitted successfully!</p>}
                {submissionStatus === 'error' && <p>Server is experiencing trouble. Please reload page and try again.</p>}

            </div>
            <div className={styles.bot}>
                <div className={styles.botHolder}>
                    Chatbot Area Placeholder
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;