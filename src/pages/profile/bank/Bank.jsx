import React from 'react'
import './bank.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';

const Bank = () => {


    const Array = [
        {
            name: "Devraaj Kumar",
            account: "2323 1245 1243 234",
            ifsc: "UNI013A2324",
            bank: "Union Bank of India"
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
                <div className='bank'>

                    <div className='header'>
                        <Link to="/profile" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Bank
                    </div>

                    {Array.map((val, index) => {
                        return (
                            <div key={index} className='addressBox'>
                                <div className='d1'>{val.name} <button className='btn' onClick={showFilter}><MoreVertIcon /></button> </div>
                                <p> <span> Account No. </span> : {val.account} </p>
                                <section> <span> IFSC Code </span> : {val.ifsc} </section>
                                <div className='d2'> <span> Bank Name </span> : {val.bank}</div>
                            </div>
                        );
                    })}

                    <Link to="/profile/bank/addbank"> <Button variant='contained' id='but1'>Add New</Button> </Link>


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

export default Bank