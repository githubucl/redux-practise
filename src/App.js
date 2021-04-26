import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducer from './reducer'
// redux stuff
const initialStore = {
  total: 105,
  amount: 0,
  cartItems: cartItems
}





const store = createStore(reducer, initialStore)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
