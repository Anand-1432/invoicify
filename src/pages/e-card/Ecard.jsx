import React from 'react'
import './ecard.scss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import card from '../../assets/card.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { Button } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

import MiniCard1 from '../../components/e-cardDesign/design1/mini-e-card1/MiniCard1';
import MiniCard2 from '../../components/e-cardDesign/design2/mini-e-card2/MiniCard2';
import MiniCard3 from '../../components/e-cardDesign/design3/mini-e-card3/MiniCard3';

import Design1 from '../../components/e-cardDesign/design1/Design1';
import Design2 from '../../components/e-cardDesign/design2/Design2';
import Design3 from '../../components/e-cardDesign/design3/Design3';
import { useState } from 'react';


const Ecard = () => {

    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);

    const showCard = () => {
        document.getElementById("cover3").style.display = "block";
        document.getElementById("card1").style.bottom = "0px";
    }

    const hideCard = () => {
        document.getElementById("cover3").style.display = "none";
        document.getElementById("card1").style.bottom = "-350px";
    }

    const fun1 = () => {
        setState1(true);
        setState2(false);
        setState3(false);
        hideCard();
    }
    const fun2 = () => {
        setState1(false);
        setState2(true);
        setState3(false);
        hideCard();
    }
    const fun3 = () => {
        setState1(false);
        setState2(false);
        setState3(true);
        hideCard();
    }


    return (
        <>
            <div className='main'>
                <div className='ecard'>

                    <div className='header'>
                        <Link to="/dashBoard" className='btn back'><ArrowBackIcon /></Link>
                        Ecard
                    </div>

                    {/* ////////////////////////////////////////////////////////// */}

                    {state1 ? <Design1 /> : null}
                    {state2 ? <Design2 /> : null}
                    {state3 ? <Design3 /> : null}

                    {/* ////////////////////////////////////////////////////////// */}


                    <div className='change' onClick={showCard}>
                        <img src={card} alt="" /> <span>Change Template</span> <div><ArrowForwardIosIcon /></div>
                    </div>

                    <div className='dataBox'>

                        <label>Your Name</label>
                        <input type="text" name="" id="" value="Devraaj Kumar" />

                        <label>Business Name</label>
                        <input type="text" name="" id="" value="A One Electronics" />

                        <label>Mobile Number</label>
                        <input type="text" name="" id="" value="123456789" />

                        <label>Secondary Number</label>
                        <input type="text" name="" id="" value="123456789" />

                        <label>Your E-mail</label>
                        <input type="text" name="" id="" value="testuser@gmail.com" />

                        <label>Your Website</label>
                        <input type="text" name="" id="" value="www.google.com" />

                        <label>Your Address</label>
                        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus rerum nulla</section>

                        <div className='logo'> <span><PhotoLibraryIcon /></span> Upload Your Logo</div>

                    </div>

                    <Button variant='contained' id="share"><ShareIcon /></Button>

                    <div id='cover3' onClick={hideCard}></div>

                    <div id='card1'>

                        <MiniCard1 fun={fun1} state={state1} />
                        <MiniCard2 fun={fun2} state={state2} />
                        <MiniCard3 fun={fun3} state={state3}/>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Ecard