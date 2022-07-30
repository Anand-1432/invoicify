import React from 'react'
import './order.scss'

import vector from '../../../assets/vector1.png'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import SearchIcon from '@material-ui/icons/Search';
import Brand from '../../../components/brand/Brand';

import bajaj from '../../../assets/bajaj.png'
import Navbar2 from '../../../components/navbar2/Navbar2';

const Order = () => {

    const openNavbar1 = () => {

        const l = document.getElementById('con');
        l.style.display = 'block';

        const bar = document.getElementById('slide');
        bar.style.left = '0px';

    }

    const brand = [
        {
            brand: "Bajaj",
            img: bajaj,
            category: [
                {
                    name: "category 1",
                    products: [
                        {
                            productName: "Lorem ipsum dolor sit amet, consectetur",
                            images: [],
                            category: "Mixer Grinder",
                            price: "3,299.00",
                            oldPrice: "3,599.00",
                            content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
                            color: "Black & Yellow",
                            size: "Medium",
                            power: "1500W",
                            short: "Lorem ipsum dol sit consectetur adipiscing elit...",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            offerPercent: "5",
                            offerName: "Festive Offer",
                            offerdes: "Get 5% off on all purchases on this festive season...",
                            offerDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
                        },
                        {
                            productName: "Lorem ipsum dolor sit amet, consectetur",
                            images: [],
                            category: "Mixer Grinder",
                            price: "3,599.00",
                            content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
                            color: "Black & Yellow",
                            size: "Medium",
                            power: "1500W",
                            short: "Lorem ipsum dol sit consectetur adipiscing elit...",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            offerPercent: "5",
                            offerName: "Festive Offer",
                            offerdes: "Get 5% off on all purchases on this festive season...",
                            offerDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
                        },
                        {
                            productName: "Lorem ipsum dolor sit amet, consectetur",
                            images: [],
                            category: "Mixer Grinder",
                            price: "3,599.00",
                            content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
                            color: "Black & Yellow",
                            size: "Medium",
                            power: "1500W",
                            short: "Lorem ipsum dol sit consectetur adipiscing elit...",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            offerPercent: "5",
                            offerName: "Festive Offer",
                            offerdes: "Get 5% off on all purchases on this festive season...",
                            offerDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
                        },
                        {
                            productName: "Lorem ipsum dolor sit amet, consectetur",
                            images: [],
                            category: "Mixer Grinder",
                            price: "3,599.00",
                            content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
                            color: "Black & Yellow",
                            size: "Medium",
                            power: "1500W",
                            short: "Lorem ipsum dol sit consectetur adipiscing elit...",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            offerPercent: "5",
                            offerName: "Festive Offer",
                            offerdes: "Get 5% off on all purchases on this festive season...",
                            offerDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
                        },

                    ],
                }
            ],
        },
    ]


    return (
        <>
            <div className='main'>
                <div className='order'>

                <Navbar2/>

                    <div className='header'>
                        <div className='d1'>
                            <img id='on' src={vector} alt="" onClick={openNavbar1}/>
                            <img id='off' src={vector} alt=""/>
                        </div>
                        <div className='d2'>
                            <input type="text" name="" id="" placeholder='Search' />
                            <span><SearchIcon /></span>
                        </div>
                        <div className='d3'>
                            <LocalGroceryStoreIcon fontSize='large' />
                        </div>
                    </div>

                    <div className='select'>Select Brand</div>

                    <div className='brandCon'>
                        {brand.map((val, index) => {
                            return (
                                <Brand
                                    key={index}
                                    brand={val.brand}
                                    img={val.img}
                                    category={val.category}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Order