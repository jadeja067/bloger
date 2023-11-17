import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Details, User, AddBlog } from "./pages";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/user/:user" element={<User />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
