import React, { useState } from "react";
import MarketStats from "../pageparts/MarketStats";
function SideBar() {
  var [toggleSidebar, setSidebarToggle] = useState("collapse-side");

  return (
    <div
      className={
        "sidebar-menu off-white " +
        (toggleSidebar === "expand-side" ? "collapse-side" : "expand-side")
      }
    >
      <div className="toggle-bar d-flex justify-content-between align-items-center p-2 mb-2">
        <h2 className="text-size-13 fw-600 m-0">RECOMMENDED CHANNELS</h2>
        <button
          className="border-0 dots-menu rounded-1 off-white p-1"
          onClick={() => {
            setSidebarToggle(
              toggleSidebar === "expand-side" ? "collapse-side" : "expand-side"
            );
          }}
        >
          <svg
            width="100%"
            height="100%"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            fill="#efeff1"
          >
            <g>
              <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
            </g>
          </svg>
        </button>
        <span className="w-100 text-center">
          <i class="fa-solid fa-video"></i>
        </span>
      </div>

      <div className="channels">
        <a
          href="#we"
          className="d-flex align-items-center channel-item text-decoration-none off-white text-size-13 flex-nowrap p-2 py-0 mb-1"
        >
          <div>
            <img
              style={{ width: "30px", height: "30px" }}
              className="rounded-circle"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
              alt=""
            />
          </div>

          <div className="d-flex overflow-hidden w-100 justify-content-between">
            <div className="mx-2">
              <div className="stream-name fw-600">nAts</div>
              <div className="stream-catg">VALORANT</div>
            </div>
            <div className="stream-views">
              <span>6.3K</span>
            </div>
          </div>
        </a>
        <a
          href="#we"
          className="d-flex align-items-center channel-item text-decoration-none off-white text-size-13 flex-nowrap p-2 py-0 mb-1"
        >
          <div>
            <img
              style={{ width: "30px", height: "30px" }}
              className="rounded-circle"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/16bf467e-7593-4999-b0ca-72605852441a-profile_image-70x70.png"
              alt=""
            />
          </div>

          <div className="d-flex overflow-hidden w-100 justify-content-between">
            <div className="mx-2">
              <div className="stream-name fw-600">eggwick</div>
              <div className="stream-catg">VALORANT</div>
            </div>
            <div className="stream-views">
              <span>482</span>
            </div>
          </div>
        </a>
        <a
          href="#we"
          className="d-flex align-items-center channel-item text-decoration-none off-white text-size-13 flex-nowrap p-2 py-0 mb-1"
        >
          <div>
            <img
              style={{ width: "30px", height: "30px" }}
              className="rounded-circle"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/1aea44a4-d85b-401e-b9f5-cb6906d77594-profile_image-70x70.png"
              alt=""
            />
          </div>

          <div className="d-flex overflow-hidden w-100 justify-content-between">
            <div className="mx-2">
              <div className="stream-name fw-600">benjyfishy</div>
              <div className="stream-catg">VALORANT</div>
            </div>
            <div className="stream-views">
              <span>1.6K</span>
            </div>
          </div>
        </a>
        <a
          href="#we"
          className="d-flex align-items-center channel-item text-decoration-none off-white text-size-13 flex-nowrap p-2 py-0 mb-1"
        >
          <div>
            <img
              style={{ width: "30px", height: "30px" }}
              className="rounded-circle"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7aaf7b0-49c7-4dd3-8228-861478bfd435-profile_image-70x70.png"
              alt=""
            />
          </div>

          <div className="d-flex overflow-hidden w-100 justify-content-between">
            <div className="mx-2">
              <div className="stream-name fw-600">Ninja</div>
              <div className="stream-catg">Fortnite</div>
            </div>
            <div className="stream-views">
              <span>14K</span>
            </div>
          </div>
        </a>
        <a
          href="#we"
          className="d-flex align-items-center channel-item text-decoration-none off-white text-size-13 flex-nowrap p-2 py-0 mb-1"
        >
          <div>
            <img
              style={{ width: "30px", height: "30px" }}
              className="rounded-circle"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/16171cc1-ef1c-4b85-9143-ad31037f072d-profile_image-70x70.png"
              alt=""
            />
          </div>

          <div className="d-flex overflow-hidden w-100 justify-content-between">
            <div className="mx-2">
              <div className="stream-name fw-600">schrodingerLee</div>
              <div className="stream-catg">Overwatch 2</div>
            </div>
            <div className="stream-views">
              <span>1.8K</span>
            </div>
          </div>
        </a>
      </div>

      <hr />

      <MarketStats />
    </div>
  );
}
export default SideBar;
