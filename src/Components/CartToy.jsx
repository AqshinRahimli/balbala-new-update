import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";


export const CartToy = ({ description, priceCurren, price, imageSrc }) => {

    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate("/cart-detailtoy/1");
        return;
    }
    return (
        <div className="container">
            <div className="cart-toy" onClick={navigateToDetail}>
                <FiHeart className="icon-heard" />
                <div className="image">
                    <img src={require(`../Image/${imageSrc}`)} alt="" />
                </div>
                <div className="description">
                    <h5>
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
                        <button>Bax</button>
                    </div>
                </div>
            </div>
        </div>
    )
}