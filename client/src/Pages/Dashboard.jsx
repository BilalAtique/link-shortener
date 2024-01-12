import Header from "../components/Header";
import UrlInput from "../components/UrlInput";
import UrlDisplay from "../components/UrlDisplay";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Url Input */}
      <UrlInput />

      {/* Url Display */}
      <UrlDisplay />
    </div>
  );
};

export default Dashboard;
