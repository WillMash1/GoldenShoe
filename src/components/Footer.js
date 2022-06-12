import React from 'react'
import Button from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our email list for great deals and special offers
            </p>
            <p className="footer-subscription-text">
                You can ubsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                    <Button className="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/'></Link>
                    <Link to='/'>Mission</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>What We Do</Link>
                 
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'></Link>
                    <Link to='/'>Returns</Link>
                    <Link to='/'>Delivery Times</Link>
                    <Link to='/'>FAQ</Link>
                    
                </div>
                <div className="footer-link-wrapper">
                
                <div className="footer-link-items">
                    <h2>Careers</h2>
                    <Link to='/sign-up'></Link>
                    <Link to='/'>Join Us</Link>
                    <Link to='/'>Careers</Link>

                </div>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo" to="/">
                        Golden Shoe
                    </Link>
                </div>
                <small className="website-rights">Golden Shoe © 2022</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook" to='/' target='_blank' aria-label='facebook'>
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link className="social-icon-link instagram" to='/' target='_blank' aria-label='instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link twitter" to='/' target='_blank' aria-label='twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link github" to='/' target='_blank' aria-label='github'>
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link className="social-icon-link linkedin" to='/' target='_blank' aria-label='linkedin'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer