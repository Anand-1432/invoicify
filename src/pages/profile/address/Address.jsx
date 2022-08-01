import React from 'react'
import './address.scss'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';


const Address = () => {


    const Array = [
        {
            name: "Devraaj Kumar",
            address: "A one electronics , gol bazar , main street , Jabalpur , Madhya Pradesh - 410222",
            mobile: "123 456 7890",
        },
        {
            name: "Devraaj Kumar",
            address: "A one electronics , gol bazar , main street , Jabalpur , Madhya Pradesh - 410222",
            mobile: "123 456 7890",
        },
    ]

    const showFilter = () =>{
        document.getElementById("cover3").style.display = "block";
        document.getElementById("filter").style.bottom = "0px";
    }

    const hideFilter = () =>{
        document.getElementById("cover3").style.display = "none";
        document.getElementById("filter").style.bottom = "-250px";
    }



    return (
        <>
            <div className='main'>
                <div className='address'>

                    <div className='header'>
                        <Link to="/profile" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Address
                    </div>

                    {Array.map((val, index) => {
                        return (
                            <div key={index} className='addressBox'>
                                <div> {val.name} <button className='btn' onClick={showFilter}><MoreVertIcon /></button> </div>
                                <p> {val.address} </p>
                                <section> <span>Mobile </span> : {val.mobile} </section>
                            </div>
                        );
                    })}

                    <Link to="/profile/address/addAddress"> <Button variant='contained' id='but1'>Add New</Button> </Link>


                    <div id='cover3' onClick={hideFilter}></div>

                    <div id='filter'>
                        <div>Select Option</div>
                        <Button variant='outlined' className='bt' onClick={hideFilter}> Make Default </Button>
                        <Button variant='outlined' className='bt' onClick={hideFilter}> Edit </Button>
                        <Button variant='outlined' className='bt1' onClick={hideFilter}> Delete </Button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Address