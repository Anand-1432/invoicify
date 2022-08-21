import React from 'react'
import './design2.scss'
import MaxCard2 from './max-e-card2/MaxCard2';

import img1 from '../../../assets/cart21.png'
import img2 from '../../../assets/cart22.png'
import img3 from '../../../assets/cart23.png'
import img4 from '../../../assets/cart24.png'
import img5 from '../../../assets/cart25.png'
import img6 from '../../../assets/cart26.png'


const Design2 = () => {
  return (
    <div className='design2'>
        <MaxCard2 img={img1} color1="red" color2="white" color3="black"/>
        <MaxCard2 img={img2} color1="white" color2="white" color3="black"/>
        <MaxCard2 img={img3} color1="#ff5e00" color2="black" color3="black"/>
        <MaxCard2 img={img4} color1="yellow" color2="white" color3="white"/>
        <MaxCard2 img={img5} color1="yellow" color2="white" color3="white"/>
        <MaxCard2 img={img6} color1="black" color2="black" color3="#474747"/>
    </div>
  )
}

export default Design2;