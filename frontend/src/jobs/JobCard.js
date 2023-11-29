import React, { useContext, useState } from "react";
//import "./JobCard.css";
import UserContext from "../auth/UserContext";

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
        <h6 className="card-title">{title}</h6>
        <p>{companyName}</p>
        {salary && <div>Salary: {salary}</div>}
        {equity !== undefined && <div>Equity: {equity}</div>}
        <button className="btn" onClick={handleApply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
