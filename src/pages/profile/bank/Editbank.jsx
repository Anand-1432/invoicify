import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';


const Editbank = () => {

    const navigate = useNavigate();

    const sendBack = () => {
        navigate("/profile/bank");
    }

    return (
        <>
            <div className='main'>
                <div className='addBank'>

                    <div className='header'>
                        <Link to="/profile/bank" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Edit Bank
                    </div>

                    <form>

                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your Name" value="Devraaj Kumar"/>
                        </div>
                        <div class="form-group">
                            <label>Account Number</label>
                            <input type="text" class="form-control" placeholder="Enter Account Number" value="2323 1245 1243 234" />
                        </div>
                        <div class="form-group">
                            <label>IFSC Code</label>
                            <input type="text" class="form-control" placeholder="Enter IFSC Code" value="UNI013A2324" />
                        </div>

                        <Button variant='contained' id="bat" onClick={sendBack}>Save Changes</Button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Editbank