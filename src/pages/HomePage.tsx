import Header from "../components/Header.jsx";
import Body from "./Body.js";

const HomePage = () => {
  return (
    <div className="w-full bg-gray-200 h-screen flex flex-col gap-5 py-8">
      <Header />
      <Body />
    </div>
  );
};

export default HomePage;
