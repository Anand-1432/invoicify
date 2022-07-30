import React from 'react'
import './innerCate.scss'

import vector from '../../../assets/vector1.png'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import SearchIcon from '@material-ui/icons/Search';
import sort from '../../../assets/sort.png'
import brand1 from '../../../assets/brand1.png'
import CateData from '../../../components/cateData/CateData';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../../../components/navbar2/Navbar2';


const InnerCate = () => {

    const location = useLocation();

    const productsArray = location.state.data;


    const openNavbar3 = () => {

        const l = document.getElementById('con');
        l.style.display = 'block';

        const bar = document.getElementById('slide');
        bar.style.left = '0px';

    }

    return (
        <>
            <div className='main'>
                <div className='innerCate'>

                <Navbar2/>

                    <div className='header'>
                        <div className='d1'>      
                        <img id='on' src={vector} alt="" onClick={openNavbar3} />
                            <img id='off' src={vector} alt="" />
                        </div>
                        <div className='d2'>
                            <input type="text" name="" id="" placeholder='Search' />
                            <span><SearchIcon /></span>
                        </div>
                        <div className='d3'>
                            <LocalGroceryStoreIcon fontSize='large' />
                        </div>
                    </div>

                    <div className='opt'>
                        <div id='d4'><section><img src={sort} alt="" /> Sort </section></div>
                        <div id='d5'> <section><img src={brand1} alt="" /> Brand </section></div>
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

                </div>
            </div>
        </>
    )
}

export default InnerCate