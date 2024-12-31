import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("idUser");
    e.preventDefault();
    navigate("/show-message");
  };
  return (
    <div className="logout">
      <h2 className="title-logout">Are you sure you want to Logout?</h2>
      <form>
        <button onClick={(e) => handleLogout(e)}>Logout</button>
      </form>
    </div>
  );
};

export default Logout;
