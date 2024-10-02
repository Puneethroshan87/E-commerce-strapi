import React, { useState } from 'react'
import "./products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {

const catId = parseInt( useParams().id)
const [maxPrice,setMaxPrice] = useState(1000) 
const [sort,setSort] = useState()

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={2} />
            <label htmlFor="1">Skirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={3} />
            <label htmlFor="3">Hat</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price </h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" name="" id=""  min={0} max={1000}  onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price (lowest first) </label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="dsc"  onChange={e=>setSort("dcs")}/>
            <label htmlFor="dsc">Price (Highest first) </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/5104548/pexels-photo-5104548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<List  catId={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products