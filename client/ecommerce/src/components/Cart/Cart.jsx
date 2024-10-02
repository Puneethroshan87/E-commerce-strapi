import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteOutline from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data =[
        {
            id:1,
            img: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt",
            desc:"Long Sleeve Graphic T-shirt",

            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=600",
            // img2:"https://images.pexels.com/photos/4985456/pexels-photo-4985456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            desc:"Coat",

            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {data?.map(item=>(
             <div className='item' key={item.id}> 
             <img src={item.img} alt="" />
             <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?. substring(0,100)}</p>
                <div className="price">
                    1 ×‌ ${item.price}
                </div>
             </div>
             <DeleteOutline className='delete'/>
             </div>
        ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart