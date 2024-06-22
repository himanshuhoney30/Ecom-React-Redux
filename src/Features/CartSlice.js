import { createSlice } from '@reduxjs/toolkit'
import detail from '../Components/ProductData'


const initialState = {
  cart: [],
  items: detail,
  totalQuantity: 0,
  totalPrice: 0,
}
export const cartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addtocart:(state,action)=>{
      let find = state.cart.findIndex((item)=> item.id === action.payload.id)
      if( find >= 0){
        state.cart[find].quantity += 1
      }else{
        state.cart.push(action.payload)
      }
    },
    getCartTotal:(state)=>{
      let { totalQuantity,totalPrice}= state.cart.reduce(
        (cartTotal, cartItem)=>{
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const {price, quantity}= cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalQuantity += quantity
          cartTotal.totalPrice += itemTotal
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.totalQuantity = totalQuantity;
      state.totalPrice = parseInt(totalPrice.toFixed(2));
    },
    remove:(state, action)=>{
      let find = state.cart.findIndex((item)=> item.id === action.payload.id)
      if( find >= 0){
        state.cart.splice(find, 1)
      }
    },
    increment:(state, action)=>{
      let find = state.cart.findIndex((item)=> item.id === action.payload.id)
      if( find >= 0){
        state.cart[find].quantity += 1
      }
    },
    decrement: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        if (state.cart[find].quantity > 0) {
          state.cart[find].quantity -= 1;
        } else {
          state.cart.splice(find, 1);
        }
      }
    }
  }
})

export const {addtocart,increment,getCartTotal,decrement,remove,itemPrice} = cartSlice.actions

export default cartSlice.reducer