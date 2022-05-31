import React, { useEffect, useState } from 'react'
import './login.scss'
import CallIcon from '@material-ui/icons/Call';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [login, setlogin] = useState(false);
    const navigate = useNavigate();

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


    const navigating = () => {
        navigate('/select_user_type');
    }


    return (
        <>
            <div className='main'>
                <div className='loginContainer'>
                    <div className='heading'>Invoicify</div>
                    <form>
                        <p>Number</p>
                        <span className='icon'><CallIcon htmlColor='gray' /></span>
                        <input className="form-control" type="text" placeholder="Enter Your Number" />

                        <p>OTP</p>
                        <span className='icon'><LockOpenIcon htmlColor='gray' /></span>
                        <input className="form-control" type="password" placeholder="Enter OTP" />

                        <div id='resend'>
                            <p>{time} sec</p>
                            <div><button onClick={(e) => { e.preventDefault(); setTime(90) }}>Resend</button></div>
                        </div>

                        {!login ?
                            <button type='submit' id='subBtn' className='btn btn-primary' onClick={gernerate}>Generate OTP</button>
                            : <button type='submit' id='subBtn' className='btn btn-primary' onClick={navigating}>Login</button>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login