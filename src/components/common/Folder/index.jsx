import { useState } from "react";
import "./style.css";
import { FaRegFolder } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Folder({ folderName }) {
  const [displaySubfolders, setDisplaySubfolders] = useState(false);

  const handleClick = () => {
    setDisplaySubfolders(!displaySubfolders);
  };

  return (
    <>
      <div className="folder">
        <div className="title">
          <FaRegFolder />
          <p>{folderName}</p>
        </div>
        <IoMdArrowDropdown onClick={handleClick} />
      </div>
      {displaySubfolders && (
        <div className="subfolderlist">
          <ul>
            <li>Roadmap</li>
            <li>Feedback</li>
            <li>Performance</li>
            <li>Team</li>
            <li>Analytics</li>
            <li>Add new sub</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Folder;
