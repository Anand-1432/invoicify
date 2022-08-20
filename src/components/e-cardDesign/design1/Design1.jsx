import React from 'react'
import './design1.scss'
import MaxCard1 from './max-e-card1/MaxCard1'

import img1 from '../../../assets/cart11.png'
import img2 from '../../../assets/cart12.png'
import img3 from '../../../assets/cart13.png'
import img4 from '../../../assets/cart14.png'
import img5 from '../../../assets/cart15.png'
import img6 from '../../../assets/cart16.png'

const Design1 = () => {
  return (
    <>
        <div className='design1'>
            <MaxCard1 img={img1} />
            <MaxCard1 img={img2} />
            <MaxCard1 img={img3} />
            <MaxCard1 img={img4} />
            <MaxCard1 img={img5} />
            <MaxCard1 img={img6} />
        </div>
    </>
  )
}

export default Design1