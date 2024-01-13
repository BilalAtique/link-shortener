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

      <div className="hidden lg:flex items-center justify-center flex-1 bg-gradient-to-r from-teal-950 to-purple-950">
        <img src={dark} alt="dark" />
      </div>

      {/* <!-- Right Pane --> */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-950 to-pink-950 shadow-2xl shadow-gray-950">
        <div className="max-w-md w-full p-7">
          <h1 className="text-7xl my-10 font-bold mb-6 text-teal-700 drop-shadow-lg text-center">
            SwiftShrink
          </h1>
          <h1 className="text-3xl font-bold mb-3 text-white text-center">
            Sign In
          </h1>
          <h1 className="text-xl mb-6 text-white text-center">
            Login to transform your lengthy links{" "}
          </h1>

          <form
            action="#"
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-4"
          >
            {/* Your form elements go here */}

            <div>
              <label
                htmlFor="email"
                className="block font-bold text-lg text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full bg-slate-900 text-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-bold text-lg text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full bg-slate-900 text-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full mt-6 bg-slate-900 text-white font-bold text-lg p-2 rounded-md hover:bg-gray-900 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-6 font-bold text-sm text-white text-center">
            <p>
              Dont have an account?{" "}
              <Link
                to="/register"
                className="hover:underline text-purple-400 text-lg"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
