import React from 'react'
import './dashBoard.scss'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Footer from '../../components/footer/Footer';
import salepro from '../../assets/salepro.png';
import Navbar2 from '../../components/navbar2/Navbar2';
import Company from '../../components/company/Company';
import BrandProgress from '../../components/TopBrandProgress/BrandProgress';

const DashBoard = () => {


    const data = [
        { day: 'Mon', amt: 2400 },
        { day: 'Tue', amt: 2210 },
        { day: 'Wed', amt: 5290 },
        { day: 'Thu', amt: 5000 },
        { day: 'Fri', amt: 3181 },
        { day: 'Sat', amt: 2500 },
        { day: 'Sun', amt: 4100 },
    ];

    const TopBrand = [
        { name: 'Samsung', percent: 80 },
        { name: 'Apple', percent: 60 },
        { name: 'Vivo', percent: 40 },
        { name: 'Xiaomi', percent: 20 },
        { name: 'Others', percent: 5 },
    ]

    const openNavbar = () => {

        const l = document.getElementById('con');
        l.style.display = 'block';

        const bar = document.getElementById('slide');
        bar.style.left = '0px';

    }

    return (
        <>
            <div className='main'>
                <div className='dash'>

                    <Navbar2 />

                    <div className='Nav'>
                        <img id='on' src={salepro} alt="" onClick={openNavbar} />
                        <img id='off' src={salepro} alt="" />
                        <p>A-One Electronics</p>
                    </div>

                    <div className='chartCon'>

                        <div className='week'>
                            <button className='btn btn1'><ArrowBackIosIcon fontSize='small' /></button>
                            <p>11-17 April</p>
                            <button className='btn btn2'><ArrowForwardIosIcon fontSize='small' /></button>
                        </div>

                        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <BarChart
                            className='barCharts'
                            width={280}
                            height={160}
                            data={data}
                            margin={{ top: 0, right: 0, left: 0, bottom: 2 }}
                            barSize={12}
                        >

                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#E54CFE" stopOpacity={1} />
                                    <stop offset="95%" stopColor="#0F55A7" stopOpacity={1} />
                                </linearGradient>
                            </defs>

                            <XAxis dataKey="day" interval={'preserveStartEnd'} scale="point" padding={{ left: 10, right: 10 }} />

                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="amt" radius={[4, 4, 0, 0]} fill="url(#colorUv)" background={{ fill: '#eee' }}>
                                <LabelList dataKey="amt" position="top" fontSize={9} fontWeight={500} />
                            </Bar>
                        </BarChart>
                        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                    </div>
                    <div className='sellingBrand'>
                        <div className='top'>Top Selling Brands</div>

                        {TopBrand.map((value, index) => {
                            return (
                                <BrandProgress key={index} name={value.name} percent={value.percent} />
                            )
                        })}

                    </div>

                    <div className='companyCon'>
                        <Company />
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default DashBoard