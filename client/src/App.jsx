import { Navigate, useLocation } from "react-router-dom/dist";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function RequireAuth(props) {
  let location = useLocation();
  const access = cookies.get("accessToken");
  const refresh = cookies.get("refreshToken");
  if (!access || !refresh) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props?.children;
}

function LoggedIn(props) {
  const access = cookies.get("accessToken");
  const refresh = cookies.get("refreshToken");
  if (access && refresh) {
    return <Navigate to="/dashboard" />;
  }

  return props?.children;
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route
            path="/register"
            element={
              <LoggedIn>
                <Register />
              </LoggedIn>
            }
          />
          <Route
            path="/login"
            element={
              <LoggedIn>
                <Login />
              </LoggedIn>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
