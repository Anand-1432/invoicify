import React from 'react'
import './profile.scss'
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EditIcon from '@material-ui/icons/Edit';
import img from '../../assets/salepro1.png'

const Profile = () => {
    return (
        <>
            <div className='main'>
                <div className='profilePage'>

                    <div className='header'>
                        <Link to="/dashboard" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Profile
                    </div>

                    <div className='imgSection'>
                        <img src={img} alt="" />
                        <div className='edit'><EditIcon /></div>
                        <input type="file" name="" id="" />
                    </div>

                    <h4>A-One Electronics</h4>

                    <Link to="/profile/editprofile" style={{ textDecoration: "none" }}>
                        <div className='proSection'>
                            <div className='d1'><AccountCircleIcon /></div>
                            <div className='d2'>
                                <h5>Profile</h5>
                                <p>Add or modify your name, mobile number and email</p>
                                <span><ArrowForwardIosIcon /></span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/profile/address" style={{ textDecoration: "none" }}>
                        <div className='proSection'>
                            <div className='d1'><HomeIcon /></div>
                            <div className='d2'>
                                <h5>Saved Address</h5>
                                <p>Add or modify addresses where you want your product to be delivered</p>
                                <span><ArrowForwardIosIcon /></span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/profile/bank" style={{ textDecoration: "none" }}>
                        <div className='proSection'>
                            <div className='d1'><AccountBalanceIcon /></div>
                            <div className='d2'>
                                <h5>Bank Details</h5>
                                <p>Add or modify bank details and other payment options</p>
                                <span><ArrowForwardIosIcon /></span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Profile