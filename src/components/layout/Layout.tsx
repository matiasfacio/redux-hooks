import React from "react";
import { Menu } from "./Menu";
import { Route, Routes } from "react-router";
import { Counter } from "../pages/Counter";
import { Products } from "../pages/Products";
import { BookAClass } from "../pages/BookAClass";
import { Home } from "../pages/Home";
import { TopRightMenu } from "./TopRightMenu";
import { About } from "./About";

export const Layout = () => {
  return (
    <>
      <Menu />
      <TopRightMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="cart" element={<Products />} />
        <Route path="bookaclass" element={<BookAClass />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};
