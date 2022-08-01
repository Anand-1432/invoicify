import React from 'react'
import "./group.scss"

import mix2 from '../../assets/mix2.png'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useState } from 'react';

const Ungroup = (props) => {

    const [val, setVal] = useState(props.quantity);

  return (
    <>
        <div className='ungroupedPage'>

            <div className='upper'>
                <div className='imgBox'>
                    <img src={mix2} alt="" />
                </div>
                <div className='textBox'>
                    <section> {props.productName} </section>
                    <div> {props.content} </div>
                    <p> {props.color},     <span> {props.size}, </span>      {props.power}</p>
                </div>
            </div>

            <div className='middle'>
                <div className='left'>
                    <div id='offer'> {props.offerName} - {props.offerPercent}% 0ff</div>
                    <div id='button'>
                        <div className='btt'  onClick={()=>{ if(val>1){setVal(val-1)}}} ><RemoveIcon fontSize='small'/></div>
                        <div id='digit'> {val} </div>
                        <div className='btt'  onClick={()=>setVal(val+1)} ><AddIcon fontSize='small'/></div>
                    </div>
                </div>
                <div className='right'>
                    <div>7,198.00/-</div>
                    <section>6,598.00/-</section>
                </div>
            </div>

            <div className='lower'>
                <div className='d1' onClick={props.fun}> <span><AssignmentTurnedInIcon/></span> Select Distributer</div>
                <div className='d2'> <span><DeleteForeverIcon/></span> Remove</div>
            </div>

        </div>
    </>
  )
}

export default Ungroup