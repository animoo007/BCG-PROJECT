import React from 'react'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import wifi from '../../assets/wifi.png'
import './footer.component.css'
import FooterTop from './footertop.component.jsx'


function Footer() {
    return (
        <><FooterTop /><div className='footer-bottom-section'>
            <a>
                <img src={twitter}></img>
            </a>
            <a>
                <img src={facebook}></img>
            </a>
            <a>
                <img src={wifi}></img>
            </a>
            <a>
                <img src={instagram}></img>
            </a>
            <p class='footer-copyrights'>COPYRIGHT COMMERCE 2020 - <span> TERMS & CONDITIONS PRIVACY POLICY</span></p>
        </div></>

    )
}

export default Footer