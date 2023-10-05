import React, { useState } from "react";
import { Link } from "react-router-dom";

// svgs
import gaming from "../../assets/gaming.svg";
import create from "../../assets/create.svg";
import irl from "../../assets/irl.svg";
import music from "../../assets/music.svg";
import esports from "../../assets/esports.svg";

function HomeBody() {
  var [showButton, setShowButton] = useState(true);
  var [awardwin_showButton, setawardwin_ShowButton] = useState(true);
  var [sports_showButton, setsports_showButton] = useState(true);

  return (
    <main className="py-5">
      <div class="container-fluid grids">
        <div class="row">
          <Link to="/stream">Stream Page</Link>
          <Link to="/signup" className="mb-3">
            Sign Up Page
          </Link>
          <h2 className="off-white mb-3">
            <a
              href="#wqe"
              className="color-primary text-decoration-none fw-bold"
            >
              Live channels
            </a>
            <span className="px-2">we think you’ll like</span>
          </h2>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="collapse row" id="live_ch_collapse">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>
                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>
                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>
                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className={showButton ? "d-none" : ""} />

          <div className={"show-more-btn " + (!showButton ? "d-none" : "")}>
            <button
              class="btn d-inline-block  color-primary p-1 px-2 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#live_ch_collapse"
              aria-expanded="false"
              aria-controls="live_ch_collapse"
              onClick={() => {
                setShowButton(false);
              }}
            >
              Show more<i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <h2 className="off-white mb-3">
            <a
              href="#wqe"
              className="color-primary text-decoration-none fw-bold"
            >
              Categories
            </a>
            <span className="px-2">we think you’ll like</span>
          </h2>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-2" />
        </div>

        <div className="row mt-4">
          <div className="col p-1">
            <div className="d-flex catg-card justify-content-between bg-primary rounded off-white p-2 position-relative">
              <a href="#as" className="text-decoration-none off-white">
                <h3 className="fw-bold m-0">Games</h3>
                <img src={gaming} alt="sd" className="position-absolute" />
              </a>
            </div>
          </div>
          <div className="col p-1">
            <div className="d-flex catg-card justify-content-between bg-primary rounded off-white p-2 position-relative">
              <a href="#as" className="text-decoration-none off-white">
                <h3 className="fw-bold m-0">IRL</h3>
                <img src={irl} alt="sd" className="position-absolute" />
              </a>
            </div>
          </div>
          <div className="col p-1">
            <div className="d-flex catg-card justify-content-between bg-primary rounded off-white p-2 position-relative">
              <a href="#as" className="text-decoration-none off-white">
                <h3 className="fw-bold m-0">Music</h3>
                <img src={music} alt="sd" className="position-absolute" />
              </a>
            </div>
          </div>
          <div className="col p-1">
            <div className="d-flex catg-card justify-content-between bg-primary rounded off-white p-2 position-relative">
              <a href="#as" className="text-decoration-none off-white">
                <h3 className="fw-bold m-0">Esports</h3>
                <img src={esports} alt="sd" className="position-absolute" />
              </a>
            </div>
          </div>
          <div className="col p-1">
            <div className="d-flex catg-card justify-content-between bg-primary rounded off-white p-2 position-relative">
              <a href="#as" className="text-decoration-none off-white">
                <h3 className="fw-bold m-0">Creative</h3>
                <img src={create} alt="sd" className="position-absolute" />
              </a>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <h2 className="off-white mb-3">
            <span>Award Winning Games in Action</span>
          </h2>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>

              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>

              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>

              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="collapse row" id="award_win_collapse">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>

                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>

                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>

                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className={awardwin_showButton ? "d-none" : ""} />

          <div
            className={
              "show-more-btn " + (!awardwin_showButton ? "d-none" : "")
            }
          >
            <button
              class="btn d-inline-block  color-primary p-1 px-2 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#award_win_collapse"
              aria-expanded="false"
              aria-controls="award_win_collapse"
              onClick={() => {
                setawardwin_ShowButton(false);
              }}
            >
              Show more<i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <h2 className="off-white mb-3">
            <span>2022 Award Winning Games</span>
          </h2>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-1" />
        </div>

        <div className="row mt-4">
          <h2 className="off-white mb-3">
            <span>Recently Released Games</span>
          </h2>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-4 col-md-2 col-l-2 col-xl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none d-block"
                          href="as"
                        >
                          Just Chatting
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          457K viewers
                        </a>
                      </div>
                      <div className="card-category-name">
                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-1" />
        </div>

        <div class="row mt-4">
          <h2 className="off-white mb-3">
            <span>Sports Games</span>
          </h2>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>

              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>

              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
            <div class="card w-100 bg-transparent rounded-0 border-0">
              <span className="live-tag">LIVE</span>

              <a
                href="#as"
                style={{ height: "200px" }}
                className="card-img-top bg-primary"
              >
                <img
                  src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                  class="card-img-top rounded-0 w-100 h-100"
                  alt="..."
                />
              </a>
              <div class="card-body p-0 py-2">
                <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                  <div className="card-image">
                    <a href="#we">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex overflow-hidden w-100 justify-content-between">
                    <div className="mx-2">
                      <div>
                        <a
                          className="stream-name off-white text-decoration-none"
                          href="as"
                        >
                          Ranking Main Account Back Up
                        </a>
                      </div>
                      <div className="card-channel-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          TenZ
                        </a>
                      </div>
                      <div className="card-category-name">
                        <a
                          className="stream-catg text-decoration-none"
                          href="as"
                        >
                          VALORANT
                        </a>

                        <div className="card-tags my-2">
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none rounded-pill tag px-2"
                          >
                            English
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="collapse row" id="sport_collapse">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>

                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>

                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
              <div class="card w-100 bg-transparent rounded-0 border-0">
                <span className="live-tag">LIVE</span>

                <a
                  href="#as"
                  style={{ height: "200px" }}
                  className="card-img-top bg-primary"
                >
                  <img
                    src="https://gamedaim.com/wp-content/uploads/2019/01/Kalahkan-Fortnite-CS-GO-Jadi-Game-Nomor-Satu-di-Live-Stream-Twitch-Gamedaim-750x375.png"
                    class="card-img-top rounded-0 w-100 h-100"
                    alt="..."
                  />
                </a>
                <div class="card-body p-0 py-2">
                  <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                    <div className="card-image">
                      <a href="#we">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="rounded-circle"
                          src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="d-flex overflow-hidden w-100 justify-content-between">
                      <div className="mx-2">
                        <div>
                          <a
                            className="stream-name off-white text-decoration-none"
                            href="as"
                          >
                            Ranking Main Account Back Up
                          </a>
                        </div>
                        <div className="card-channel-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            TenZ
                          </a>
                        </div>
                        <div className="card-category-name">
                          <a
                            className="stream-catg text-decoration-none"
                            href="as"
                          >
                            VALORANT
                          </a>

                          <div className="card-tags my-2">
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="text-decoration-none rounded-pill tag px-2"
                            >
                              English
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className={sports_showButton ? "d-none" : ""} />

          <div
            className={"show-more-btn " + (!sports_showButton ? "d-none" : "")}
          >
            <button
              class="btn d-inline-block  color-primary p-1 px-2 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sport_collapse"
              aria-expanded="false"
              aria-controls="sport_collapse"
              onClick={() => {
                setsports_showButton(false);
              }}
            >
              Show more<i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
    </main>
  );
}

export default HomeBody;
