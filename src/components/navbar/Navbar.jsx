import React from 'react'
import './Navbar.css'
import tele from '../../assets/images/telephone.webp'
import cart from '../../assets/images/cart.png'
import logo from '../../assets/images/logo.webp'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='callbutton'>
                <img src={tele} alt='' className='tele' />
            </div>
            <div class="Navbar_texts">
                <div >ORDER NOW!</div>
                <div >012 345 678</div>
            </div>

            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Menu</li>
                <img src={logo} alt='' className='logo' />
                <li>Events</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <img src={cart} alt='' className='cart' />
        </div>
    )
}

export default Navbar