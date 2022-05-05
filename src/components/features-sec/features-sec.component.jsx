import React from 'react';
import './features-sec.component.css'
import fblogo from '../../assets/fb.png'
import Square from '../../assets/square.png'
import MailChimp from '../../assets/mailchimp.png'
import googleAds from '../../assets/googleads.png'
import apppay from '../../assets/apppay.png'
import applemsg from '../../assets/iphonemsg.png'
import people1 from '../../assets/people1.png'
import people2 from '../../assets/people2.png'
import people3 from '../../assets/people3.png'
// import jetPack from '../../assets/jetpack.png'


export default function Features() {
    return(
        <div>
        <p className='features-title'>Your eCommerce made simple</p>
        <div className='main-feature'>
        
        <div className='need-start'>
            <img src={apppay}></img>
            <img src={applemsg}></img>
        <p className='need-title'>All You Need to Start</p>
        <p className='need-subTitle'>Add Commerce plugin to any WordPress site and set up a new store in minutes.</p>
        <a>Ecommerce for Wordpress ›</a>
        </div>
        <div className='customize-extend'>
        <img src={fblogo}></img>
            <img src={Square}></img>
            <img src={MailChimp}></img>
            <img src={googleAds}></img>
        <p className='need-title'>Customize and Extend</p>
        <p className='need-subTitle'>From subscriptions to gym classes to luxury cars, Commerce is fully customizable.</p>
        <a>Browse Extensions ›</a>
        </div>
        <div className='active-community'>
        <img src={people1}></img>
        <img src={people2}></img>
        <img src={people3}></img>
        <p className='need-title'>Active Community</p>
        <p className='need-subTitle'>Commerce is one of the fastest-growing eCommerce communities.</p>
        <a>Check our Forums ›</a>
        </div>
        </div>
        </div>
    )
}