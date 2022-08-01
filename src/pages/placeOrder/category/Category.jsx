import React from 'react'
import './category.scss'

import vector from '../../../assets/vector1.png'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import SearchIcon from '@material-ui/icons/Search';
import CategoryBox from '../../../components/categoryBox/CategoryBox';

import { useLocation, Link } from 'react-router-dom';
import Navbar2 from '../../../components/navbar2/Navbar2';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CategoryIcon from '@material-ui/icons/Category';
import { Button } from '@material-ui/core';



const Category = () => {

    const location = useLocation();

    const categoryArray = location.state.data;

    const openNavbar2 = () => {

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
        document.getElementById("brand1").style.bottom = "0px";
    }

    const hideFilter = () =>{
        document.getElementById("cover3").style.display = "none";
        document.getElementById("filter").style.bottom = "-250px";
        document.getElementById("brand1").style.bottom = "-400px";
    }



    return (
        <>
            <div className='main'>
                <div className='category'>

                    <Navbar2 />

                    <div className='header'>
                        <div className='d1'>
                            <img id='on' src={vector} alt="" onClick={openNavbar2} />
                            <img id='off' src={vector} alt="" onClick={openNavbar2}/>
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
                        <div id='d4' onClick={showFilter}><section><span><EqualizerIcon /></span> Sort </section></div>
                        <div id='d5' onClick={showCate}> <section><CategoryIcon /> Brand </section></div>
                    </div>

                    <div className='boxContainer'>

                        {categoryArray.map((val, index) => {
                            return (
                                <CategoryBox
                                    key={index}
                                    products={val.products}
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

                    <div id='brand1'>
                        <div>Select Brand</div>
                        <Button variant='outlined' className='bt'>Brand 1</Button>
                        <Button variant='outlined' className='bt'>Brand 2</Button>
                        <Button variant='outlined' className='bt'>Brand 3</Button>
                        <Button variant='outlined' className='bt'>Brand 4</Button>
                        <Button variant='outlined' className='bt'>Brand 5</Button>
                        <Button variant='outlined' className='bt'>Brand 6</Button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Category