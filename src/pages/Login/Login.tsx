/* eslint-disable react-hooks/exhaustive-deps */
import { useState, SyntheticEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/auth/authActions";
import { CLEAR_LOGIN_ERROR } from "../../redux/auth/authTypes";
import "./Login.css";
import Button from "../../components/button/Button";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const { loading, loginerror } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setUserName(localStorage.getItem("email") || "");
    dispatch({ type: CLEAR_LOGIN_ERROR });
  }, []);

  const submitForm = async (e: SyntheticEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      e.currentTarget.classList.add("was-validated");
      if (!e.currentTarget.checkValidity()) return;
      dispatch(login({ usernameOrEmail: username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <div className="text-primary-blue fw-bold mb-2 display-3 p-2">
          Login
        </div>

        <div className="bg-white login-form-card mx-auto d-flex justify-content-center align-items-center">
          <form
            noValidate
            onSubmit={submitForm}
            className="login-form w-75 mx-auto"
            autoComplete="off"
          >
            <div className="font-12 fw-bold text-center text-danger mb-5">
              {loginerror}
            </div>
            <div
              className="form-group position-relative"
              style={{ marginBottom: "28px" }}
            >
              <input
                type="email"
                value={username}
                name="username"
                id="username"
                className="form-control login-input w-100"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label
                htmlFor="username"
                className="text-gray-one login-label position-absolute font-12"
              >
                Email Address
              </label>
              <small className="invalid-feedback font-12">
                A valid email is required
              </small>
            </div>
            <div className="form-group position-relative">
              <input
                type="password"
                value={password}
                name="password"
                id="password"
                minLength={4}
                className="form-control login-input w-100"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="password"
                className="text-gray-one login-label position-absolute font-12"
              >
                Password
              </label>
              <small className="invalid-feedback font-12">
                password must be aleast 4 characters long
              </small>
            </div>
            <div className="form-group d-flex justify-content-center">
              <Button
                type="submit"
                className="bg-primary-blue text-white login-btn"
                disabled={loading || !username || password.length < 4}
              >
                Login{" "}
                <span>
                  {loading && (
                    <i className="fas fa-spinner ms-2 fa-pulse text-white"></i>
                  )}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
