import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import profile from '../../assets/profile.jpg'

const Navbar = () => {

    const closeBar = () => {
        const l = document.getElementById('con');
        l.style.display = 'none';

        const bar = document.getElementById('slide');
        bar.style.left = '-330px';
    }

    return (
        <>
            <div className='navCon' id='con' onClick={closeBar}></div>
            <div className='sidebar' id='slide' onClick={e => e.stopPropagation()}>
                <img src={profile} alt="" />
                <p>Evam M</p>
                <div>My Profile</div>
                <hr />
                <div>My Products</div>
                <hr />
                <div>Best Offer</div>
                <hr />
                <div><Link to='/add_invoice' id='link'>Add Invoice</Link></div>
                <hr />
                <div><Link to='/service_center' id='link'>Service Center</Link></div>
                <hr />
                <div><Link to='/dashBoard' id='link'>Switch To Seller</Link></div>
                <hr />
                <div><Link to='/scan' id='link'>Scan</Link></div>
                <hr />
                <div><Link to='/login' id='link'>Logout</Link></div>
            </div>
        </>
    )
}

export default Navbar