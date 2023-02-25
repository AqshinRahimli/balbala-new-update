import React from 'react'
import { FiHeart } from "react-icons/fi";
import { CiSaveUp2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import ResizableDetailToys from './ResizableDetailToys';


const DetailToys = () => {
 
    return (
        <div>
            <div className="container">
                <div className="details">
                    <div className="cart-image">
                        <ResizableDetailToys />
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
                            <p>Oyuncaq Maşın
                            </p>
                            <h2>
                            Akumlyatorlu Maşın
                            </h2>
                        </div>
                        <div className="line-cart"></div>
                        <div className="price-star-group">
                            <div className="price">
                                <span>
                                    500 AZN
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
                 
                        <div className="measure">
                            <span className='body' >
                                Bədən
                                <span>
                                   4-8 yaş uşaqlar üçün
                                </span>
                            </span>
                        </div>

                        <div className="color">
                            <span className='color'>Rəng</span>
                            <span>Qırmızı</span>
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

export default DetailToys