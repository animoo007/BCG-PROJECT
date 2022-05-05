import React from 'react';
// import Directory from '../../components/directory/Directory.component'
// import { HomePageContainer } from './homepage.styles'
import './homepage.component.css';
import homesectionimage from '../../assets/homepage-image.png'

export default function Homepage() {
    return (
        <div className='common-home'>
        <div>
        <p className='homepage-title'>Lorem ipsum is placeholder text for previewing</p>
        <p className='sub-title'>Commerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way.</p>
        <span><button className='start-btn'>
            Start a New Store
        </button>  or <a className='customize-link'> Customize & Extend ›</a></span>
        </div>
        <img className='image-section'src={homesectionimage}>
        </img>
        </div>
    )
}
