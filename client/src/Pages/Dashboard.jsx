import Header from "../components/Header";
import UrlInput from "../components/UrlInput";
import UrlDisplay from "../components/UrlDisplay";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <h1 className="text-4xl md:text-7xl my-10 font-bold mb-6 text-teal-400 drop-shadow-lg text-center">
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
