import React from 'react'
import { useSelector } from 'react-redux'
import { getTotal } from '../redux/cartReducer'
import { getTotalQuantities } from '../redux/cartReducer'


export default function SubTotal() {
    const cart = useSelector(state => state.cart)

  return (
    <>
      <div className="col-sm-6 text-end">Subtotal ({getTotalQuantities(cart.cart)} items): </div>
      <div className="col-sm-6">&nbsp; &nbsp;Rs. {getTotal(cart.cart)}/-</div>
      
    </>
  )
}
