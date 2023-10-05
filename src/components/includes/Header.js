import React, { useState } from "react";
function Header() {
  var [DropMenu, SetDropMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg text-white justify-content-evenly sticky-top">
      <div className="container-fluid">
        {/* left menu */}
        <div className="d-flex justify-content-between align-items-center gap-2">
          <a className="navbar-brand p-0" href="#s">
            <img src={require("../../assets/logo1.png")} alt="logo" />
          </a>
          <a
            className="text-smoke-white fw-600 text-decoration-none hover-text-primary"
            href="#s"
          >
            Browse
          </a>

          <button
            className="border-0 dots-menu rounded-1 mx-2 off-white dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>

          <div
            class="dropdown-menu popup-menu position-absolute rounded bg-transparent p-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <ul className="m-0 p-0 list-unstyled p-3 text-size-13 rounded">
              <label className="fw-600 mb-1 p-1">GENERAL</label>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  About
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Advertisers
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Blog
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Loot Cave - Merch Store
                </a>
              </li>
              <hr />
              <label className="fw-600 mb-1 p-1">HELP & LEGAL</label>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Accessibility Statement
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Ad Choices
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Community Guidelines
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Cookie Policy
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Security
                </a>
              </li>
              <hr />

              <label className="fw-600 mb-1 p-1">GENERAL</label>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  About
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Advertisers
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Blog
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Loot Cave - Merch Store
                </a>
              </li>
              <hr />
              <label className="fw-600 mb-1 p-1">HELP & LEGAL</label>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Accessibility Statement
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Ad Choices
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Community Guidelines
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Cookie Policy
                </a>
              </li>
              <li className=" p-1 py-1 rounded-1">
                <a href="#r" className="text-decoration-none off-white d-block">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* center menu */}
        <div className="search-bar">
          <div className="input-group">
            <input
              type="text"
              className="form-control m-0 text-size-13 input-dark text-white"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <i
              className="fa-solid fa-magnifying-glass input-group-text p-2 off-white border-0"
              id="basic-addon1"
            ></i>
          </div>
        </div>

        {/* right menu */}
        <div className="text-size-13 top-right-menu">
          <button className="border-0 dots-menu rounded-1 off-white p-1 mx-2">
            <i className="fas fa-crown"></i>
          </button>
          <button
            className="border-0 fw-600 p-1 px-2 dark-btn hover1 mx-2 rounded-1 off-white"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Login
          </button>
          <button
            className="border-0 fw-600 p-1 px-2 bg-primary2 hover1 mx-2 rounded-1 off-white"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Sign Up
          </button>
          <button className="border-0 dots-menu rounded-1 off-white p-1 mx-2">
            <i className="fa-regular fa-user"></i>
          </button>
        </div>

        {/* login/signup */}

        <div
          className="modal fade"
          id="authModal"
          tabIndex="-1"
          aria-labelledby="authModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable p-2">
            <div className="modal-content py-3 bg-dark overflow-visible rounded-2">
              <button
                type="button"
                className="btn-close border-0 dots-menu rounded-1 position-absolute shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div className="modal-header d-flex justify-content-center align-items-center p-0 py-2 border-0">
                <img
                  src={require("../../assets/logo1.png")}
                  alt="logo"
                  style={{ width: "40px" }}
                />
                <h5 className="d-inline-block fw-normal px-1 m-0">
                  Log in to Swapten
                </h5>
              </div>
              <div className="modal-body p-3">
                <ul
                  class="nav nav-tabs border-0  nav-tabs-02 justify-content-start mb-4"
                  id="home-6_tabs"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link px-2 border-0 py-1 off-white text-size-13 off-white active"
                      id="h3_tabnav_1 bg-transparent"
                      data-bs-toggle="tab"
                      data-bs-target="#h6_tab_1"
                      type="button"
                      role="tab"
                      aria-controls="h6_tab_1"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Login
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link px-2 bg-transparent border-0 py-1 fw-normal text-size-13 off-white"
                      id="h3_tabnav_2"
                      data-bs-toggle="tab"
                      data-bs-target="#h6_tab_2"
                      type="button"
                      role="tab"
                      aria-controls="h6_tab_2"
                      aria-selected="true"
                    >
                      Sign Up
                    </button>
                  </li>
                </ul>

                <div class="tab-content" id="home-6_tabsContent">
                  <div
                    class="tab-pane fade active show"
                    id="h6_tab_1"
                    role="tabpanel"
                    aria-labelledby="h3_tabnav_1"
                  >
                    <form action="#">
                      <div className="mb-3">
                        <label
                          form="username"
                          className="text-size-13 off-white mb-1"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                        />
                      </div>
                      <div className="mb-1">
                        <label
                          form="password"
                          className="text-size-13 off-white mb-1"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          id="password"
                          name="password"
                          class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                        />
                      </div>
                      <div className="mb-3">
                        <a
                          href="#er"
                          className="text-size-13 color-primary  text-decoration-none"
                        >
                          Trouble logging in?
                        </a>
                      </div>
                      <div>
                        <button
                          className="border-0 p-1 px-2 bg-primary2 hover1 rounded-1 off-white d-block w-100"
                          style={{ fontSize: "14px" }}
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="h6_tab_2"
                    role="tabpanel"
                    aria-labelledby="h3_tabnav_2"
                  >
                    <form action="#">
                      <div className="mb-3">
                        <label
                          form="username"
                          className="text-size-13 off-white mb-1"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          form="password"
                          className="text-size-13 off-white mb-1"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          id="password"
                          name="password"
                          class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          form="cnfrm_password"
                          className="text-size-13 off-white mb-1"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          id="cnfrm_password"
                          name="cnfrm_password"
                          class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          form="cnfrm_password"
                          className="text-size-13 off-white mb-1"
                        >
                          Date of Birth
                        </label>

                        <div className="row m-0 p-0">
                          <div className="p-1 col pl-0">
                            <input
                              type="text"
                              id="cnfrm_password"
                              name="cnfrm_password"
                              class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                              placeholder="Day"
                            />
                          </div>
                          <div className="p-1 col-5">
                            <select
                              type="text"
                              id="cnfrm_password"
                              name="cnfrm_password"
                              class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                              placeholder="Month"
                            >
                              <option selected value="">
                                Month
                              </option>
                              <option value="january">January</option>
                              <option value="december">December</option>
                            </select>
                          </div>
                          <div className="p-1 col pr-0">
                            <input
                              type="text"
                              id="cnfrm_password"
                              name="cnfrm_password"
                              class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                              placeholder="Year"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          form="cnfrm_password"
                          className="text-size-13 off-white mb-1"
                        >
                          Phone Number
                        </label>

                        <div className="row m-0 p-0">
                          <div className="p-1 col pl-0">
                            <select
                              type="text"
                              id="cnfrm_password"
                              name="cnfrm_password"
                              class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                              placeholder="Month"
                            >
                              <option selected value="">
                                United States +1
                              </option>
                              <option value="january">UK +98</option>
                              <option value="december">Japan +90</option>
                            </select>
                          </div>
                          <div className="p-1 col pr-0">
                            <input
                              type="text"
                              id="cnfrm_password"
                              name="cnfrm_password"
                              class="p-1 px-2 form-control m-0 text-size-13 input-dark text-white"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          className="border-0 p-1 px-2 bg-primary2 hover1 rounded-1 off-white d-block w-100"
                          style={{ fontSize: "14px" }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* login/signup */}
      </div>
    </nav>
  );
}
export default Header;
