import React from 'react'
import { Link } from 'react-router-dom'

import profile from '../../assets/salepro1.png'

const Navbar2 = () => {
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

                <Link to="/profile"><img src={profile} alt="" /></Link>
                <p>A-One Electronics</p>

                <div><Link to="/ecard" id='link'>My E-card</Link></div>
                <hr />
                <div><Link to="/sales" id='link'>My Sales</Link></div>
                <hr />
                <div><Link to='/order' id='link'>Place Order</Link></div>
                <hr />
                <div><Link to='/history' id='link'>Order History</Link></div>
                <hr />
                <div><Link to='/' id='link'>Switch To User</Link></div>
                <hr />
                <div><Link to='/add_customer' id='link'>Generate Warranty</Link></div>
                <hr />
                <div><Link to='/login' id='link'>Logout</Link></div>

            </div>
        </>
    )
}

export default Navbar2