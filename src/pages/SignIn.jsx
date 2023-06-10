import React, { useState } from "react";
import Logo from "../components/Logo";

const SignIn = () => {
  const [logUser, setLogUser] = useState({ email: "", password: "" });

  return (
    <div className="signin-background">
      <Logo />
      <div className="signup-form auth-form-container">
        <h1>Sign-in</h1>
        <form>
          <input
            type="email"
            placeholder="email address"
            value={logUser.email}
            onChange={(e) => setLogUser({ ...logUser, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={logUser.password}
            onChange={(e) =>
              setLogUser({ ...logUser, password: e.target.value })
            }
          />
          <p className="forgot-pass-link">
            <a href="">Forgot Password?</a>
          </p>
          <input type="submit" value="Sign-in" />
        </form>

        <div className="existing-user-link">
          <p>
            Don’t have an account? <a href="#"> Sign-up now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
