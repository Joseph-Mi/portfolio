import React from 'react';
import styles from './Contact.module.scss'; // Assuming you have a CSS module for styling
import { getImageUrl } from '../../utils/utils';

const Contact = () => {
    const myImage = getImageUrl("my_photos/heroImage.png");
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
                <form className={styles.form}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
        
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
        
                    <label htmlFor="message-type">Message Type:</label>
                    <select id="message-type" name="message-type" required>
                        <option value="">Select a message type</option>
                        <option value="chat">Coffee Chat</option>
                        <option value="referral">Referrals</option>
                        <option value="inquiry">General Inquiries</option>
                        <option value="job">Seeking Candidates</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
        
                    <button className={styles.submit} type="submit">Submit</button>
                </form>
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