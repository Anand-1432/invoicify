import React from 'react'
import './editprofile.scss'
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';


const EditProfile = () => {

    const [edit, setEdit] = useState(false);
    const [save, setSave] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    var status = location.state?.status;

    console.log(status);

    const verifyData = () => {
        navigate("/verify");
    }

    const saveData = () => {
        setSave(true);
        setEdit(true);
    }

    return (
        <>
            <div className='main'>
                <div className='editPro'>

                    <div className='header'>
                        <Link to="/profile" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Profile {(!status || edit) ? <span onClick={verifyData}><EditIcon /></span> : null}
                    </div>

                    <div className='editbox1'>

                        <div className='data'>
                            <label>Shop Name</label>
                            {(!status || edit) ? <div>A One Electronics</div> :
                                <input type="text" value="A One Electronics" />}
                        </div>

                        <div className='data'>
                            <label>Owner Name</label>
                            {(!status || edit) ? <div>DevRaaj Kumar</div> :
                                <input type="text" value="DevRaaj Kumar" />}

                        </div>

                        <div className='data'>
                            <label>Number</label>
                            {(!status || edit) ? <div>+91 123 456 7890</div> :
                                <input type="text" value="+91 123 456 7890" />}

                        </div>

                        <div className='data'>
                            <label>Gmail</label>
                            {(!status || edit) ? <div>a1electronic@gmail.com</div> :
                                <input type="text" value="a1electronic@gmail.com" />}

                        </div>

                        {(status && !save) ? <div className='save'> <Button variant='contained' className='btn1' onClick={saveData}>Save Changes</Button> </div> : null}

                    </div>


                </div>
            </div>
        </>
    )
}

export default EditProfile