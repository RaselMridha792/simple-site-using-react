import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import BodyContent from "./BodyContent";
import CartContainer from "./CartContainer";
import Footer from "./Footer";

function App() {

  return (
    <>
    {/* navbar  */}
    <section>
      <Navbar siteName="Mealbd"></Navbar>
    </section>
    <BodyContent></BodyContent>
    <CartContainer></CartContainer>
    <Footer></Footer>
    </>
  );
}

export default App;
