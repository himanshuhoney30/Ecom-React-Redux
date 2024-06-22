import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, getCartTotal, increment, remove } from '../Features/CartSlice'
import {Link} from 'react-router-dom'
import './one.css'

function CartPage() {
    const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, cart])

    return (
        <div className='mb-5'>
            <div className="container mt-5 p-3 rounded cart">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="product-details mr-2">
                            <div className="d-flex flex-row align-items-center">
                                <Link to='/'>
                                    <i className="fa fa-long-arrow-left"></i>
                                <span className="ml-2">Continue Shopping</span>
                                </Link>
                            </div>
                            <hr />
                            <h6 className="mb-0">Shopping cart</h6>
                            <div className="d-flex justify-content-between">
                                <span>Your cart items: {cart.length}</span>
                                <div>
                                    <span>Quantity</span>
                                </div>
                                <div>
                                    <span>Remove Items</span>
                                </div>
                                <div className="price ml-2">
                                    <span className="mr-1">Price</span>
                                </div>
                            </div>
                            {cart.map((item, index) => (
                                <div key={index} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                    <div className="d-flex flex-row">
                                        <img className="rounded" src={item.image} width="40" alt='product' />
                                        <div className="ml-2">
                                            <span className="font-weight-bold d-block">{item.model}</span>
                                            <span className="spec">{item.specification}</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center'>
                                        <button className='btn btn-primary' style={{ width: "30px", display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => dispatch(increment(item))}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                        <h5 className="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5>
                                        <button className='btn btn-primary' style={{ width: "30px", display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => dispatch(decrement(item))}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>
                                    <div>
                                        <i onClick={() => dispatch(remove(item))} className="fa fa-trash ml-3 text-black-50"></i>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <span className="d-block ml-5 font-weight-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="payment-info">
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Card details</span>
                                <img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30" alt='card' />
                            </div>
                            <span className="type d-block mt-3 mb-1">Card type</span>

                            <label className="radio">
                                <input type="radio" name="card" value="payment" />
                                <span><img width="40" src="https://img.icons8.com/color/48/000000/mastercard.png" alt='mastercard' /></span>
                            </label>

                            <label className="radio">
                                <input type="radio" name="card" value="payment" />
                                <span><img width="40" src="https://img.icons8.com/officel/48/000000/visa.png" alt='visa' /></span>
                            </label>

                            <label className="radio">
                                <input type="radio" name="card" value="payment" />
                                <span><img width="40" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" alt='amex' /></span>
                            </label>

                            <label className="radio">
                                <input type="radio" name="card" value="payment" />
                                <span><img width="40" src="https://img.icons8.com/officel/48/000000/paypal.png" alt='paypal' /></span>
                            </label>

                            <div>
                                <label className="credit-card-label">Name on card</label>
                                <input type="text" className="form-control credit-inputs" placeholder="Name" />
                            </div>
                            <div>
                                <label className="credit-card-label">Card number</label>
                                <input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="credit-card-label">Date</label>
                                    <input type="text" className="form-control credit-inputs" placeholder="12/24" />
                                </div>
                                <div className="col-md-6">
                                    <label className="credit-card-label">CVV</label>
                                    <input type="text" className="form-control credit-inputs" placeholder="342" />
                                </div>
                            </div>
                            <hr className="line" />
                            <div className="d-flex justify-content-between information">
                                <span>Total Quantity:</span>
                                <span>{totalQuantity}</span>
                            </div>
                            <div className="d-flex justify-content-between information">
                                <span>Total (Incl. taxes)</span>
                                <span>${totalPrice}</span>
                            </div>
                            <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button">
                                <span>${totalPrice}</span>
                                <span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
