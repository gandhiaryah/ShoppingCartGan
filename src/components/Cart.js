import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/products.css'
import SubTotal from './SubTotal'
import { decreaseQuantity, removeFromCart } from '../redux/cartAction'
import { addToCart } from '../redux/cartAction'

export default function Cart() {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  if (cart.cart.length === 0)
    return (<h2>Cart is Empty. Please add items to cart...</h2>)

  return (
    <div className='container'>
      <div className="row">&nbsp;</div>
      {
        cart.cart.map(item =>

          <div key={item.id} className="row">

            <div className="col-sm-2"><img src={"images/" + item.productImage} alt="..." className="img-cart-size" /></div>
            <div className="col-sm-4">{item.productName}</div>
            <div className="col-sm-1 text-end  align-middle">Rs. {item.productPrice}/-</div>

            <div className="col-sm-3 align-middle text-center">
              <button className="btn btn-dark" onClick={() => dispatch(decreaseQuantity(item.id))}><i className="fa fa-minus" aria-hidden="true"></i></button>
              {item.quantity}
              <button className="btn btn-dark" onClick={() => dispatch(addToCart(item))}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            <div className="col-sm-1"><button className="btn btn-dark" onClick={() => dispatch(removeFromCart(item.id))}><i className="fa fa-trash"></i></button></div>
          </div>


        )}
        <div className='row'>&nbsp;</div>
      <div className='row'>
      {<SubTotal />}
      </div>
    </div>


  )
}
