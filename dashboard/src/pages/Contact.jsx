import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import "./Contact.css"
import { Nav_Cus } from '../components/Other/navbar/Nav_Cus';
import { Footer } from '../components/Other/footer/Footer';

export const Contact = () => {
    return (
        <div>
            <Nav_Cus/>
            <div className="contact-us-container">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <p>123 Main Street, City, Country</p>
                    </div>
                    <div className="contact-info-item">
                        <FaPhone className="contact-icon" />
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="contact-icon" />
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}
