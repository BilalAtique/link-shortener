import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-[7vh] text-white px-4 shadow-xl shadow-gray-800">
      <img src={logo} alt="logo" className="w-24 h-12" />
      <nav className="w-[100%]">
        <ul className="flex px-7 justify-end">
          <li className="px-4 text-xl font-bold">Home</li>
          <li className="px-4 text-xl font-bold">Log Out</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
