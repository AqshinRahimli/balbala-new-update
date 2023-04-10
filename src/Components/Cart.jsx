import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";


 
export const Cart = (props) => {
  
  const { title, price, description, priceCurren,imageSrc } = props;
  const navigate = useNavigate();
  const navigateToDetail = ()=>{
   navigate("cart-detail/1");
   return;
  }  
  
  return (
    <div className="container">
      <div className="cart" onClick={navigateToDetail}>
        <FiHeart className="icon-heard" />
        <div className="image">
          <img src={require(`../Image/${imageSrc}`)} alt="" />
        </div>
        <div className="description"> 
          <h5>
            <span>{title}</span> 
            {description} 
          </h5>
          <div className="star-group">
            {<AiFillStar style={{ marginRight: "10px" }} />}
            {<AiFillStar style={{ marginRight: "10px" }} />}
            {<AiFillStar style={{ marginRight: "10px" }} />}
            {<AiFillStar style={{ marginRight: "10px" }} />}
            {<AiFillStar style={{ marginRight: "10px" }} />}
          </div>
          <div className="price">
            <span>{price}</span>
            <span
              style={{
                color: "#f28e00",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            >       
              {priceCurren}
            </span>
          </div>
          <div className="basket-add">
            <button>Səbətə əlavə edin</button>
          </div>
        </div>
      </div>
    </div>
  );
};
