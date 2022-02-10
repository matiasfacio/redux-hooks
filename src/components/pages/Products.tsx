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
      <ContentContainer>
        <ProductsAvailable>
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
        </ProductsAvailable>
        <Cart>
          {!cart.products.length ? (
            <p>your cart is empty</p>
          ) : (
            <p>Products in cart: {cart.products.length}</p>
          )}
          <ul>
            {cart.products.map((product) => {
              return (
                <CartItem key={product.id}>
                  {product.name}: {product.price}€ <br />
                  <button onClick={() => deleteProduct(product.id)}>
                    delete
                  </button>
                </CartItem>
              );
            })}
          </ul>
        </Cart>
      </ContentContainer>
    </CartContainer>
  );
};

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 50vw;
  border-radius: 40px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "productsAvailable productsAvailable cart cart";
  background-color: var(--container-bg-color);
  color: white;
  font-weight: 500;
  box-shadow: var(--container-shadow);
`;

const ProductsAvailable = styled.div`
  grid-area: productsAvailable;
`;

const Cart = styled.div`
  grid-area: cart;
  height: 300px;
  padding: 25px;
  border-radius: 40px;
  box-shadow: inset 10px 10px 15px #3c3d3b89;
  position: relative;
  overflow: hidden;
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

const CartItem = styled.li`
  display: inline-block;
  margin: 10px 0;
  list-style: none;
  padding: 0 50px;
`;
