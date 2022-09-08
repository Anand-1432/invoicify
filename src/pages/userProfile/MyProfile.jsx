import React from 'react'
import './myprofile.scss'

import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import img from '../../assets/profile.png'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CakeIcon from '@material-ui/icons/Cake';
import { Button } from '@material-ui/core';
import { useState } from 'react';


const MyProfile = () => {

    const [editImage, setImage] = useState(false);
    const [showSave, setSave] = useState(false);
    const [edit, setEdit] = useState(false);

    const saveData = () => {
        setImage(false);
        setSave(false);
        setEdit(false);
    }

    return (
        <>
            <div className='main'>
                <div className='myprofile'>

                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon /></Link>
                        My Profile
                    </div>

                    <div className='imgSection'>
                        <img src={img} alt="" />
                        <section>Evan M</section>

                        {editImage ? <div id='image'> <Button variant='contained' id='btt'>
                            <CameraAltIcon fontSize='small' />
                            <input type="file" name="" id="inp" />
                        </Button></div> : null}

                        <Button variant='contained' id='edit' onClick={() => { setImage(true); setSave(true); setEdit(true) }}>
                            <EditIcon fontSize='small' />
                        </Button>

                    </div>

                    <div className='spBox'>
                        <div className='sp1'>
                            <PersonPinIcon fontSize='small' />
                        </div>
                        <div className='sp2'>
                            <section>Name</section>
                            {!edit ? <div>Evan M</div> :
                                <input type="text" value="Evan M" id="" />}
                        </div>
                    </div>

                    <div className='spBox'>
                        <div className='sp1'>
                            <CakeIcon fontSize='small' />
                        </div>
                        <div className='sp2'>
                            <section>DOB</section>
                            {!edit ? <div>01 Jan 1995</div> :
                                <input type="text" value="01 Jan 1995" id="" />}
                        </div>
                    </div>

                    <div className='spBox'>
                        <div className='sp1'>
                            <PhoneIcon fontSize='small' />
                        </div>
                        <div className='sp2'>
                            <section>Mobile</section>
                            {!edit ? <div>+91 1234582311</div> :
                                <input type="text" value="+91 1234582311" id="" />}

                        </div>
                    </div>

                    <div className='spBox'>
                        <div className='sp1'>
                            <MailOutlineIcon fontSize='small' />
                        </div>
                        <div className='sp2'>
                            <section>Email</section>
                            {!edit ? <div>abc@gmail.com</div> :
                                <input type="email" value="abc@gmail.com" id="" />}

                        </div>
                    </div>

                    {showSave ? <div className='save'>
                        <Button variant='contained' className='bt' onClick={saveData}>Save</Button>
                    </div> : null}

                </div>
            </div>
        </>
    )
}

export default MyProfile