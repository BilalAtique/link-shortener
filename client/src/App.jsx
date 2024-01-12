import { Navigate } from "react-router-dom/dist";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function Auth() {
  return <Navigate to="/login" />;
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Auth>
                {" "}
                <h1>Hello</h1>{" "}
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
