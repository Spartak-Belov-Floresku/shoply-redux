import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {createStore} from "redux"
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootReducer';

const store = createStore(rootReducer);

test('renders learn react link', () => {
  
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>);
  const linkElement = screen.getByText(/Shoply/i);
  expect(linkElement).toBeInTheDocument();

});


test('fires event that adds the firts item to the user cart and removs that item from the cart', () => {

  const { getAllByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>);

  fireEvent.click(getAllByText('Add to cart')[0]);
  let cartItem = localStorage.getItem('userCart') ?? null;
  expect(cartItem).toBeTruthy();

  fireEvent.click(getAllByText('Remove from cart')[0]);
  cartItem = localStorage.getItem('userCart');
  expect(cartItem).toBe("{}");

});