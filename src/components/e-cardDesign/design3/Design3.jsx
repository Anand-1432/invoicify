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
            <MaxCard3 img={img1}/>
            <MaxCard3 img={img2}/>
            <MaxCard3 img={img3}/>
            <MaxCard3 img={img4}/>
            <MaxCard3 img={img5}/>
            <MaxCard3 img={img6}/>
        </div>
    </>
  )
}

export default Design3