import Login from "./LoginForm/Login";
import Register from "./RgisterForm/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Link to="/" id="registerlink">
        <h>Register</h>
      </Link>
      <Link to="/Login" id="loginlink">
        Login
      </Link>
    </BrowserRouter>
  );
}

export default App;
