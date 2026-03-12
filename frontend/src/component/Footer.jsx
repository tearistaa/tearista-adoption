import {
    FaEnvelope,
    FaFacebook,
    FaHeart,
    FaInstagram,
    FaPhone,
    FaTwitter,
} from 'react-icons/fa';

import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-brand'>
                    <h2>Tearista Adoption</h2>
                    <p>Giving a second chance to those who are voiceless through love, care, and compassion.</p>
                </div>

                <div className='footer-links'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/gallery'>Pet Gallery</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li><a href='/about'>About Us</a></li>
                    </ul>
                </div>

                <div className='footer-contact'>
                    <h4>Contact Us</h4>
                    <p><FaEnvelope /> tearistaadoption@gmail.com</p>
                    <p><FaPhone /> +123456789</p>
                    
                    <div className='social-icons'>
                        <FaInstagram /> <FaTwitter /> <FaFacebook />
                    </div>
                </div>

                <div className='footer-newsletter'>
                    <h4>Stay Updated</h4>
                    <p>Get notified whenever a new furry friend is looking for a forever home.</p>
                    <div className='subscribe-form'>
                        <input type='email' placeholder='Your Email...' />
                        <button className='btn-subscribe'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>&copy; 2026 Tearista Adoption. Made with <FaHeart/> for animals.</p>
            </div>
        </div>
    );
}

export default Footer;