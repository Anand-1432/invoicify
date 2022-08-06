import React from 'react'
import './innerCate.scss'

import vector from '../../../assets/vector1.png'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import SearchIcon from '@material-ui/icons/Search';
import CateData from '../../../components/cateData/CateData';
import { useLocation, Link } from 'react-router-dom';
import Navbar2 from '../../../components/navbar2/Navbar2';
import { Button } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CategoryIcon from '@material-ui/icons/Category';


const InnerCate = () => {

    const location = useLocation();

    const productsArray = location.state.data;


    const openNavbar3 = () => {

        const l = document.getElementById('con');
        l.style.display = 'block';

        const bar = document.getElementById('slide');
        bar.style.left = '0px';

    }

    const showFilter = () =>{
        document.getElementById("cover3").style.display = "block";
        document.getElementById("filter").style.bottom = "0px";
    }
    const showCate = () =>{
        document.getElementById("cover3").style.display = "block";
        document.getElementById("category1").style.bottom = "0px";
    }

    const hideFilter = () =>{
        document.getElementById("cover3").style.display = "none";
        document.getElementById("filter").style.bottom = "-250px";
        document.getElementById("category1").style.bottom = "-400px";
    }


    return (
        <>
            <div className='main'>
                <div className='innerCate'>

                    <Navbar2 />

                    <div className='header'>
                        <div className='d1'>
                            <img id='on' src={vector} alt="" onClick={openNavbar3} />
                            <img id='off' src={vector} alt="" onClick={openNavbar3}/>
                        </div>
                        <div className='d2'>
                            <input type="text" name="" id="" placeholder='Search' />
                            <span><SearchIcon /></span>
                        </div>
                        <div className='d3'>
                            <Link to="/cart" style={{ color: "white" }}> <LocalGroceryStoreIcon fontSize='large' /> </Link>
                        </div>
                    </div>

                    <div className='opt'>
                        <div id='d4' onClick={showFilter}><section><span><EqualizerIcon fontSize='small' /></span> Sort </section></div>
                        <div id='d5' onClick={showCate}> <section><span><CategoryIcon fontSize='small' /></span> Category </section></div>
                    </div>

                    <div className='dataBox'>

                        {productsArray.map((val, index) => {

                            return (
                                <CateData
                                    key={index}
                                    productName={val.productName}
                                    images={val.images}
                                    category={val.category}
                                    price={val.price}
                                    oldPrice={val.oldPrice}
                                    content={val.content}
                                    size={val.size}
                                    color={val.color}
                                    power={val.power}
                                    short={val.short}
                                    description={val.description}
                                    offerPercent={val.offerPercent}
                                    offerName={val.offerName}
                                    offerdes={val.offerdes}
                                    offerDetail={val.offerDetail}
                                />
                            );

                        })}

                    </div>


                    <div id='cover3' onClick={hideFilter}></div>

                    <div id='filter'>
                        <div>Select Filter</div>
                        <Button variant='outlined' className='bt'>Alphabetic (a-z)</Button>
                        <Button variant='outlined' className='bt'>Price (Low to High)</Button>
                        <Button variant='outlined' className='bt'>Price (High to Low)</Button>
                    </div>

                    <div id='category1'>
                        <div>Select Filter</div>
                        <Button variant='outlined' className='bt'>Category 1</Button>
                        <Button variant='outlined' className='bt'>Category 2</Button>
                        <Button variant='outlined' className='bt'>Category 3</Button>
                        <Button variant='outlined' className='bt'>Category 4</Button>
                        <Button variant='outlined' className='bt'>Category 5</Button>
                        <Button variant='outlined' className='bt'>Category 6</Button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default InnerCate