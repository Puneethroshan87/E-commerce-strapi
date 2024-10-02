import React from 'react'
import Cards from '../Cards/Cards'
import "./List.scss"

const List = () => {
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
    <div className='list'> 
    {data?.map(item=>(
        <Cards item={item} key={item.id}/>
     ))}
     </div>
  )
}

export default List