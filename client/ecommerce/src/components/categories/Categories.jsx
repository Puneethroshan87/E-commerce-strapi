import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (                    //using flexbox 
    <div className='categories'>       
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/9693386/pexels-photo-9693386.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/1">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                
                        <button>
                    <Link className="link" to="/products/1">Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                    <Link className="link" to="/products/1">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/4273288/pexels-photo-4273288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories