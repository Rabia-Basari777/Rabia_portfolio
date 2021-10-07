import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from "../images/phone.png";
import email from "../images/email.png";
import location from "../images/location.png";
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7610.721026392572!2d78.3272190205147!3d17.490295734920544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb928cc008ac85%3A0x5a35bb03458bda84!2sHUDA%20Colony%2C%20Chanda%20Nagar%2C%20Hyderabad%2C%20Telangana%20500133!5e0!3m2!1sen!2sin!4v1633548888632!5m2!1sen!2sin" width="450" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text={'+91 9492 488 994'} title={ 'Phone'}/>
                    <ContactItem icon={email} text={'rabiabasari7@gmail.com'} title={"Email"}/>
                    <ContactItem icon={location} text={'Huda Colony, Hyderabad'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
