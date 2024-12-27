import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const showLogout = (e) => {
    e.preventDefault();
    navigate("/logout");
  };

  return (
    <>
      <h1 className="home">Welcome to the Home page</h1>
      <button className="btn-logout" onClick={(e) => showLogout(e)}>
        Logout
      </button>
    </>
  );
};

export default Home;