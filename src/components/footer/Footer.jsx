import React from 'react'
import './footer.scss'
import { NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import img from '../../assets/conImg.jpg';


// import homeicon from '../../assets/homeicon.png';
import homeiconB from '../../assets/homeiconB.png';
// import money from '../../assets/money.png';
import moneyB from '../../assets/moneyB.png';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='inner'>
                    <img className='conimg' src={img} alt="" />
                    <Link to='/add_customer'><Button variant="contained" className='addIcon'>
                        <AddIcon fontSize='large' />
                    </Button></Link>

                    <NavLink to='/dashBoard' className='homy'><img src={homeiconB} alt="" /></NavLink>
                    <NavLink to='/sales' className='money'><img src={moneyB} alt="" /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Footer