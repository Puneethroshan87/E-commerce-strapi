import React, { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const images = [
    "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a
          labore eligendi blanditiis veniam, porro voluptatem pariatur magnam
          amet debitis perspiciatis laudantium eveniet illo. Quaerat aut non
          quam dolorum quia!
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>(prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button  onClick={()=>setQuantity(prev=>prev + 1)}>+</button>
        </div>
        <button className="add ">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
       <div className="info">
        <span>Vendor: Polo</span>
        <span>Product Type: T-shirt</span>
        <span>Tag: T-shirt, Women, Top</span>
       </div>
        <hr />
       <div className="info">
       <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
       </div>
      </div>
    </div>
  );
};

export default Product;
