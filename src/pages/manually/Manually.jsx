import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../add_invoice/add.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';

const Manually = () => {

    const navigate = useNavigate();

    const sendData = () =>{
        navigate('/invoice');
    }

    return (
        <>
            <div className='main'>
                <div className='add'>
                    <div className='header'>
                        <Link to="/scan" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Add Invoice Details
                    </div>

                    <select name="" id="">
                        <option value="">Select Brand</option>
                    </select>

                    <select name="" id="">
                        <option value="">Select Product Category</option>
                    </select>

                    <select name="" id="">
                        <option value="">Select Product Model</option>
                    </select>

                    <select name="" id="">
                        <option value="">Enter IMEI Number</option>
                    </select>

                    <input type="text" name="" id="" placeholder='Enter Amount' />
                    <input type="text" name="" id="" placeholder='Enter GST Amount' />


                    <div className='uploadSection'>
                        <div className='upBtn'>
                            <AddIcon fontSize='large' />
                        </div>

                        <input type="file" name="file" id="file" />

                        <p>Upload Invoice From Gallery</p>
                    </div>

                    <div className='btnSection'><button className='btn save' onClick={sendData}>Save</button></div>

                </div>
            </div>
        </>
    )
}

export default Manually