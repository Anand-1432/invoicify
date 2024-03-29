import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import profile from '../../assets/profile.png'

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

                <Link to="/user_profile"><img src={profile} alt="" /></Link>
                <p>Evam M</p>

                <div><Link to="/user_profile" id='link'>My Profile</Link></div>
                <hr />

                {/* <div><Link to='/add_invoice' id='link'>Add Invoice</Link></div> */}

                <div><Link to='/add_warranty' id='link'>Add Warranty</Link></div>
                <hr />

                <div><Link to='/support' id='link'>Support</Link></div>
                <hr />

                {/* <div><Link to='/service_center' id='link'>Service Center</Link></div> */}
                {/* <hr /> */}

                <div><Link to='/dashBoard' id='link'>Switch To Seller</Link></div>
                <hr />

                <div><Link to='/login' id='link'>Logout</Link></div>
            </div>
        </>
    )
}

export default Navbar