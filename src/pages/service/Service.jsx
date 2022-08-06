import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './service.scss'

const Service = () => {



    const [data, setData] = useState();
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();

    const [show , setShow] = useState(false);
    const [show1 , setShow1] = useState(false);
    const [show2 , setShow2] = useState(false);

    const search = () =>{
        document.getElementById("btn1").style.display="none";
        document.getElementById("result").style.display="block";
    }

    return (
        <>
            <div className='main'>
                <div className='service'>
                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Service Center
                    </div>


                 <label>Brand</label>
                <input type="text" name="" value={data} id="" readOnly placeholder='Select Brand' onClick={()=>setShow(!show)}/>
                <span className='down'><ArrowDropDownIcon/></span> 

                 {show? <div id='data'>
                     <p onClick={()=>{setData("Bajaj"); setShow(false)}}>Bajaj</p>
                     <p onClick={()=>{setData("Philips"); setShow(false)}}>Philips</p>
                     <p onClick={()=>{setData("Syska"); setShow(false)}}>Syska</p>
                     <p onClick={()=>{setData("Ajanta"); setShow(false)}}>Ajanta</p>
                     <p onClick={()=>{setData("Nokia"); setShow(false)}}>Nokia</p>
                 </div> :null}


                 <label>State</label>
                <input type="text" name="" value={data2} id="" readOnly placeholder='Select State' onClick={()=>setShow2(!show2)}/>
                <span className='down'><ArrowDropDownIcon/></span> 

                 {show2? <div id='data'>
                     <p onClick={()=>{setData2("Madhya Pradesh"); setShow2(false)}}>Madhya Pardesh</p>
                     <p onClick={()=>{setData2("Utter Pradesh"); setShow2(false)}}>Utter Pardesh</p>
                     <p onClick={()=>{setData2("Gujarat"); setShow2(false)}}>Gujarat</p>
                     <p onClick={()=>{setData2("Hariyana"); setShow2(false)}}>Hariyana</p>
                     <p onClick={()=>{setData2("Maharashtra"); setShow2(false)}}>Maharashtra</p>
                 </div> :null}


                 <label>City</label>
                <input type="text" name="" value={data1} id="" readOnly placeholder='Select City' onClick={()=>setShow1(!show1)}/>
                <span className='down'><ArrowDropDownIcon/></span> 
                 

                 {show1? <div id='data'>
                     <p onClick={()=>{setData1("Indore"); setShow1(false)}}>Indore</p>
                     <p onClick={()=>{setData1("Dewas"); setShow1(false)}}>Dewas</p>
                     <p onClick={()=>{setData1("Ujjain"); setShow1(false)}}>Ujjain</p>
                     <p onClick={()=>{setData1("Bhopal"); setShow1(false)}}>Bhopal</p>
                     <p onClick={()=>{setData1("Shajapur"); setShow1(false)}}>Shajapur</p>
                 </div> :null}

                 <label>Pin Code</label>
                 <input type="text" name="" id="" placeholder='Enter Pincode' />

                 <button id='btn1' className='btn' onClick={search}>Search</button>

                 <div id='result'>
                     <p className='name'>Astron Computer Services</p>
                     <section>Varansi, Lacknow 19, Gandhi nagar Sigra, Varansi</section>
                     <span>1.7 Km</span>
                     <div className='arrow'><ArrowForwardIosIcon/></div>
                     <p className='phone'>8103570600</p>
                 </div>
                  
                </div>
            </div>
        </>
    )
}

export default Service