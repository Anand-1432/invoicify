import React from 'react'
import './verify.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Verify = () => {

    const navigate  = useNavigate();

    const [data, setData] = useState({
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const [phOtp, setPhOtp] = useState(false);
    const [mailOtp, setMailOtp] = useState(false);

    const phoneOtp = () => {
        setPhOtp(true);
    }
    const emailOtp = () => {
        setMailOtp(true)
    }

    const verifyData = () =>{
         navigate(-2, {state:{status:true}});
    }

    const goBack = () =>{
        navigate(-1);
    }

    return (
        <>
            <div className='main'>
                <div className='verifyPage'>
                    <div className='header'>
                        <button className='btn back' onClick={goBack}><ArrowBackIcon /></button>
                        Profile
                    </div>

                    <h4>Verification</h4>

                    <form>
                        <div class="form-group">
                            <label>OTP will be sent to <i>*New number*</i></label>
                            <input type="text" class="form-control" value={data.phone} name="phone" onChange={handleChange} placeholder="Enter OTP sent to mobile" />

                            {!phOtp ? <span className='s1' onClick={phoneOtp}>Send Code</span> :
                                <span className='s2'>Send Code</span>}

                        </div>
                        {phOtp ? <div className='msg'>Resend Code in 59s</div> : null}


                        <div class="form-group">
                            <label>OTP will be sent to <i>*New number*</i></label>
                            <input type="text" class="form-control" value={data.email} name="email" onChange={handleChange} placeholder="Enter OTP sent to e-mail" />

                            {!mailOtp ? <span className='s1' onClick={emailOtp}>Send Code</span> :
                                <span className='s2'>Send Code</span>}
                        </div>
                        {mailOtp ? <div className='msg'>Resend Code in 59s</div> : null}



                        {(data.phone && data.email) ? <Button variant='contained' className='bt' onClick={verifyData}>Verify</Button>
                            :
                            <Button variant='contained' disabled className='bt1'>Verify</Button>}

                    </form>

                </div>
            </div>
        </>
    )
}

export default Verify