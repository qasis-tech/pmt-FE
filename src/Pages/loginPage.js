import React, { useState } from "react";
import UserImage from "../Assests/users.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faBatteryHalf,
} from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div class="container mt-lg-5">
      <div class="row">
        <div class="col-md-6">
          <div class="maintext">
            <h1>Login Now</h1>
          </div>
        </div>

        <div class="col-md-6">
          <div class="image-wrapper mb-3">
            <img src={UserImage} alt="image" />
          </div>

          <form>
            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            {email}
            <div class="links">
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />

                <label class="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <div class="form-check mb-3">
                <a href="forgotpassword.html">Forgot password?</a>
              </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <button type="button" class="btn btn-success">
                Login
              </button>
            </div>
            <div class="form-check mb-3 back mt-3">
              <a href="registration.html">Create new account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
