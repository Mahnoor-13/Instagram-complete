import "./App.css";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Context from "./Global/Context";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
function App() {
  return (
    <Context>
      <Navbar />
      <div className="container">
        <Stories />
        <Create />
        <Posts />
        <Sidebar />
      </div>
      <Model />
    </Context>
  );
}

export default App;
