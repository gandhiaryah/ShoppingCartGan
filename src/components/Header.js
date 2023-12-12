import React from 'react'
import { useSelector, } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalQuantities } from '../redux/cartReducer'


export default function Header() {

    const cart = useSelector(state => state.cart)

    
    return (

        <nav className="navbar navbar-expand-lg navbar-dark me-auto">

            <Link className="navbar-brand" to="/"><img src="./images/logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top" />Hayra Tech</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                        <Link className="nav-link active" to="/">Home |</Link>
                    </li>                    
{/*                 <li className="nav-item active">
                        <Link className="nav-link active" to="/Login">Login |</Link>
                    </li>                    
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/RegisterForm">Register |</Link>
                    </li> */}

                    <li className="nav-item">
                        <Link className="nav-link" to="/Employees">Employees |</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Products">Products |</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Cart">Cart <i className="fas fa-shopping-cart"></i><strong><sup>{getTotalQuantities(cart.cart)}</sup></strong></Link>
                    </li> 
                </ul>
            </div>
        </nav>




    )
}
