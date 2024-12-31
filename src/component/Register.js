import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { userRef, USER_REGEX, PWD_REGEX } = useAuth();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [vaidUser, setVaidUser] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validConfirm, setValidConfirm] = useState(false);

  const [userFocus, setUserFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);
  const [errRegister, setErrRegister] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setVaidUser(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidConfirm(pwd === confirmPwd);
  }, [pwd, confirmPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vaidUser && validPwd && validConfirm) {
      navigate("/home");
      const id = Math.random();
      localStorage.setItem("idUser", JSON.stringify(id));
      setUser("");
      setPwd("");
      setConfirmPwd("");
    } else {
      setErrRegister(true);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form>
        <div className="container-input-help">
          <input
            ref={userRef}
            type="text"
            placeholder="User Name"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            className={
              vaidUser
                ? " border-green"
                : errRegister && !vaidUser
                ? "show-err"
                : ""
            }
            aria-describedby="uidnote"
            value={user}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p className={!vaidUser && userFocus && user ? "show" : "hide"}>
            4 to 24 characters. Must begin with a letter. Letters, numbers,
            underscores, hyphens allowed.
          </p>
        </div>

        <div className="container-input-help">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            className={
              validPwd
                ? " border-green"
                : errRegister && !validPwd
                ? "show-err"
                : ""
            }
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            value={pwd}
          />
          <p className={!validPwd && pwdFocus && pwd ? "show" : "hide"}>
            8 to 24 characters. Must include uppercase and lowercase letters, a
            number and a special character. Allowed special characters:
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span>
            <span aria-label="percent">%</span>
          </p>
        </div>

        <div className="container-input-help">
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            className={
              validConfirm && confirmFocus && confirmPwd
                ? "border-green"
                : errRegister && !confirmPwd
                ? "show-err"
                : ""
            }
            onFocus={() => setConfirmFocus(true)}
            onBlur={() => setConfirmFocus(false)}
          />
          <p
            id="confirmnote"
            className={!validConfirm && confirmFocus ? "show" : "hide"}
          >
            Must match the first password input field.
          </p>
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          disabled={vaidUser && validPwd && validConfirm ? false : true}
        >
          Sign Up
        </button>
      </form>
      <p className="help-text">
        Already registered?
        <br />
        <span>
          <Link to="/login">Sign In</Link>
        </span>
      </p>
    </section>
  );
};

export default Register;
