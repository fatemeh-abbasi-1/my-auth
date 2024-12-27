import React from "react";
import { Link } from "react-router-dom";

const ShowMessage = () => {
  return (
    <>
      <h1 style={{ marginBottom: "1rem" }}>You have logged out!</h1>
      <Link to={"/register"} style={{ marginBottom: "1rem" }}>
        Go to register
      </Link>
      <Link to={"/login"}>Go to login</Link>
    </>
  );
};

export default ShowMessage;
