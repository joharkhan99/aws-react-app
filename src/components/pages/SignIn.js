import React from "react";
import "../../css/auth.css";
function SignIn() {
  return (
    <div className="container-fluid signup">
      <div className="row">
        <div className="col-sm-6 col-md-6 bg-white col-lg-6 col-xl-6">
          <div className="d-flex justify-content-center align-items-center flex-column p-3">
            <div className="text-size-14 text-end w-100 mb-2 text-secondary">
              Already have an account
              <a href="sa" className="text-decoration-none mx-2">
                Sign Up
              </a>
            </div>
            <div className="signup-form p-5 pb-0">
              <h3 className="text-secondary pb-4">Create new account</h3>
              <form>
                <div class="input-group mb-2">
                  <span class="input-group-text border-0" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control shadow-none p-3 rounded-1"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
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
export default SignIn;
