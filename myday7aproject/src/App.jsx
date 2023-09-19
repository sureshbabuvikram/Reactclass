import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Features/cartStore';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <HomePage />
        <CartPage />
      </Provider>
    </div>
  );
};

export default App;