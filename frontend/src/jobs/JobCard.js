import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import "./JobCard.css";

/* Shows some info on job in a card in a list after being rendered by jobList */
function JobCard({ id, title, salary, equity, companyName }) {
  let { hasAppliedToJob, applyToJob } = useContext(UserContext);
  let [applied, setApplied] = useState();

  React.useEffect(
    function updateAppliedStatus() {
      setApplied(hasAppliedToJob(id));
    },
    [id, hasAppliedToJob]
  );

  /* Applies to job */
  async function handleApply(e) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div className="JobCard card">
      {" "}
      {applied}
      <div className="card-body">
        <h6 className="title"><b>{title.toUpperCase()}</b></h6>
        <hr></hr>
        <div className="companyName">{companyName}</div>
        
        {salary && <div className="salary">Salary: ${salary || "N/A"}</div>}
        {equity !== undefined && <div className="equity">Equity: {equity || "N/A"}</div>}
        <button className="btn5" onClick={handleApply} disabled={applied}
        style={{backgroundColor: applied ? "#8dc9a4" : "#2b622c"}}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;