import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';


const Addbank = () => {

    const navigate = useNavigate();

    const sendBack = () =>{
       navigate("/profile/bank");
    }

    return (
        <>
            <div className='main'>
                <div className='addBank'>

                    <div className='header'>
                        <Link to="/profile/bank" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Add Bank
                    </div>

                    <form>

                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your Name" />
                        </div>
                        <div class="form-group">
                            <label>Account Number</label>
                            <input type="text" class="form-control" placeholder="Enter Account Number" />
                        </div>
                        <div class="form-group">
                            <label>IFSC Code</label>
                            <input type="text" class="form-control" placeholder="Enter IFSC Code" />
                        </div>

                        <Button variant='contained' id="bat" onClick={sendBack}>save</Button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Addbank