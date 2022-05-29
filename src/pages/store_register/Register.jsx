import React, { useState } from 'react'
import './register.scss'
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [next, setNext] = useState(false);

    const nextData = (e) => {
        e.preventDefault();
        setNext(true);
    }

    const register = (e) =>{
        e.preventDefault();
        navigate('/dashboard');
    }

    return (
        <>
            <div className='main'>
                <div className='register'>
                    <div className='heading'>Invoicify <span>Bussiness</span></div>

                    <form>

                        {!next ? <div>
                            <p>Shop Name <span>*</span></p>
                            <input className="form-control" type="text" placeholder="Enter Your Shop Name" />

                            <p>Owner Name <span>*</span></p>
                            <input className="form-control" type="text" placeholder="Enter Your Name" />

                            <p>GST <span>*</span></p>
                            <input className="form-control" type="text" placeholder="Enter Your GST Tin" />

                            <p>Address <span>*</span></p>
                            <input className="form-control" type="text" placeholder="Enter Your Address" />

                            <select name="" id="s1">
                                <option value="">Select State</option>
                            </select>

                            <select name="" id="s2">
                                <option value="">Select State</option>
                            </select>

                            <button className='btn' onClick={nextData}>Next</button>
                        </div>
                            :
                            <div>

                                <p>Gmail <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your Gmail" />

                                <p>Number <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your Number" />

                                <p>OTP <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter OTP" />

                                <p>Upload Logo</p>
                                <div className='uploadSection'>
                                    <div className='upBtn'>
                                        <AddIcon fontSize='large' />
                                    </div>
                                    <input type="file" name="file" id="file" />
                                    <p>Select From Gallery</p>
                                </div>

                                <button className='btn' onClick={register}>Sign-Up</button>

                            </div>
                        }

                    </form>

                </div>
            </div>
        </>
    )
}

export default Register