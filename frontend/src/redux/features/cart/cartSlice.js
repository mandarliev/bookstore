import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Already added to the cart",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// export the actions
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
