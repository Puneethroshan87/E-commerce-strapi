import React from "react";
import "./FeaturedProducts.scss";
import Cards from "../Cards/Cards";

const FeaturedProducts = ({type}) => {

    const data =[
        {
            id:1,
            img: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=600",
            // img2:"https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            oldPrice: 19,
            price: 12,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/961165/pexels-photo-961165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // img2:"https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=600",
            // img2:"https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat",
            oldPrice: 19,
            price: 12,
        },
    ]
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          temporibus! Ea aut possimus libero aspernatur sed sapiente? Officiis,
          quidem tempora minus ipsa velit quisquam reprehenderit vitae doloribus
          est perferendis beatae!
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
            <Cards item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
