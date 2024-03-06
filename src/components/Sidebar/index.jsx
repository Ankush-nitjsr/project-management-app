import Folder from "../common/Folder";
import Team from "../common/Team";
import "./style.css";
import {
  GrAnchor,
  GrAnnounce,
  GrAndroid,
  GrDuplicate,
  GrUserAdd,
  GrValidate,
} from "react-icons/gr";

import { RiNumber7 } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <div className="title">
          <img src="../../../src/images/title-icon-img.png" alt="title icon" />
          <div className="title-name">
            <p style={{ color: "var(--grey)", fontWeight: "800" }}>INC</p>
            <p style={{ fontWeight: "900" }}>InnovateHub</p>
          </div>
        </div>
        <div className="profile-pic">
          <img
            src="../../../src/images/My_pic.jpg"
            alt="User profile picture"
          />
        </div>
      </header>
      <main>
        <section className="teams">
          <Team
            teamIcon={<GrAnchor />}
            teamTitle={"Design Team"}
            teamCount={1}
          />
          <Team
            teamIcon={<GrAnnounce />}
            teamTitle={"Marketing Team"}
            teamCount={2}
          />
          <Team
            teamIcon={<GrAndroid />}
            teamTitle={"Development Team"}
            teamCount={3}
          />
          <Team teamIcon={<GrDuplicate />} teamTitle={"Create a Team"} />
        </section>
        <section className="folders">
          <h3>FOLDERS</h3>
          <Folder folderName={"Products"} />
          <Folder folderName={"Sales"} />
          <Folder folderName={"Design"} />
          <Folder folderName={"Office"} />
          <Folder folderName={"Legal"} />
        </section>
      </main>
      <footer>
        <Team teamIcon={<GrUserAdd />} teamTitle={"Invite teammates"} />
        <Team
          teamIcon={<GrValidate />}
          teamTitle={"Help and first steps"}
          teamCount={2}
        />
        <Team
          teamIcon={<RiNumber7 />}
          teamTitle={"days left on trial"}
          teamCount={0}
        />
      </footer>
    </div>
  );
}

export default Sidebar;
