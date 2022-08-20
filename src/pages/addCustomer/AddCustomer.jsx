import React, { useState, useEffect } from 'react'
import './addcustomer.scss';

import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CallIcon from '@material-ui/icons/Call';

import Footer from '../../components/footer/Footer';




const AddCustomer = () => {

    const navigate = useNavigate();

    const [login, setlogin] = useState(false);
    ////////////////////////////////////////////////////////////////
    const [time, setTime] = useState(90);
    const [state, setstate] = useState(false);

    const gernerate = (e) => {

        e.preventDefault();

        setstate(true);
        document.getElementById("resend").style.display = "block";
        setlogin(true);

    }

    useEffect(() => {
        if (state) {
            const update = () => {
                setTime((pre) => {
                    if (pre > 0) {
                        return (
                            pre -= 1
                        )
                    } else {
                        return (0);
                    }
                });
            }
            setInterval(update, 1000);
        }
    }, [state]);


    const onSubmit = (e) =>{
       e.preventDefault();
       navigate("/scan");
    }

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

                        {!login ?
                            <button type='submit' id='subBtn' className='btn btn2 btn-primary' onClick={gernerate}>Generate OTP</button>
                            : <button type='submit' id='subBtn' className='btn btn2 btn-primary' onClick={onSubmit}>Submit</button>
                        }

                    </form>

                    <div className='footCon'>
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddCustomer