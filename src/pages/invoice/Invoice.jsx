import React from 'react'
import './invoice.scss'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import img from '../../assets/invoice.png'
import { Button } from '@material-ui/core';


const Invoice = () => {

    const navigate = useNavigate();

    const goback = () =>{
        navigate(-1);
    }

    return (
        <>
            <div className='main'>
                <div className='invoice'>

                    <div className='header'>
                        <button className='btn back' onClick={goback}><ArrowBackIcon fontSize='large' /></button>
                        Invoice
                    </div>

                    <div className='imgbox'>
                        <img src={img} alt="" />
                    </div>

                     <div className='btnbox'>
                        <Button variant='contained' className='but'>Download</Button>
                     </div>

                </div>
            </div>
        </>
    )
}

export default Invoice