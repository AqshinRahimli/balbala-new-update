import axios from "axios";
import React from "react";
import Resizable from "../Components/Resizable";
import ResizableCartToy from '../Components/ResizableCartToy';
import Endirim2 from "../Image/subat-orta-w.webp";
import ResizableBrand from "../Components/ResizableBrand";


const image = [
  {
    img: '/braun-logo.png',
  },
{ 
  img: '/philips-avent-logo.webp',
 },
{ 
  img: '/philips-avent-logo.webp',
 },
{
  img: '/prima-logoo.png'
},
{
  img: '/braun-logo.png',
},
{ 
img: '/philips-avent-logo.webp',
},
{ 
  img: '/philips-avent-logo.webp',
 },
{
  img: '/prima-logoo.png'
},
{ 
  img: '/philips-avent-logo.webp',
 },
{
  img: '/prima-logoo.png'
}
];

export const Home = () => {

  const [carts, setCarts] = React.useState([]); 
  const [toys, setToys] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://63d7fdef5c4274b136ffd008.mockapi.io/balbala/base/carts")
      .then((data) => setCarts(data.data));
  }, []);


  React.useEffect(() => {
    axios
      .get("https://63d7fdef5c4274b136ffd008.mockapi.io/balbala/base/toys")
      .then((data) => setToys(data.data));
  }, []);
 
  return (
    <div style={{ padding: "60px 10px" }}>
      <div className="container">
        <div className="section-1">
          <div className="option">
            <div className="title">
              <h2>Sizin üçün Seçdiklərimiz</h2>
            </div>
            <Resizable data={carts} />
          </div>
        </div> 
        <div className="image-discount">
          <img src={Endirim2} />
        </div>
      </div>

      <div className="container">
        <div className="section-2">
          <div className="option">
            <div className="title">
              <h2>Şans bölməsi</h2>
            </div>
            <ResizableCartToy data={toys} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="brand">
          <div className="title">
            <h2>Brendlər</h2>
            <div className="brand-image">
            <ResizableBrand image={image} />
            </div>      
          </div>
        </div>
      </div>
    </div>
  );

};
