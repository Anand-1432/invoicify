import React from 'react'
import './userType.scss'

import smart from '../../assets/smart.png'
import owner from '../../assets/owner.png'
import { useNavigate } from 'react-router-dom'

const UserType = () => {

    const navigate = useNavigate();

    const goToUser = () =>{
        navigate('/user_details')
    }
    const goToOwner = () =>{
        navigate('/dashboard');
    }

    return (
        <>
            <div className='main'>
                <div className='userType'>
                    <div className='header'></div>
                    <img id='smart' src={smart} alt="" />

                    <div className='btnCon'>
                        <button className='btn' onClick={goToUser}>Make My Invoive Smarter</button>
                    </div>

                    <img id='owner' src={owner} alt="" />

                    <div className='btnCon' style={{paddingBottom:'50px'}}>
                        <button className='btn' onClick={goToOwner}>I am a Store Owner</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserType