import React from 'react'
import './addwarranty.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Addwarranty = () => {
    return (
        <>
            <div className='main'>
                <div className='addWarranty'>

                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon /></Link>
                        Add Warranty
                    </div>

                    <div className='topBoxCon'>
                        <div className='b1'>
                            <Button id='butt' variant='contained'><AddIcon /></Button>
                            <input type="file" name="" id="" />
                            <div>Upload Invoice</div>
                        </div>
                        <div className='b2'>
                            <Button id='butt' variant='contained'><AddIcon /></Button>
                            <div>Upload Product <br /> Image</div>
                            <input type="file" name="" id="" />
                        </div>
                    </div>

                    <form>
                        <div class="form-group">
                            <label>Brand</label>
                            <select class="custom-select">
                                <option selected>Select Brand</option>
                                <option value="1">Bajaj</option>
                            </select>
                            <span><ArrowDropDownIcon fontSize='large' /></span>
                            <section></section>
                        </div>

                        <div class="form-group">
                            <label>Category</label>
                            <select class="custom-select">
                                <option selected>Select Product Category</option>
                                <option value="1">Bajaj</option>
                            </select>
                            <span><ArrowDropDownIcon fontSize='large' /></span>
                            <section></section>

                        </div>

                        <div class="form-group">
                            <label>Product Model</label>
                            <select class="custom-select">
                                <option selected>Select Product Model</option>
                                <option value="1">Bajaj</option>
                            </select>
                            <span><ArrowDropDownIcon fontSize='large' /></span>
                            <section></section>
                        </div>

                        <div class="date">
                            <label>Purchase on</label>
                            <div className='dateBox'>

                                <div class="form-group set1">
                                    <select class="custom-select">
                                        <option selected>Day</option>
                                    </select>
                                    <span><ArrowDropDownIcon fontSize='large' /></span>
                                    <section></section>
                                </div>

                                <div class="form-group">
                                    <select class="custom-select">
                                        <option selected>Month</option>
                                    </select>
                                    <span><ArrowDropDownIcon fontSize='large' /></span>
                                    <section></section>

                                </div>

                                <div class="form-group set2">
                                    <select class="custom-select">
                                        <option selected>Year</option>
                                    </select>
                                    <span><ArrowDropDownIcon fontSize='large' /></span>
                                    <section></section>
                                </div>
                            </div>
                        </div>


                        <div class="form-group">
                            <label>Warraty Period</label>
                            <select class="custom-select">
                                <option selected>Warrany Period</option>
                                <option value="1">1</option>
                                <option value="1">2</option>
                            </select>
                            <span><ArrowDropDownIcon fontSize='large' /></span>
                            <section></section>
                        </div>

                        <Button id='b' variant='contained'>Save</Button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Addwarranty;