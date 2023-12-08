import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PopUpClose } from "./utils/PopUpControl";
import useLocalization from "./hooks/useLocalization";
const App = () => {
  const strings = useLocalization();

  return (
    <>
      <BrowserRouter>
        <main className="main" id="main">
          <Header />
          <Routes>
            <Route path="/" element={<Home strings={strings} />}></Route>
            <Route
              path="/gallery"
              element={<Gallery strings={strings} />}
            ></Route>
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
