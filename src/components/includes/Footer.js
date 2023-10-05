import React from "react";
function Footer() {
  return (
    <footer className="bg-primary text-white w-100 align-items-center justify-content-between">
      <div className="footer-cont d-flex align-items-center justify-content-between">
        <div className="d-flex">
          {/* <img src={require("../../assets/logo1.png")} alt="logo" /> */}
          <p className="fw-bold m-0 px-2">Join the Twitch community!</p>
          <p className="m-0">Discover the best live streams anywhere.</p>
        </div>
        <div>
          <button
            className="border-0 fw-600 p-1 px-2 bg-white hover1 mx-2 rounded-1 text-size-13 text-dark"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
