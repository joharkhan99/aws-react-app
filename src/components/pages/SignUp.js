import React from "react";
import "../../css/auth.css";
function SignUp() {
  return (
    <div className="container-fluid signup">
      <div className="row">
        <div className="col-sm-6 col-md-6 bg-white col-lg-6 col-xl-6">
          <div className="d-flex justify-content-center align-items-center flex-column p-3">
            <div className="text-size-14 text-end w-100 mb-2 text-secondary">
              Already have an account
              <a href="sa" className="text-decoration-none mx-2">
                Log In
              </a>
            </div>
            <div className="signup-form p-5 pb-0">
              <h3 className="text-secondary pb-4">Create new account</h3>
              <form>
                <div className="p-0 row mb-2">
                  <div className="col">
                    <label for="f-name" class="form-label">
                      First Name <span className="req-icon">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none p-3 rounded-1"
                      id="f-name"
                    />
                  </div>
                  <div className="col">
                    <label for="l-name" class="form-label">
                      Last Name <span className="req-icon">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control shadow-none p-3 rounded-1"
                      id="l-name"
                    />
                  </div>
                </div>

                <div class="mb-2">
                  <label for="email" class="form-label">
                    Your email <span className="req-icon">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control shadow-none p-3 rounded-1"
                    id="email"
                  />
                </div>

                <div class="mb-2">
                  <label for="phone" class="form-label">
                    Phone number <span className="req-icon">*</span>
                  </label>
                  <input
                    type="tel"
                    class="form-control shadow-none p-3 rounded-1"
                    id="phone"
                  />
                </div>

                <div className="p-0 row mb-2">
                  <div className="col">
                    <label for="f-name" class="form-label">
                      Country <span className="req-icon">*</span>
                    </label>
                    <select
                      class="form-select shadow-none p-3 rounded-1"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col">
                    <label for="l-name" class="form-label">
                      City <span className="req-icon">*</span>
                    </label>
                    <select
                      class="form-select shadow-none p-3 rounded-1"
                      aria-label="Default select example"
                    >
                      <option selected>Madrid</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div class="mb-2">
                  <label for="password" class="form-label">
                    Password <span className="req-icon">*</span>
                  </label>
                  <input
                    type="password"
                    class="form-control shadow-none p-3 rounded-1"
                    id="password"
                  />
                </div>

                <div class="mb-4">
                  <label for="password2" class="form-label">
                    Retype Password <span className="req-icon">*</span>
                  </label>
                  <input
                    type="password2"
                    class="form-control shadow-none p-3 rounded-1"
                    id="password"
                  />
                </div>

                <div class="mb-2 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    I agree to all the Terms and Conditions
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary w-100 shadow-none p-3 rounded-1"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="signp-bg col-sm-6 col-md-6 col-lg-6 col-xl-6"></div>
      </div>
    </div>
  );
}
export default SignUp;
