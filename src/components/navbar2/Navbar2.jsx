import React from 'react'
import { Link } from 'react-router-dom'

import profile from '../../assets/salepro.png'

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
                <img src={profile} alt="" />
                <p>A-One Electronics</p>
                <div>My Store</div>
                <hr />
                <div>My Products</div>
                <hr />
                <div>My Sales</div>
                <hr />
                <div>About Us</div>
                <hr />
                <div><Link to='/' id='link'>Switch To User</Link></div>
                <hr />
                <div><Link to='/scan' id='link'>Generate Invoice</Link></div>
                <hr />
                <div><Link to='/login' id='link'>Logout</Link></div>
            </div>
        </>
    )
}

export default Navbar2