import React from 'react'
import './userDetails.scss'
import { useNavigate } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import demo from '../../assets/demo.jpg';

const UserDetails = () => {
  
  const navigate = useNavigate();

 const saveData = (e) =>{
     e.preventDefault();
     navigate('/');
 }

  return (
    <>
      <div className='main'>
        <div className='userDetails'>
          <div className='header'></div>

          <div className='profileCon'>
            <img src={demo} alt="" />
          </div>


          <form>

            <div className='fileSection'>Add Profile Photo
              <input type="file" />
            </div>
            <span className='icon'><PersonIcon /></span>
            <input className="form-control" type="text" placeholder="Enter Your Name" />

            <span className='icon'><MailOutlineIcon /></span>
            <input className="form-control" type="text" placeholder="Enter Your Email" />

            <button className='btn' onClick={saveData}>Save</button>

          </form>

        </div>
      </div>
    </>
  )
}

export default UserDetails