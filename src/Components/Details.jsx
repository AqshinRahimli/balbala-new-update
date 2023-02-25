import React from 'react'
import { FiHeart } from "react-icons/fi";
import { CiSaveUp2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import ResizableDetails from './ResizableDetails';


const Details = () => {

    return (
        <div>
            <div className="container">
                <div className="details">
                    <div className="cart-image">
                        <ResizableDetails />
                    </div> 
                    <div className="information">
                        <div className="icons">
                            <ul>
                                <li>
                                    <FiHeart className="icon-heard" />
                                </li>
                                <li>
                                    <CiSaveUp2 className='icon-save' />
                                </li>
                            </ul> 
                        </div>
                        <div className="description">
                            <p>Ana bel çantası
                            </p>
                            <h2>
                                Bel Çantası Ana Üçün
                            </h2>
                        </div>
                        <div className="line-cart"></div>
                        <div className="price-star-group">
                            <div className="price">
                                <span>
                                    50 AZN
                                </span>
                            </div>
                            <div className="star-group">
                                {<AiFillStar style={{ marginRight: "10px" }} />}
                                {<AiFillStar style={{ marginRight: "10px" }} />}
                                {<AiFillStar style={{ marginRight: "10px" }} />}
                                {<AiFillStar style={{ marginRight: "10px" }} />}
                                {<AiFillStar style={{ marginRight: "10px" }} />}
                            </div>

                        </div>
                        <div className="line-cart"></div>
                        <div className="measure">
                            <span className='body' >
                                Bədən
                                <span>
                                    Yeni Doğulan Körpə
                                </span>
                            </span>
                        </div>

                        <div className="color">
                            <span className='color'>Rəng</span>
                         <span>Qarışıq</span>
                        </div>
                        <div className="basket-add">
                            <button>Səbətə əlavə edin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details