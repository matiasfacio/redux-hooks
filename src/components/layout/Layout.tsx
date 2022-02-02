import React from "react";
import { Menu } from "./Menu";
import { Route, Routes } from "react-router";
import { Counter } from "../pages/Counter";
import { Products } from "../pages/Products";
import { BookAClass } from "../pages/BookAClass";
import { Home } from "../pages/Home";
import { TopRightMenu } from "./TopRightMenu";
import { About } from "../pages/About";
import { Admin } from "../pages/Admin";
import { Teachers } from "../pages/Teachers";

export const Layout = () => {
  return (
    <>
      <Menu />
      <TopRightMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Teachers />} />
        <Route path="counter" element={<Counter />} />
        <Route path="cart" element={<Products />} />
        <Route path="bookaclass" element={<BookAClass />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </>
  );
};
