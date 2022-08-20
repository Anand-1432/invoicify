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
        <MaxCard2 img={img1}/>
        <MaxCard2 img={img2}/>
        <MaxCard2 img={img3}/>
        <MaxCard2 img={img4}/>
        <MaxCard2 img={img5}/>
        <MaxCard2 img={img6}/>
    </div>
  )
}

export default Design2;