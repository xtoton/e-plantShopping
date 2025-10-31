import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.items.find((item) => item.name === name)

      if (existingItem) {
        // increase the item quantity if item exists
        existingItem.quantity++;
      } else {
        // add the item to the items list
        state.items.push({ name, image, cost, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
      
    },
    updateQuantity: (state, action) => {

      const {name, quantity} = action.payload; // destructure the product

      // find the item
      const existingItem = state.items.find((item) => item.name === name)
      
      // check if the item exists
      if (existingItem) {
        existingItem.quantity = quantity // update the quantity to the new value
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
