import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
