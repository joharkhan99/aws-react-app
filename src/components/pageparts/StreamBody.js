import React, { useState } from "react";

function StreamBody() {
  return (
    <main className="p-0">
      <div class="container-fluid p-0 w-100">
        <div>
          <div className="w-100">
            <div className="stream-video border-bottom border-custom-color position-relative">
              <span className="live-tag">LIVE</span>
            </div>

            <div className="streamer-details p-3 pt-2">
              <div className="market-alerts mb-3">
                <div className="mark-alerts rounded-1 p-3 mb-2 text-size-13 off-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="alert-time">01:30</div>
                    <div className="alert-country d-flex align-items-center justify-content-center">
                      <img
                        style={{ width: "20px" }}
                        alt="United States"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                      />
                      <span className="px-1">USD</span>
                    </div>
                    <div className="alert-stars gray-color">
                      <i class="fa-solid fa-star grey-color"></i>
                      <i class="fa-solid fa-star grey-color"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <div className="alert-location">
                      GfK Consumer Confidence Index (Dec)
                    </div>
                    <div className="alert-current text-success">-42</div>
                    <div className="alert-forecast">-43</div>
                    <div className="alert-previous text-danger">-44</div>
                  </div>
                </div>
                <div className="mark-alerts rounded-1 p-3 mb-2 text-size-13 off-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="alert-time">01:30</div>
                    <div className="alert-country d-flex align-items-center justify-content-center">
                      <img
                        style={{ width: "20px" }}
                        alt="United States"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
                      />
                      <span className="px-1">JPY</span>
                    </div>
                    <div className="alert-stars gray-color">
                      <i class="fa-solid fa-star gray-color"></i>
                      <i class="fa-solid fa-star gray-color"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <div className="alert-location">
                      GfK Consumer Confidence Index (Dec)
                    </div>
                    <div className="alert-current text-success">-42</div>
                    <div className="alert-forecast">-43</div>
                    <div className="alert-previous text-danger">-44</div>
                  </div>
                </div>
              </div>

              <div className="streamer-header position-relative pt-3">
                <div className="streamer-btns">
                  <button className="border-0 fw-600 px-2 bg-primary2 hover1 rounded-1 off-white text-size-13">
                    <i
                      class="fa-regular fa-heart px-2"
                      style={{ fontSize: "16px" }}
                    ></i>
                    Follow
                  </button>
                  <button className="border-0 fw-600 px-2 dark-btn hover1 rounded-1 off-white text-size-13">
                    <i
                      class="fa-regular fa-star px-2"
                      style={{ fontSize: "16px" }}
                    ></i>
                    Subscribe
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="streamer-metadata">
                    <div className="d-flex align-items-start text-decoration-none off-white text-size-13 flex-nowrap mb-1">
                      <div className="card-image">
                        <a href="#we" className="position-relative d-block">
                          <img
                            className="rounded-circle border border-transparent w-100 h-100"
                            src="https://static-cdn.jtvnw.net/jtv_user_pictures/f04d2a14-8d63-4cd5-a469-7ec2cd6e5ce3-profile_image-70x70.png"
                            alt=""
                          />
                          <span className="live-tag">LIVE</span>
                        </a>
                      </div>
                      <div className="d-flex overflow-hidden w-100 justify-content-between">
                        <div className="mx-2">
                          <div className="streamer-name">
                            <a
                              className="off-white text-decoration-none fw-bold text-size-16"
                              href="as"
                            >
                              TenZ
                            </a>
                          </div>
                          <div className="streamer-title">
                            <h2 className="text-size-16 m-0 py-1 fw-bold">
                              100T Hiko | Gaming in the depths of Valorant
                              Ranked | @Hiko on Twitter
                            </h2>
                          </div>
                          <div className="streamer-tags mt-1">
                            <a
                              className="d-inline-block text-decoration-none color-primary"
                              href="as"
                            >
                              VALORANT
                            </a>
                            <a
                              href="as"
                              className="d-inline-block text-decoration-none rounded-pill tag px-2 mx-2"
                            >
                              English
                            </a>
                            <a
                              href="as"
                              className="d-inline-block text-decoration-none rounded-pill tag px-2 mx-2"
                            >
                              Gaming
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="streamer-views-cont">
                    <div className="d-flex flex-column">
                      <div className="d-flex text-size-13 gap-2 fw-normal flex-wrap justify-content-end">
                        <div className="views">
                          <i class="fa-regular fa-user"></i>
                          <span>16,157</span>
                        </div>
                        <div className="stream-time">
                          <span className="off-white">1:50:45</span>
                        </div>
                        <button
                          class="border-0 dots-menu rounded-1 off-white dropdown-toggle"
                          type="button"
                        >
                          <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </button>
                        <button
                          class="border-0 dots-menu rounded-1 off-white dropdown-toggle"
                          type="button"
                          id="stream-view-option"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>

                        <div
                          class="dropdown-menu rounded bg-dark p-0"
                          aria-labelledby="stream-view-option"
                        >
                          <ul className="m-0 p-0 list-unstyled p-3 text-size-13 rounded">
                            <li className=" p-1 py-1 rounded-1">
                              <a
                                href="#r"
                                className="text-decoration-none off-white d-block"
                              >
                                About
                              </a>
                            </li>
                            <li className=" p-1 py-1 rounded-1">
                              <a
                                href="#r"
                                className="text-decoration-none off-white d-block"
                              >
                                Advertisers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="streamer-bio off-white my-5 rounded p-5">
                <div className="d-flex ">
                  <div>
                    <h4 className="fw-bold">About TenZ</h4>
                    <span className="stream-catg text-decoration-none text-size-13">
                      <span className="off-white fw-600">1.8M</span> followers
                    </span>
                    <p className="text-size-13 m-0 mt-3">
                      My name is Spencer "Hiko" Martin, Content Creator for
                      100Thieves. Ex CSGO pro for teams Complexity, Cloud9,
                      Liquid. Business email: teamhiko@unitedtalent.com
                    </p>
                  </div>

                  <div className="text-size-13 fw-bold d-flex flex-column">
                    <div className="flex-wrap justify-content-end d-flex gap-3">
                      <div className="streamer-social-icon d-block w-100 text-start">
                        <a class="text-decoration-none" href="as">
                          <i class="fa-brands fa-twitter px-2 pl-0"></i>
                          <span>Twitter</span>
                        </a>
                      </div>
                      <div className="streamer-social-icon d-block w-100 text-start">
                        <a class="text-decoration-none" href="as">
                          <i class="fa-brands fa-facebook-f px-2 pl-0"></i>
                          Facebook
                        </a>
                      </div>
                      <div className="streamer-social-icon d-block w-100 text-start">
                        <a class="text-decoration-none" href="as">
                          <i class="fa-brands fa-discord px-2 pl-0"></i>
                          Discord
                        </a>
                      </div>
                      <div className="streamer-social-icon d-block w-100 text-start">
                        <a class="text-decoration-none" href="as">
                          <i class="fa-brands fa-instagram px-2 pl-0"></i>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="streamer-promo-detail">
                <a href="sd" className="mx-2 mb-3 d-inline-block">
                  <img
                    src="https://panels.twitch.tv/panel-26991127-image-28499885-715f-42d7-a96d-71a0268a5295"
                    alt=""
                  />
                </a>
                <a href="sd" className="mx-2 mb-3 d-inline-block">
                  <img
                    src="https://panels.twitch.tv/panel-26991127-image-a326dc3c-8ac9-4d32-9307-56f9e799314f"
                    alt=""
                  />
                </a>
                <a href="sd" className="mx-2 mb-3 d-inline-block">
                  <img
                    src="https://panels.twitch.tv/panel-26991127-image-018d4655-3a46-4b70-bb04-5dd5a8b908a6"
                    alt=""
                  />
                </a>
                <a href="sd" className="mx-2 mb-3 d-inline-block">
                  <img
                    src="https://panels.twitch.tv/panel-26991127-image-723ea737-b608-4098-a703-eadd8b00ee3a"
                    alt=""
                  />
                </a>
                <a href="sd" className="mx-2 mb-3 d-inline-block">
                  <img
                    src="https://panels.twitch.tv/panel-26991127-image-059d2886-27ef-4dde-90a7-1fc8571372f1"
                    alt=""
                  />
                </a>
                <a href="sd" className="mx-2 mb-3 d-inline-block">
                  <img
                    src="https://panels.twitch.tv/panel-26991127-image-c2088a15-73ce-484f-8b9c-7fd4ce86652d"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StreamBody;
