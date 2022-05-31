import React from 'react'
import Footer from '../../components/footer/Footer'
import './sales.scss'

import vector from '../../assets/Vector.png'
import profile from '../../assets/profile.jpg'
import Navbar2 from '../../components/navbar2/Navbar2'

const Sales = () => {


  const openNavbar = () => {

    const l = document.getElementById('con');
    l.style.display = 'block';

    const bar = document.getElementById('slide');
    bar.style.left = '0px';

  }

  return (
    <>
      <div className='main'>
        <div className='sales'>

         <Navbar2/>

          <div className='navBar'>
            <img id='Onbtn' src={vector} alt="..." onClick={openNavbar} />
            <img id='Offbtn' src={vector} alt="..." />
            <img id='pro' src={profile} alt="..." />
          </div>

          <div className='footCon'>
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}

export default Sales