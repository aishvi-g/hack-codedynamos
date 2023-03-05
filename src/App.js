import Layout from "./components/Layout/Layout";
import KommunicateChat from "./chat.js";
import BannerImage from "./assets/images/bg_mars.jpg";

function App() {
  return <Layout />;
  <div className="bot" style={{ backgroundImage:`url(${BannerImage})`, backgroundRepeat:"no-repeat", backgroundSize: "cover"}}><KommunicateChat/></div>
}

export default App;
