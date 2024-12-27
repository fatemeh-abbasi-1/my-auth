import Register from "./component/Register";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Home from "./component/Home";
import ShowMessage from "./component/ShowMessage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function App() {
  const { userId } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            userId ? <Navigate to={"/home"} /> : <Navigate to={"/register"} />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/show-message" element={<ShowMessage />} />
      </Routes>
    </div>
  );
}

export default App;
