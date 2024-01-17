import { useMutation } from "@tanstack/react-query";
import logo from "../assets/logo.png";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data?.message);
    }
  };

  const { mutate: login, isPending: loading } = useMutation({
    mutationFn: handleSubmit,
    onSuccess: async () => {
      cookies.remove("accessToken");
      cookies.remove("refreshToken");
      navigate("/login");
    },
    onError: async (error) => {
      toast.error(error?.message || "Something went wrong while logging out");
    },
    onSettled: () => {},
  });

  return (
    <header className="flex items-center justify-center h-[7vh] text-white px-4 shadow-xl shadow-gray-800">
      <img src={logo} alt="logo" className="w-24 h-12" />
      <nav className="w-[100%]">
        <ul className="flex px-7 justify-end">
          {/* <li className="px-4 text-xl font-bold">Home</li> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <button
              type="submit"
              className="shadow-xl bg-black py-2 rounded-full hover:bg-gray-900"
              disabled={loading}
            >
              <li className="px-4 text-xl font-bold">Log Out</li>
            </button>
          </form>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
