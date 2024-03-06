import "./style.css";
import FunctionalButton from "../FunctionalButton";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Footerbar() {
  return (
    <div className="footerbar">
      <FunctionalButton
        buttonIcon={<TbSquareRoundedNumber3Filled />}
        buttonName={"Selected"}
      />
      <FunctionalButton
        buttonIcon={<IoArchiveOutline />}
        buttonName={"Archive"}
      />
      <FunctionalButton
        buttonIcon={<MdOutlineDelete />}
        buttonName={"Delete"}
      />
      <FunctionalButton buttonName={"More"} dropIcon={<IoMdArrowDropdown />} />
      <FunctionalButton buttonIcon={<RxCross2 />} />
    </div>
  );
}

export default Footerbar;
