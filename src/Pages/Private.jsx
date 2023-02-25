import axios from "axios";
import React from 'react'
import Resizable from "../Components/Resizable";

export const Private = () => {
  const [carts, setCarts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://63d7fdef5c4274b136ffd008.mockapi.io/balbala/base/carts")
      .then((data) => setCarts(data.data));
  }, []);


  return (
    <div>
      <Resizable data={carts} />
    </div>
  )
}

