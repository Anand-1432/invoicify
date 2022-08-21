import React from 'react'
import './design3.scss'
import MaxCard3 from './max-e-card3/MaxCard3'

import img1 from '../../../assets/cart31.png'
import img2 from '../../../assets/cart32.png'
import img3 from '../../../assets/cart33.png'
import img4 from '../../../assets/cart34.png'
import img5 from '../../../assets/cart35.png'
import img6 from '../../../assets/cart36.png'


const Design3 = () => {
  return (
    <>
      <div className='design3'>
        <MaxCard3 img={img2} color1="red" color2="white" color3="black" />
        <MaxCard3 img={img1} color1="green" color2="white" color3="#651f1f" />
        <MaxCard3 img={img3} color1="white" color2="white" color3="white" />
        <MaxCard3 img={img4} color1="white" color2="white" color3="white" />
        <MaxCard3 img={img5} color1="yellow" color2="pink" color3="pink" />
        <MaxCard3 img={img6} color1="pink" color2="white" color3="white" />
      </div>
    </>
  )
}

export default Design3