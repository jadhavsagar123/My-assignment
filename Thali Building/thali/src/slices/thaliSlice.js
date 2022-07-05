import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item:[],
  cartTotalAmount:0,
  cartTotalQuantity:0
  
}

export const thaliSlice = createSlice({
  name: 'thali',
  initialState,
  reducers: {
  
    customization: (state, action) => {
     
      const itemIndex= state.item.findIndex((i)=>i.id === action.payload.id);

     if(itemIndex >=0){
       state.item[itemIndex].qty+=1;
     }
     else{
      const tempProduct={...action.payload, qty:1};
      state.item.push(tempProduct)
     }
    
      
      
      
    },
    clearCustomize: (state,action) => {

      const itemIndex= state.item.findIndex(
        (x)=> x.id === action.payload.id
      );

      if(state.item[itemIndex].qty >1){
        state.item[itemIndex].qty-=1
      }
      else if(state.item[itemIndex].qty === 1){

        const y=state.item.filter(
          (thali) => thali.id !== action.payload.id)
          state.item=y;

      }
    },
    getTotal :(state, action)=> {
      let { total, quantity } = state.item.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      console.log(quantity)
      

    }
  },
})

// Action creators are generated for each case reducer function
export const { orderToCart,customization,clearCustomize, getTotal} = thaliSlice.actions

export default thaliSlice.reducer