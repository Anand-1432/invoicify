import React, { useState, useEffect } from 'react'
import './addcustomer.scss';

import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CallIcon from '@material-ui/icons/Call';

import Footer from '../../components/footer/Footer';




const AddCustomer = () => {

////////////////////////////////////////////////////////////////
    const [time, setTime] = useState(90);
    const [state, setstate] = useState(false);

    const gernerate = (e) => {

        e.preventDefault();

        setstate(true);

        document.getElementById("subBtn").innerHTML = "Login";
        document.getElementById("resend").style.display = "block";

    }

    useEffect(() => {
        if (state) {
            const update = () => {
                setTime(pre => pre -= 1);
            }
            setInterval(update, 1000);
        }
    }, [state]);
//////////////////////////////////////////////////////////


    return (
        <>
            <div className='main'>
                <div className='addCustomer'>

                    <div className='header'>
                        <Link to="/dashboard" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                    </div>

                    <div className='heading'>Add Customer</div>
                    <form>
                        <p>Customer’s Number</p>
                        <span className='icon'><CallIcon htmlColor='gray' /></span>
                        <input className="form-control" type="text" placeholder="Enter Customer’s Number" />

                        <p>OTP</p>
                        <span className='icon'><LockOpenIcon htmlColor='gray' /></span>
                        <input className="form-control" type="password" placeholder="Enter OTP" />

                        <div id='resend'>
                            <p>{time} sec</p>
                            <div><button onClick={(e) => { e.preventDefault(); setTime(90) }}>Resend</button></div>
                        </div>

                        <button type='submit' id='subBtn' className='btn btn2 btn-primary' onClick={gernerate}>Generate OTP</button>
                    </form>

                    <Footer/>

                </div>
            </div>
        </>
    )
}

export default AddCustomer