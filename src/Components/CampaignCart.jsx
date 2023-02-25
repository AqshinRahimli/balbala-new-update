import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Discount from "../Image/indirim-logosu-5-m.webp";
import DiscountFevruary from "../Image/subat-logo-m.webp";


const campaignCards = [{
  id:1,
  img: "indirim-logosu-5-m.webp",
  title: "Bütün Geyimlərə 30% Endirim!",
  btnText: "  Məhsulları Göstər"
},
{
  id:2,
  img: "subat-logo-m.webp",
  title: "Bütün Geyimlərə 30% Endirim!",
  btnText: "  Məhsulları Göstər"
},
{
  id:3,
  img: "indirim-logosu-5-m.webp",
  title: "Bütün Geyimlərə 30% Endirim!",
  btnText: "Məhsulları Göstər"
},
{
  id:4,
  img: "indirim-logosu-5-m.webp",
  title: "Bütün Geyimlərə 30% Endirim!",
  btnText: "  Məhsulları Göstər"
},
{
  id:5,
  img: "subat-logo-m.webp",
  title: "Bütün Geyimlərə 30% Endirim!",
  btnText: "  Məhsulları Göstər"
},
{
  id:6,
  img: "indirim-logosu-5-m.webp",
  title: "Bütün Geyimlərə 30% Endirim!",
  btnText: "Məhsulları Göstər"
},
]
const CampaignCart = () => {
  return (
    <div>
      <div className="container">
        <div className="campaign-carts">
          {campaignCards.map(item=> (
            <div className="discount-cart" key={item.id}>
              <div className="image">
                <img src={require(`../Image/${item.img}`)} />
              </div>
              <div className="description">
                <h4>{item.title}</h4>
              </div>
              <div className="button">
                <button onClick={(e)=>console.log(e)}>
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default CampaignCart