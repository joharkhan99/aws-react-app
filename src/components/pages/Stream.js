import React from "react";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import SideBar from "../includes/SideBar";
import ChatBar from "../pageparts/ChatBar";
import StreamBody from "../pageparts/StreamBody";

function Stream() {
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
        <div className="d-flex w-100">
          <StreamBody />
          <ChatBar />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Stream;
