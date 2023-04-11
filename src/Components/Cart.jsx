import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/product";



export const Cart = (props) => {
  const { title, price, description, priceCurren, imageSrc,id } = props;

  const dispatch = useDispatch();
  const reduxList = useSelector((state) => state.cartList);

  const handleClick = (e) => {
    dispatch(addToCart({...props}))
    e.stopPropagation();
  }

  const navigate = useNavigate();
  const navigateToDetail = () => {
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
            <button onClick={handleClick}>Səbətə əlavə edin</button>
          </div>
        </div>
      </div>
    </div>
  );
};
