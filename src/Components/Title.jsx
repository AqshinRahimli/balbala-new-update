import React from "react";
import Logo from "../Image/cooltext428064248436229.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { SiHuawei } from "react-icons/si";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const Title = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownHandler = () => {
    setOpenDropdown(previous => !previous);  
  };
  const rightCompanies = ['Mağazalarımız','İş Konseptimiz','Markalarımız','İşləm rəhbəri','Şəxsi Məlumatlar','Əlaqə'];
  const rightHelp = ["Sifarişi izlə","Zəmanət şərtləri","Çatdırılma şərtləri","Ödəniş variantları","Məxfilik","Etibarlı Alış-veriş"];
  const socialTop=[1,2,3,4];
  const resr = {
    [1]:()=><BsInstagram />,
    [2]:()=><FaFacebookF />,
    [3]:()=><BsTwitter />,
    [4]:()=><FaLinkedinIn />,
  }
  const socialBottom=[{id:1,text:'Google Play'},{id:2,text:'App Store'},{id:3,text:'AppGallery'}];
  
  const res = {
    [1]:()=><FaGooglePlay style={{ marginRight: "10px" }} />,
    [2]:()=><AiFillApple style={{ marginRight: "10px" }} />,
    [3]:()=><SiHuawei style={{ marginRight: "10px" }} />,
  }
  return (
    <div>
      <footer>
         <div className="container">
          <div className="footer">
            <div className="help">
              <div className="help-right">
                <h6>Qurumlar</h6>
                <ul>
                  {rightCompanies.map((info,index)=><li key={index}><a href="#">{info}</a></li>)}
                </ul>
              </div>
              <div className="help-left">
                <div className="button-menu" >
                  <h6>
                    Yardım
                  </h6>
                </div> 
                <div className="dnopdown">
                  <ul>
                  {rightHelp.map((info,index)=><li key={index}><a href="#">{info}</a></li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="social">
              <div className="social-top">
                <h5>Bizi sosial mediadan izləyin</h5>
                <ul>
                  {socialTop.map((item,index)=> <li key={index}><a href="#"><span>{resr[item]()}</span></a></li>)}
                </ul>
              </div>
              <div className="social-button">
                <h5>Mobil tətbiq</h5>
                <ul>
                  {socialBottom.map((item,index)=><li key={index}><a href="#"><span>{res[item.id]()}{item.text}</span></a></li>)}
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <div className="footer-buttom">
            <div className="logo col-3">
              <Link to="/">
                <img
                  src={Logo}
                  style={{scrollPaddingBottom: "20px" }}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="author-law col-9">
              <p>Müəllif hüquqları qorunur.</p>
            </div>
          </div>
      </footer>
    </div>
  );
};
export default Title;
