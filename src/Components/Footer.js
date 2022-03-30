import React from 'react'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faGlobe,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='footer'>
        <div>
            <p className='copyright'>© 2022 Vade Labs Pvt. Ltd.</p>
            <FontAwesomeIcon className='twitter' icon={faTwitter} size="2x" />
            <FontAwesomeIcon className='linkedin' icon={faLinkedin} size="2x" />
        </div>
        <div>
            <p className='about_us'>About us</p>
            <p className='content'>We're a group of enthusiasts who love helping creatives build software applications.</p>
        </div>
        <div>
            <p className='contact'>Contact</p>
            <div>
                <FontAwesomeIcon className='globe' icon={faGlobe} />
            <p className='email'>hello@vadelabs.com</p>
            </div>
            <div>
            <p className='phone'>+91-7829887887</p>
            <FontAwesomeIcon className='phone_icon' icon={faPhone}/>
            </div>
        </div>
    </div>
  )
}
