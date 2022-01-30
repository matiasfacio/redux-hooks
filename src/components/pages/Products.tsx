import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cartSliceActions, Product } from "../../features/cart/cart-slice";
import { Title } from "../elements/Title";

const productsAvailable: Product[] = [
  {
    id: 1,
    name: "1 x Private Class",
    price: 80,
  },
  {
    id: 2,
    name: "3 x Private Classes Package",
    price: 210,
  },
  {
    id: 3,
    name: "5 x Private Clases Package",
    price: 325,
  },
];

export const Products = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const addProductToCart = (id: number, name: string, price: number) =>
    dispatch(cartSliceActions.addProduct({ id, name, price }));
  const deleteProduct = (id: number) =>
    dispatch(cartSliceActions.removeProduct(id));

  return (
    <CartContainer>
      <Title>Your cart</Title>
      <div className="container">
        <div className="products_available">
          {productsAvailable.map(({ id, name, price }) => {
            return (
              <Item key={name}>
                {name}: {price}€
                <button onClick={() => addProductToCart(id, name, price)}>
                  Add to cart
                </button>
              </Item>
            );
          })}
        </div>
        <div className="cart">
          {!cart.products.length ? (
            <p>your cart is empty</p>
          ) : (
            <p>Products in cart: {cart.products.length}</p>
          )}
          <ul>
            {cart.products.map((product) => {
              return (
                <li key={product.id}>
                  {product.name}: {product.price}€ <br />
                  <button onClick={() => deleteProduct(product.id)}>
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </CartContainer>
  );
};

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  margin: 20px 0;
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  transition: transform 500ms ease-in-out;
  :hover {
    transform: translateY(-2px);
  }
`;
