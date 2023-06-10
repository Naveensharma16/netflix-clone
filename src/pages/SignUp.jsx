import React, { useState } from "react";
import Logo from "../components/Logo";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="signin-background">
      <Logo />
      <div className="signup-form auth-form-container">
        <h1>Sign-Up</h1>
        <form>
          <input
            type="email"
            placeholder="email address"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Set password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Re-enter password"
            value={newUser.confirmPassword}
            onChange={(e) =>
              setNewUser({ ...newUser, confirmPassword: e.target.value })
            }
          />
          <input type="submit" value="Sign-up" />
        </form>

        <div className="existing-user-link">
          <p>
            Already have an account? <a href="#"> Sign-in now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
