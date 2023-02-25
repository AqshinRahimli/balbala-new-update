import React from "react";
import Logo from "../Image/cooltext428064248436229.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from '@chakra-ui/react'

const Membership = () =>(
    <div className="login-pages">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="here logo" />
          </Link>
        </div>
        <div className="form-section">
          <div className="form">
            <h2>Abunəlik</h2>
            <div className="registration">

              <Tabs
                isFitted
                variant='enclosed'
                color={"#f28e00"}
                fontSize={"18px"}             
              >
                <TabList mb='1em' borderColor>
                  <Tab className="mobil" _selected={{color:'grey'}}>
                    Mobil nömrə ilə
                  </Tab>

                  <Tab pl={'30px'} className="elektron" _selected={{color:'grey'}}>
                    Elektron poçt ilə
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel
                    width={"300px"}
                    height={"50px"}
                    borderRadius={"20px"}
                    backgroundColor={"rgb(174, 219, 174)"}
                 
                    margin="auto"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <p
                      style={{
                        color: "green",
                        fontWeight: "bold"
                      }}
                    >
                      Mobil nömrəniz
                    </p>
                  </TabPanel>
                  <TabPanel
                    width={"300px"}
                    height={"50px"}
                    borderRadius={"20px"}
                    backgroundColor={"rgb(160, 180, 284) "}
                    margin="auto"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <p
                      style={{
                        color: "blue",
                        fontWeight: "bold"

                      }}
                    >
                      Elektron poçt adresiniz
                    </p>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <div className="button">
                <button>
                  Giriş et/Abunə ol
                </button>
              </div>
            </div>
            <div className="line">
              <span>Yada</span>
            </div>
            <h5>Sosial Hesab İlə Giriş Edin </h5>
            <p>
              Balbala-ya şifrəsiz giriş edə bilmek üçün Google, Apple vəya
              Facebook hesabınızı bağlaya bilərsiniz.
            </p>
            <div className="social">
              <ul>
                <li>
                  <a href="https://az-az.facebook.com/">
                    <FaFacebookSquare
                      style={{ fontSize: "40px", color: "#fff" }}
                    />
                  </a>
                </li>
                <li className="Facebook">
                  <a href="https://www.google.com/search?q=google&rlz=1C5CHFA_enAZ1039AZ1039&oq=google&aqs=chrome..69i57j69i59l2j69i65j69i60l2j69i65l2.4082j0j7&sourceid=chrome&ie=UTF-8">
                    <FcGoogle
                      style={{ fontSize: "40px", backgroundColor: "#fff" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default Membership;
