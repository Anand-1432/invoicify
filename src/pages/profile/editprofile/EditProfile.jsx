import React from 'react'
import './editprofile.scss'
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { Button } from '@material-ui/core';


const EditProfile = () => {

    const [shop, setShop] = useState(false);
    const [owner, setOwner] = useState(false);
    const [number, setNumber] = useState(false);
    const [gmail, setGmail] = useState(false);
    const [save, setSave] = useState(false);

    return (
        <>
            <div className='main'>
                <div className='editPro'>

                    <div className='header'>
                        <Link to="/profile" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Profile
                    </div>

                    <div className='editbox1'>

                        <div className='data'>
                            <label>Shop Name</label>
                            {!shop ? <div>A One Electronics</div> :
                                <input type="text" value="A One Electronics" />}
                            <span onClick={() => { setShop(true); setSave(true); }}><EditIcon /></span>
                        </div>

                        <div className='data'>
                            <label>Owner Name</label>
                            {!owner ? <div>DevRaaj Kumar</div> :
                                <input type="text" value="DevRaaj Kumar" />}
                            <span onClick={() => { setOwner(true); setSave(true); }}><EditIcon /></span>
                        </div>

                        <div className='data'>
                            <label>Number</label>
                            {!number ? <div>+91 123 456 7890</div> :
                                <input type="text" value="+91 123 456 7890" />}
                            <span onClick={() => { setNumber(true); setSave(true); }}><EditIcon /></span>
                        </div>

                        <div className='data'>
                            <label>Gmail</label>
                            {!gmail ? <div>a1electronic@gmail.com</div> :
                                <input type="text" value="a1electronic@gmail.com" />}
                            <span onClick={() => { setGmail(true); setSave(true); }}><EditIcon /></span>
                        </div>

                    </div>

                    {save ? <div className='save'> <Button variant='contained' className='btn1' onClick={() => {
                        setSave(false);
                        setGmail(false);
                        setNumber(false);
                        setOwner(false);
                        setShop(false);
                    }}>save</Button> </div> : null}

                </div>
            </div>
        </>
    )
}

export default EditProfile