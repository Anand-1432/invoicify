import React from 'react'
import './support.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';


const Support = () => {
    return (
        <>
            <div className='main'>
                <div className='support'>
                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon /></Link>
                        Support
                    </div>

                    <div className='spBox'>
                        <div className='sp1'>
                            <PhoneIcon />
                        </div>
                        <div className='sp2'>
                            <section><a href="tel:7897777760"> +91 7897777760 </a></section>
                            <div>For on call support</div>
                        </div>
                    </div>

                    <div className='spBox'>
                        <div className='sp1'>
                            <MailOutlineIcon />
                        </div>
                        <div className='sp2'>
                            <section><a href="mailto:support@billify.in">support@billify.in</a></section>
                            <div>Write your querries here we will contact you as soon as possible</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Support