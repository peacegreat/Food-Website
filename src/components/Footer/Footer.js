import React from 'react'
import "./Footer.css"
import { assets } from '../../frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>FabFood is Nigeria's pioneer and number one healthy food chain, providing fresh, delicious, nutrient-rich healthy meals and committed to promoting a healthy lifestyle.</p>
                <div className='footer-social-icons'> 
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>08063115670</li>
                        <li>peacenanbyen@gmail.com</li>
                    </ul>
            </div>            
        </div>
        <hr/>
        <p className='footer-copy-right'>Copyright 2024 0 FabFood.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer