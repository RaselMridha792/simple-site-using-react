import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import BodyContent from "./BodyContent";
import CartContainer from "./CartContainer";
import Footer from "./Footer";
import ApiData from "./ApiData";

function App() {

  return (
    <>
      <section>
        <Navbar siteName="Mealbd"></Navbar>
      </section>
      <BodyContent></BodyContent>
      <ApiData></ApiData>
      <Footer></Footer>
    </>
  );
}

export default App;
