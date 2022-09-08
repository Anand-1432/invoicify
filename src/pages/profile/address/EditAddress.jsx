import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';


const EditAddress = () => {
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
                        Edit Address
                    </div>

                    <form>

                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your Name"  value="Devraaj Kumar"/>
                        </div>
                        <div class="form-group">
                            <label>Address line 1</label>
                            <input type="text" class="form-control" placeholder="Enter Address line 1" value="A one Electronics"/>
                        </div>
                        <div class="form-group">
                            <label>Street address</label>
                            <input type="text" class="form-control" placeholder="Enter Street address" value="gol bazar, main street"/>
                        </div>
                        <div class="form-group">
                            <label>Pincode</label>
                            <input type="text" class="form-control" placeholder="Enter Pincode" value="410222"/>
                        </div>
                        <div class="form-group">
                            <label>City</label>
                            <input type="text" class="form-control" placeholder="Enter City" value="Jabalpur"/>
                        </div>
                        <div class="form-group">
                            <label>State</label>
                            <input type="text" class="form-control" placeholder="Enter State" value="Madhya Pradesh"/>
                        </div>
                        <div class="form-group">
                            <label>Contact Number</label>
                            <input type="text" class="form-control" placeholder="Enter Contact Number" value="123 456 7890"/>
                        </div>

                        <Button variant='contained' id="bat" onClick={verifyData}>Save Changes</Button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default EditAddress