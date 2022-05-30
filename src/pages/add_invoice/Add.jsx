import React from 'react'
import { Link } from 'react-router-dom';
import './add.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';

const Add = () => {
    return (
        <>
            <div className='main'>
                <div className='add'>
                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
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
                        <option value="">Select Specification</option>
                    </select>

                    <select name="" id="">
                        <option value="">Date of Purchase</option>
                    </select>

                    <select name="" id="">
                        <option value="">Warranty Period</option>
                    </select>


                    <div className='uploadSection'>
                        <div className='upBtn'>
                            <AddIcon fontSize='large' />
                        </div>

                        <input type="file" name="file" id="file" />

                        <p>Upload Invoice From Gallery</p>
                    </div>

                    <div className='btnSection'><button className='btn save'>Save</button></div>

                </div>
            </div>
        </>
    )
}

export default Add