import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';

const AddAddress = () => {

    const navigate = useNavigate();

    const verifyData = () =>{
       navigate("/verify_details", {state:{status:true}});
    }

    return (
        <>
            <div className='main'>
                <div className='addAddress'>

                    <div className='header'>
                        <Link to="/profile/address" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Add Address
                    </div>

                    <form>

                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your Name"/>
                        </div>
                        <div class="form-group">
                            <label>Address line 1</label>
                            <input type="text" class="form-control" placeholder="Enter Address line 1"/>
                        </div>
                        <div class="form-group">
                            <label>Street address</label>
                            <input type="text" class="form-control" placeholder="Enter Street address"/>
                        </div>
                        <div class="form-group">
                            <label>Pincode</label>
                            <input type="text" class="form-control" placeholder="Enter Pincode"/>
                        </div>
                        <div class="form-group">
                            <label>City</label>
                            <input type="text" class="form-control" placeholder="Enter City"/>
                        </div>
                        <div class="form-group">
                            <label>State</label>
                            <input type="text" class="form-control" placeholder="Enter State"/>
                        </div>
                        <div class="form-group">
                            <label>Contact Number</label>
                            <input type="text" class="form-control" placeholder="Enter Contact Number"/>
                        </div>

                        <Button variant='contained' id="bat" onClick={verifyData}>save</Button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default AddAddress