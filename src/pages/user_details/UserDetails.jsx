import React from 'react'
import './userDetails.scss'
import { useNavigate } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import demo from '../../assets/demo.jpg';
import check from '../../assets/check1.gif'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserDetails = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = () => {
    setShow(true);
    setTimeout(() => navigate('/'), 2000);

  }


  return (
    <>
      <div className='main'>
        <div className='userDetails'>
          <div className='header'></div>

          <div className='profileCon'>
            <img src={demo} alt="" />
          </div>


          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='fileSection'>Add Profile Photo
              <input type="file" />
            </div>

            <div>
              <span className='icon'><PersonIcon /></span>
              <input className="form-control" type="text" placeholder="Enter Your Name" {...register("name", { required: "name is required!" })} />
              <p>{errors.name?.message}</p>
            </div>

            <div>
              <span className='icon'><MailOutlineIcon /></span>
              <input className="form-control" type="email" placeholder="Enter Your Email" {...register("email", { required: "email is required!" , pattern:{value:/^\S+@\S+$/i, message:"Invalid email address!"}})} />
              <p>{errors.email?.message}</p>
            </div>

            <button className='btn' type='submit'>Save</button>

          </form>

          {show ? <div className='gifCon'>
            <div>
              <img src={check} alt="" />
            </div>
          </div> : null}

        </div>
      </div>
    </>
  )
}

export default UserDetails