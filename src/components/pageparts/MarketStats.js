import React from "react";
function MarketStats() {
  return (
    <div className="market-stats p-1">
      <h2 class="text-size-13 fw-600 m-0 my-3 mt-0">
        <i class="fa-solid fa-chart-line px-2 text-success text-size-16"></i>
        MARKET TRENDS
      </h2>
      <ul
        class="nav nav-tabs nav-tabs-02 justify-content-between p-0 d-flex gap-1 text-size-12 pb-0 custom-border"
        role="tablist"
      >
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600  active"
            id="h3_tabnav_1"
            data-bs-toggle="tab"
            data-bs-target="#fav_tab"
            type="button"
            role="tab"
            aria-controls="fav_tab"
            aria-selected="false"
            tabindex="-1"
          >
            <i
              class="fa-solid fa-star"
              style={{ paddingRight: "2px", color: "#ffbc00" }}
            ></i>
            FAV
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_2"
            data-bs-toggle="tab"
            data-bs-target="#hot_tab"
            type="button"
            role="tab"
            aria-controls="hot_tab"
            aria-selected="false"
            tabindex="-1"
          >
            <i
              class="fa-solid fa-fire"
              style={{
                paddingRight: "2px",
                color: "red",
              }}
            ></i>
            HOT
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_3"
            data-bs-toggle="tab"
            data-bs-target="#sen_tab"
            type="button"
            role="tab"
            aria-controls="sen_tab"
            aria-selected="true"
          >
            SEN
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_4"
            data-bs-toggle="tab"
            data-bs-target="#fx_tab"
            type="button"
            role="tab"
            aria-controls="fx_tab"
            aria-selected="false"
            tabindex="-1"
          >
            FX
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_4"
            data-bs-toggle="tab"
            data-bs-target="#ind_tab"
            type="button"
            role="tab"
            aria-controls="ind_tab"
            aria-selected="false"
            tabindex="-1"
          >
            IND
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_4"
            data-bs-toggle="tab"
            data-bs-target="#cmd_tab"
            type="button"
            role="tab"
            aria-controls="cmd_tab"
            aria-selected="false"
            tabindex="-1"
          >
            CMD
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_4"
            data-bs-toggle="tab"
            data-bs-target="#crt_tab"
            type="button"
            role="tab"
            aria-controls="crt_tab"
            aria-selected="false"
            tabindex="-1"
          >
            CRT
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_4"
            data-bs-toggle="tab"
            data-bs-target="#stc_tab"
            type="button"
            role="tab"
            aria-controls="stc_tab"
            aria-selected="false"
            tabindex="-1"
          >
            STC
          </button>
        </li>
        <li class="nav-item m-0 p-0" role="presentation">
          <button
            class="nav-link border-0 p-0 m-0 rounded off-white fw-600"
            id="h3_tabnav_4"
            data-bs-toggle="tab"
            data-bs-target="#etf_tab"
            type="button"
            role="tab"
            aria-controls="etf_tab"
            aria-selected="false"
            tabindex="-1"
          >
            ETF
          </button>
        </li>
      </ul>

      <div class="icon-input position-relative my-2 mb-0 px-1">
        <input
          type="text"
          class="form-control m-0 text-size-13 input-dark text-white chat-input-box rounded-1 p-1"
          placeholder="Search"
        />
        <button class="rounded-1 top-25 text-center top-2 right-6">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div class="tab-content m-0" id="mark-stat-content">
        <div
          class="tab-pane fade active show"
          id="fav_tab"
          role="tabpanel"
          aria-labelledby="fav_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="hot_tab"
          role="tabpanel"
          aria-labelledby="hot_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="sen_tab"
          role="tabpanel"
          aria-labelledby="sen_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="fx_tab"
          role="tabpanel"
          aria-labelledby="fx_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="ind_tab"
          role="tabpanel"
          aria-labelledby="ind_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="cmd_tab"
          role="tabpanel"
          aria-labelledby="cmd_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="crt_tab"
          role="tabpanel"
          aria-labelledby="crt_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="stc_tab"
          role="tabpanel"
          aria-labelledby="stc_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="etf_tab"
          role="tabpanel"
          aria-labelledby="etf_tab"
        >
          <table class="table text-size-11 off-white border-0">
            <thead>
              <tr className="text-center">
                <th scope="col" className="fw-lighter gray-color">
                  SIMBOLO
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  CAMBIO(1D)
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  OFERTA
                </th>
                <th scope="col" className="fw-lighter gray-color">
                  DEMANDA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">VIX</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">NATGAS</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">ITA40</td>
                <td className="text-center text-danger">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">US30</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
              <tr>
                <td className="fw-600">BITCOIN</td>
                <td className="text-center text-success">-2.76%</td>
                <td className="text-center">23.29</td>
                <td className="text-center">23.47</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default MarketStats;
