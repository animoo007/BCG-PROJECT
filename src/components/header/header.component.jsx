import React from 'react'

import headerlogo from '../../assets/logoheader.png'
import search from '../../assets/icon-search.png'
import './header.css'


function Header() {
    return (
        <div className="navlist">
        <a href='#'>
        <img width={108} height={16} src= {headerlogo} alt={'headerlogo'}></img>
        </a>
        <a href="#">Sell</a>
        <a href="#">MarketPlace</a>
        <a href="#">Community</a>
        <a href="#">Develop</a>
        <a href="#">Resources</a>
        <div class="navlist-right">
        <a href="#">Log In</a>
            <button className='getstarted-btn'>
                Get Started
            </button>
           <img className='searchicon' src={search} alt={'search'}></img> 
        </div>
    </div>

    )
}

export default Header