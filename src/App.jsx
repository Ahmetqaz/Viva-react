import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PopUpClose } from "./utils/PopUpControl";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="main" id="main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
          <Footer />
          <div
            className="popUp"
            id="popUp"
            onClick={(e) => {
              PopUpClose(e);
            }}
          >
            <div className="popUp__inner"></div>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
