import React from 'react'
import './dashBoard.scss'

import Footer from '../../components/footer/Footer';
import salepro from '../../assets/salepro.png';
import Navbar2 from '../../components/navbar2/Navbar2';

const DashBoard = () => {


    const openNavbar = () => {

        const l = document.getElementById('con');
        l.style.display = 'block';

        const bar = document.getElementById('slide');
        bar.style.left = '0px';

    }

    return (
        <>
            <div className='main'>
                <div className='dash'>

                    <Navbar2 />

                    <div className='Nav'>
                        <img id='on' src={salepro} alt="" onClick={openNavbar} />
                        <img id='off' src={salepro} alt="" />
                        <p>A-One Electronics</p>
                    </div>

                    <div className='chartCon'></div>
                    <div className='sellingBrand'></div>

                    <div className='companyCon'>
                        <div className='company'></div>
                    </div>

                        <Footer />
                </div>
            </div>
        </>
    )
}

export default DashBoard