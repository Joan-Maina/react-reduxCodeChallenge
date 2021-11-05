import Carousel from "./Carousel..ss";
import React from "react";
import Display from "./Display";
import Navbar from "./Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Display />
    </div>
  );
}

export default Home;
