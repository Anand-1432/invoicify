import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import img from "../../assets/time.png"

const Generate = () => {
    return (
        <>
            <div className='main'>
                <div className='myprofile'>

                    <div className='header'>
                        <Link to="/dashBoard" className='btn back'><ArrowBackIcon /></Link>
                        Generate Invoice
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

export default Generate