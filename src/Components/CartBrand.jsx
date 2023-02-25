import Braun from "../Image/braun-logo.png";
import Philips from "../Image/philips-avent-logo.webp";
import Prima from "../Image/prima-logoo.png";


export const CartBrand = () => {
  
    return (
        <div className="container">
            <img src={Braun} />
            <img src={Philips} />
            <img src={Prima} /> 
        </div>
    )
}  