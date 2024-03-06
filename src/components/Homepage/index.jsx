import Main from "../Main";
import Sidebar from "../Sidebar";
import "./style.css";

function Homepage() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Homepage;
