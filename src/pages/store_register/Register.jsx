import React, { useState } from 'react'
import './register.scss'
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();



    const [next, setNext] = useState(false);

    const nextData = () => {
        setNext(true);
    }

    const registration = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <div className='main'>
                <div className='register'>
                    <div className='heading'>Invoicify <span>Bussiness</span></div>


                    {!next ?
                        <form onSubmit={handleSubmit(nextData)}>
                            <div>
                                <p>Shop Name <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your Shop Name" {...register("shop", { required: "shop name is required!" })} />
                                <div className='alert'>{errors.shop?.message}</div>

                                <p>Owner Name <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your Name" {...register("owner", { required: "name is required!" })} />
                                <div className='alert'>{errors.owner?.message}</div>


                                <p>GST <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your GST Tin" {...register("gst", { required: "GST Tin is required!" })} />
                                <div className='alert'>{errors.gst?.message}</div>

                                <p>Address <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your Address" {...register("address", { required: "address is required!" })} />
                                <div className='alert'>{errors.address?.message}</div>

                                <select name="" id="s1">
                                    <option value="">Select State</option>
                                </select>

                                <select name="" id="s2">
                                    <option value="">Select State</option>
                                </select>

                                <button className='btn' type='submit'>Next</button>
                            </div>
                        </form>
                        :

                        <form  onSubmit={handleSubmit(registration)}>
                            <div>

                                <p>Gmail <span>*</span></p>
                                <input className="form-control" type="email" placeholder="Enter Your Gmail" {...register("email", { required: "email is required!", pattern:{value:/^\S+@\S+$/i, message:"Invalid email address!"} })}/>
                                <div className='alert'>{errors.email?.message}</div>
                                
                                <p>Number <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter Your Number" {...register("number", { required: "number is required!" })}/>
                                <div className='alert'>{errors.number?.message}</div>

                                <p>OTP <span>*</span></p>
                                <input className="form-control" type="text" placeholder="Enter OTP" {...register("otp", { required: "OTP is required!" })}/>
                                <div className='alert'>{errors.otp?.message}</div>

                                <p>Upload Logo</p>
                                <div className='uploadSection'>
                                    <div className='upBtn'>
                                        <AddIcon fontSize='large' />
                                    </div>
                                    <input type="file" name="file" id="file" />
                                    <p>Select From Gallery</p>
                                </div>

                                <button className='btn' type='submit'>Sign-Up</button>

                            </div>
                        </form>
                    }

                </div>
            </div>
        </>
    )
}

export default Register