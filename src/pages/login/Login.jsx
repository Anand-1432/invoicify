import React, { useEffect, useState } from 'react'
import './login.scss'
import CallIcon from '@material-ui/icons/Call';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const Login = () => {

    const [time, setTime] = useState(90);

    const [state, setstate] = useState(false);

    const gernerate = (e) =>{

        e.preventDefault();

        setstate(true);

        document.getElementById("subBtn").innerHTML = "Login";
        document.getElementById("resend").style.display = "block";

    }

    useEffect(()=>{
        if(state){
            const update = () =>{
                setTime(pre => pre -= 1);
            }
            setInterval(update,1000);
        }
    },[state]);




    return (
        <>
        <div className='main'>
        <div className='loginContainer'>
            <div className='heading'>Invoicify</div>
            <form className="m-auto">
                <p>Number</p>
                <span className='icon'><CallIcon htmlColor='gray'/></span>
                <input className="form-control" type="text" placeholder="Enter Your Number" />

                <p>OTP</p>
                <span className='icon'><LockOpenIcon htmlColor='gray'/></span>
                <input className="form-control" type="password" placeholder="Enter OTP" />

                <div id='resend'>
                    <p>{time} sec</p>
                  <div><button onClick={(e)=>{e.preventDefault(); setTime(90)}}>Resend</button></div>
                </div>

                <button type='submit' id='subBtn' className='btn btn-primary' onClick={gernerate}>Generate OTP</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Login