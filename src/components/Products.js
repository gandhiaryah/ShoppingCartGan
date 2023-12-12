import React, { useState } from 'react'
import '../styles/products.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartAction'

export default function Products() {
  const [products, setProducts] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [filteredProducts, setFilteredProducts] = useState('')

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  }

  const getProducts = async () => {
    await axios.get('http://localhost:5001/products').then((response) => {
      console.log(response.data)
      setProducts(response.data)

    })
  };

  React.useEffect(() => {

    getProducts()

  }, []);

  let listProducts = null
  if (filteredProducts === '')
    listProducts = products
  else
    listProducts = filteredProducts

  const dispatch = useDispatch()

  return (

    <div className='container px-4'>
      <h1>Products List</h1>
      <hr />
      <div className="row">
      <div className='col-sm-6 form-group d-flex justify-content-end'>
      <label className='col-form-label'>Search Product:</label>

      </div>
      <div className='col-sm-6'>
      <input
        type="text"
        className='form-control textsize'
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      </div>
      </div>
      <hr/>
      <div className="row gx-5 gy-5">
        {
          listProducts.map(product =>
            <div className="col-sm-3">
              <div className="card h-100 bg-dark text-white border-light d-flex justify-content-center">
                <div className='card-img-top'><img src={"images/" + product.productImage} alt="..." className="img-size" /></div>
                <div className="card-title text-center product-name">{product.productName}</div>
                <div className="card-body text-center">
                  <span>Price: Rs. {product.productPrice}/-</span>
                </div>

                <div className="card-footer text-center">
                  <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}
