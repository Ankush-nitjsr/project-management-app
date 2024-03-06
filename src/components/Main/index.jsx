import DetailsSection from "../common/DetailsSection";
import Functionalbar from "../common/Functionalbar";
import Topbar from "../common/Topbar";
import "./style.css";

function Main() {
  return (
    <div className="main">
      <Topbar title={"Products"} />
      <Functionalbar />
      <DetailsSection />
    </div>
  );
}

export default Main;
