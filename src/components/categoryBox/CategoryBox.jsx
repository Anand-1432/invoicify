import React from 'react'
import './categoryBox.scss'
import { Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useNavigate } from 'react-router-dom';

import mix from '../../assets/mix.png'


const CategoryBox = (props) => {

    const productArray = props.products;

    const navigate = useNavigate();

    const sendData = (data) =>{

        navigate("/order/brand/category", {state:{data}});

    }


    return (
        <>
            <div className='categoryBox'>
                <div className='head'>Category 1
                    <Button variant='contained' className='but' onClick={() => {
                        sendData(productArray);
                    }}>
                        <ArrowForwardIcon fontSize='small' /></Button> </div>


                {productArray.map((val, index) => {

                    if (index <= 2) {
                        return (

                            <div className='cateBox' key={index}>
                                <div className='imgCon'>
                                    <img src={mix} alt="" />
                                </div>
                                <section> {val.price} </section>
                                <p> {val.productName} </p>
                            </div>

                        );
                    }
                })}



            </div>
        </>
    )
}

export default CategoryBox