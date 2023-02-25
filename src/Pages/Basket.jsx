import React from 'react'
import { Link } from 'react-router-dom';
import { SlBasketLoaded } from "react-icons/sl";

const Basket = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div>
          <h1>
            Səbətim
          </h1>
          </div>
          <div className="basket-information">
            <div className="basket">
              <SlBasketLoaded className='basket-icon' />
            </div>
            <p>Səbətinizdə məhsul tapılmadı.</p>
            <div className="btn">
              <Link to={"/"}>
            <button>             
              Alış-verişə Davam Et
              </button>
              </Link>
            </div>
          </div>
          </div >
      </main>
    </div>



  )
}

export default Basket