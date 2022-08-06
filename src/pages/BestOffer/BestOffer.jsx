import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import img from "../../assets/time.png"


const BestOffer = () => {
    return (
        <>
            <div className='main'>
                <div className='myprofile'>

                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon /></Link>
                        Best Offer
                    </div>

                    <div className='centre'>
                        <img src={img} alt="" />
                        <div>Coming Soon...</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BestOffer