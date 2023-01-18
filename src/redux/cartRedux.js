import { createSlice } from '@reduxjs/toolkit'
import toast from "react-hot-toast";

const myProducts = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];
const myQuantity = localStorage.getItem("quantity") !== null ? JSON.parse(localStorage.getItem("quantity")) : 0;
const myTotal = localStorage.getItem("total") !== null ? JSON.parse(localStorage.getItem("total")) : 0;

const setCartFunc = (products, quantity, total) => {
    localStorage.setItem("cart", JSON.stringify(products));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    localStorage.setItem("total", JSON.stringify(total));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: myProducts,
        quantity: myQuantity,
        total: myTotal,
    },
    reducers: {
        addProduct: (state, action) => {
            const itemInCart = state.products.find(product => product.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity;
            } else {
                state.quantity += 1;
                const { prices, desc, ...newProduct } = action.payload.product;
                state.products.push({ 
                    ...newProduct,
                    id: action.payload.id,
                    ml: action.payload.ml,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                });
            };
            toast.success(action.payload.message);
            state.total += action.payload.price * action.payload.quantity;
            setCartFunc(state.products, state.quantity, state.total);
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products = state.products.filter((item) => item.id !== action.payload.id);
            state.total -= action.payload.price * action.payload.quantity;
            toast.error(action.payload.message);
            setCartFunc(state.products, state.quantity, state.total);
        },
        removeQuantity: (state, action) => {
            const itemInCart = state.products.find(product => product.id === action.payload.id);
            itemInCart.quantity -= 1;
            state.total -= action.payload.price;
            if (itemInCart.quantity === 0) {
                state.quantity -= 1;
                state.products = state.products.filter((item) => item.quantity !== 0);
            };
            toast.error(action.payload.message);
            setCartFunc(state.products, state.quantity, state.total);
        },
    },
})

export const { addProduct, removeQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;