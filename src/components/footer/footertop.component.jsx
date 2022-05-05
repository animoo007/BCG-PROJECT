import React from 'react'
import ticklogo from '../../assets/tick.png'
import sublogo from '../../assets/sub.png'
import lock from '../../assets/lock.png'
import commercelogo from '../../assets/commerce.png'
import './footertop.component.css'


const commercelists = [
    'Features',
    'Payments',
    'Marketing',
    'Shipping',
    "Extension Store",
    "eCommerce blog",
    'Development blog',
    'Ideas board',
    'Mobile App',
    'Community',
    'Style Guide',
    'Email Newsletter',
]
const otherproductlist = [
    "Storefront", "Slider", "Majax", "Majax", "Extensions"
]

const supportList = [
    'Documentation', 'Customizations', 'Support', 'Policy', 'Contact', ' COVID-19 Resources', 'Privacy Notice for', 'California Users'
]

const recommendList = [
    'Experts', 'Hosting Solutions', 'Pre-sales FAQ', 'Success Stories', ' Design Feedback Group'
]


export default function FooterTop() {
    return(
        <div className='main-footer'>
            <div className='image-container'>
                <div className='money-back'>
                    <img width={30} src={ticklogo} alt='tick'></img>
                    <p> 30 day money back guarantee</p>
                </div >
                <div className='support'>
                    <img width={30} src={sublogo} alt='sub'></img>
                    <p>Support teams across the world</p>
                </div>
                <div className='secure'>
                    <img width={30} src={lock} alt='lock'></img>
                    <p>Safe & Secure online payment</p>
                </div>
            </div>
            <div>
                <img className='commer-logo' src={commercelogo}></img>
            </div>
            <div className='line'></div>
            <div className='footer-top-sec'>
                <div className='about'>
                    <p>Who we Are</p>
                    <a href="#">About</a>
                    <a href="#">Team</a>
                    <a href="#">Work with us</a>
                </div>

                <div className='commerce'>
                    <p>Commerce</p>

                    {commercelists.map((list) => <a>{list}</a>)}
                </div>
                <div className='other-products'>
                    <p>Other Products</p>
                    {otherproductlist.map((list) => <a>{list}</a>)}
                </div>
                <div className='support-footer'>
                    <p>Support</p>
                    {supportList.map((list) => <a>{list}</a>)}
                </div>
                <div className='recommend'>
                    <p>We Recommend</p>
                    {recommendList.map((list) => <a>{list}</a>)}
                </div>
            </div>
        </div>
    )
}