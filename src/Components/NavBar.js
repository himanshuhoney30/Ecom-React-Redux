import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCartTotal } from '../Features/CartSlice';

function NavBar() {
    const { totalQuantity } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    },)
    return (
        <nav class="navbar navbar-expand-lg navbar-primary bg-body-tertiary ">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse navbarSupportedContent"
                    id="navbarButtonsExample"
                >
                    <Link to="/" class="me-auto">
                        <button class=" btn btn-primary">
                            All Products
                        </button>
                    </Link>
                    <Link class="me-auto">
                        <h1>
                            E-commerce
                        </h1>
                    </Link>
                    <Link to="/Cart" class="d-flex align-items-center">
                        <div >
                            <button data-mdb-ripple-init type="button" class="btn btn-black me-3">
                                <i class="fas fa-shopping-cart" ></i> All Carts({totalQuantity})
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default NavBar