import { Button, Stack } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaFirstOrder } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GrGift } from "react-icons/gr";
import { SiGooglemessages } from "react-icons/si";
import { SlBasketLoaded } from "react-icons/sl";
import { TfiHelpAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Logo from "../Image/cooltext428064248436229.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-top">
            <div></div>
            <div>
              <span>100 azn və yuxarı sifarişlərdə 30% endirim!</span>
            </div>
            <div>
              <ul>
                <li className="help" >
                  <Link style={{ color: "#fff" }}>
                    <TfiHelpAlt
                      style={{
                        position: "absolute",
                        fontSize: "20px",
                        marginLeft: "-15px",
                        top: 15,
                      }} />
                    <span style={{ marginLeft: "15px" }}>Yardım</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="header-mid">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="search">
                <BsSearch className="search-icon" />
                <input type="search" placeholder="Nə axtarırsınız?" />
              </div>
              <div className="registration">
                <Stack
                  spacing={4}
                  direction="row"
                  align="center"
                  marginBottom="-18px"
                  marginLeft="10px">
                  <Button
                    className="liked-btn"
                    colorScheme="teal"
                    variant="outline"
                    width={"50px"}
                    height={"50px"}
                    borderRadius="50%"
                    padding={"10px"}>
                    <Link to="/membership" state={{ some: "value" }}>
                      <div className="FiHeart-icon">
                        <FiHeart style={{ fontSize: "25px" }} />
                      </div>
                    </Link>
                  </Button>
                  <Button
                    className="acount-btn"
                    colorScheme="teal"
                    _hover={{ backgroundColor: "teal" }}
                    width={"130px"}
                    height={"50px"}
                    borderRadius={"40px"}>
                    Hesabım
                    <BiUser
                      style={{
                        fontSize: "20px",
                        position: "absolute",
                        left: "10",
                      }}
                    />
                    <div className="dropdown-menu">
                      <ul>
                        <div>
                          <Link to="/membership">Giriş</Link>
                        </div>
                        <li>
                          <Link to="/membership" state={{ some: "value" }}>
                            <FaFirstOrder
                              style={{ position: "absolute", left: 5 }} />
                            Sifariş
                          </Link>
                        </li>
                        <li>
                          <Link to="/membership" state={{ some: "value" }}>
                            <SiGooglemessages
                              style={{ position: "absolute", left: 5 }} />
                            Mesajlarım
                          </Link>
                        </li>
                        <li>
                          <Link to="/membership" state={{ some: "value" }}>
                            <FiHeart style={{ position: "absolute", left: 5 }} />
                            Favorilərim
                          </Link>
                        </li>
                        <li>
                          <Link to="/membership" state={{ some: "value" }}>
                            <GrGift
                              style={{
                                color: "green",
                                position: "absolute",
                                left: 5,
                              }}
                            />
                            Hədiyyələrim
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Button>
                  <Button
                    className="basket-btn"
                    colorScheme="teal"
                    width={"130px"}
                    height="50px"
                    borderRadius="40px">
                    <Link to="Basket">
                      <SlBasketLoaded
                        className="SlBasketLoaded-icon"
                        style={{
                          display: "flex",
                          position: "absolute",
                          top: 15,
                          left: 10,
                          fontSize: "20px",
                        }} />
                      <p> Səbətim</p>
                    </Link>
                  </Button>
                </Stack>
              </div>
            </div>
            <div className="header-down">
              <nav>
                <ul>
                  <li className="catigoriesBtn">
                    <Link>
                      Katiqoriya 
                      <div className="dnopdrown-menu-catigories">
                        <div className="dnopdrown-menu-catigories-left">
                          <ul>
                            <li>Geyim və tekstil</li>
                            <li>Uşaq otağı</li>
                            <li>Hamam ləvazimatları </li>
                            <li>Bez və dəsmal</li>
                          </ul>
                        </div>
                        <div className="dnopdrown-menu-catigories-right">
                          <ul>
                          <li>Uşaq arabası və avadanlığı</li>   
                            <li>Oyuncaq və kitab</li>                                             
                            <li>Qidalanma avadanlıqları </li>
                            <li>Bəslənmə</li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="discoverBtn">
                    <Link>
                      Kəşfet
                      <div className="dnopdrown-menu-discover">
                        <div className="game-learning">
                          <h5>Oyun və Öyrənmə 🧩</h5>
                          <ul>
                            <li>Danışıram</li>
                            <li>Saymağı öyrənirəm</li>
                            <li>Kəşf edirəm</li>
                          </ul>
                        </div>
                        <div className="toilet-bathroom">
                          <h5>Tualet və Hamam 🛁</h5>
                          <ul>
                            <li>Təmizlik zamanı</li>
                            <li>Saç və cild baxımım</li>
                            <li>Tualet təlimim</li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="giftbtn">
                    <Link>
                      Hədiyyə
                      <div className="dnopdrown-menu-gift">
                        <div className="for-age">
                          <h5>Yaşa görə Hədiyyələr🎂</h5>
                          <ul>
                            <li>1 Yaş Hədiyyələr</li>
                            <li>2 Yaş Hədiyyələr</li>
                            <li>3 Yaş Hədiyyələr</li>
                          </ul>
                        </div>
                        <div className="dress">
                          <h5>Dəst Geyimlərim👕</h5>
                          <ul>
                            <li>Uşaq Geyimi </li>
                            <li>Uşaq Ayaqqabıları</li>
                            <li>Aksesuarları</li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"Campaign"}>Kampaniyalar</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="line"></div>
        </nav>
      </header>
    </div>
  );
};
export default Header;