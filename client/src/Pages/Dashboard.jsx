import Header from "../components/Header";
import UrlInput from "../components/UrlInput";
import UrlDisplay from "../components/UrlDisplay";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-purple-950 to-pink-950">
      {/* Header */}
      <Header />

      <h1 className="text-7xl my-10 font-bold mb-6 text-teal-700 drop-shadow-lg text-center">
        SwiftShrink
      </h1>

      {/* Url Input */}
      <UrlInput />

      {/* Url Display */}
      <UrlDisplay />
    </div>
  );
};

export default Dashboard;
