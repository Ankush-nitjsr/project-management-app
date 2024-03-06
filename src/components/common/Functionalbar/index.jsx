import FunctionalButton from "../FunctionalButton";
import "./style.css";
import { PiDiamondsFour } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaSortNumericDownSolid } from "react-icons/lia";
import { TbAdjustmentsHorizontal, TbDatabaseImport } from "react-icons/tb";
import { FaRegSquarePlus } from "react-icons/fa6";

function Functionalbar() {
  return (
    <div className="functionalbar">
      <div className="filter-section">
        <FunctionalButton
          buttonIcon={<PiDiamondsFour />}
          buttonName={"All brands"}
          dropIcon={<IoMdArrowDropdown />}
        />
        <FunctionalButton
          buttonName={"Desk"}
          dropIcon={<IoMdArrowDropdown />}
        />
        <FunctionalButton
          buttonName={"Tags"}
          dropIcon={<IoMdArrowDropdown />}
        />
        <FunctionalButton
          buttonIcon={<LiaSortNumericDownSolid />}
          buttonName={"Sort"}
        />
        <FunctionalButton
          buttonIcon={<TbAdjustmentsHorizontal />}
          buttonName={"Filter"}
        />
      </div>
      <div className="function-section">
        <FunctionalButton
          buttonIcon={<FaRegSquarePlus />}
          buttonName={"Meeting"}
        />
        <FunctionalButton
          buttonIcon={<TbDatabaseImport />}
          buttonName={"Import/Export"}
        />
      </div>
    </div>
  );
}

export default Functionalbar;
