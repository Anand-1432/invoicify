import React from 'react'
import './home.scss'
import SearchIcon from '@material-ui/icons/Search';
import Productcard from '../../components/productcard/Productcard';
import Marketcard from '../../components/marketcard/Marketcard';

import vector from '../../assets/Vector.png'
import profile from '../../assets/profile.jpg'
import owen from '../../assets/owen.png'
import Navbar from '../../components/navbar/Navbar';

const Home = () => {

  const Product = [
    { id: 1, title: "Microwave", brand: "Phillips", img: owen, shop: "A-one Electronics", purchase: "07/06/2005", warranty: "02/12/22" },
    { id: 2, title: "Microwave", brand: "Phillips", img: owen, shop: "A-one Electronics", purchase: "02/12/21", warranty: "02/12/23" },
    { id: 3, title: "Microwave", brand: "Phillips", img: owen, shop: "A-one Electronics", purchase: "02/12/21", warranty: "02/12/22" },
    { id: 4, title: "Microwave", brand: "Phillips", img: owen, shop: "A-one Electronics", purchase: "02/12/21", warranty: "02/12/22" },
    { id: 5, title: "Microwave", brand: "Phillips", img: owen, shop: "A-one Electronics", purchase: "02/12/21", warranty: "02/12/22" },
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
        <div className='home'>

          <Navbar />

          <div className='navBar'>
            <img id='btnOn' src={vector} alt="..." onClick={openNavbar} />
            <img id='btnOff' src={vector} alt="..." />
            <img id='pro' src={profile} alt="..." />
          </div>

          <p className='title'>Welcome Evan</p>

          <form>
            <span className='icon'><SearchIcon htmlColor='#0F55A7' /></span>
            <input className="form-control" type="text" placeholder="Search Product" />
          </form>

          <div className='productHead'>Your Purchase</div>

          <div className='productContainer'>

            {
              Product.map((val, index) => {
                return (
                  <Productcard
                    key={index}
                    id={val.id}
                    title={val.title}
                    brand={val.brand}
                    img={val.img}
                    shop={val.shop}
                    purchase={val.purchase}
                    warranty={val.warranty}
                  />
                );
              })
            }

          </div>

          {/* <div className='market'>Marketplace</div>
          <div className='marketcardContainer'>
            <Marketcard />
            <Marketcard />
            <Marketcard />
          </div> */}

        </div>
      </div>
    </>
  )
}

export default Home