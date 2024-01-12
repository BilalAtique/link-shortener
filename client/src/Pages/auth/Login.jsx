import { Link } from "react-router-dom/dist";
import dark from "../../assets/dark.svg";
import { useState } from "react";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log(res);
  };

  return (
    <div className="flex h-screen">
      {/* <!-- Left Pane --> */}

      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-700 text-black">
        <div className="max-w-md text-center"></div>
        <img src={dark} alt="image" />
      </div>

      {/* <!-- Right Pane --> */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Sign In
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Login to transform your lengthy links{" "}
          </h1>

          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>With email</p>
          </div>
          <form
            action="#"
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-4"
          >
            {/* <!-- Your form elements go here --> */}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Dont have an account?{" "}
              <Link to="/register" className="text-black hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
