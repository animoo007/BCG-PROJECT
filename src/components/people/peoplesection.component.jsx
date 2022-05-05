import React from 'react';
import './peoplesection.component.css'
import peoples from '../../assets/peoples.png'

export default function PeoplePage() {
return(
    <div>
        <div className='people-header'>
        <p className='people-title'>Supported by real people</p>
        <p className='people-subtitle'>Our team of Engineers works remotely from 44 countries providing customer support across multiple time zones.</p>
        </div>
    <img className='people-img' src={peoples}></img> 
    <div className='cta-section'>
        <p className='cta-title'>Commerce - the most customizable eCommerce platform for building your online business.</p>
        <button className='getstartedbtn'>GET STARTED</button>
        </div>   
    </div>
    
)
}