import "./style.css";
import { GrAppsRounded } from "react-icons/gr";

function Team({ teamIcon, teamTitle, teamCount }) {
  return (
    <div className="team">
      <div className="team-title">
        {teamIcon}
        <p>{teamTitle}</p>
      </div>
      {teamCount && (
        <div className="team-count">
          <button>
            <GrAppsRounded />+{teamCount}
          </button>
        </div>
      )}
    </div>
  );
}

export default Team;
