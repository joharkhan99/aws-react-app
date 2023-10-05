import React from "react";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import SideBar from "../includes/SideBar";
import HomeBody from "../pageparts/HomeBody";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <SideBar />
        <HomeBody />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
