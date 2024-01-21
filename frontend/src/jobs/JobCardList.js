import React from "react";
import JobCard from "./JobCard";
import "./JobCardList.css";
/* Renders list of job cards
JobList and ComapnyDetail both utilize this
apply function prop is called by JobCard when applied
 */
function JobCardList({ jobs, apply }) {

  return (
      <div className="JobCardList">
        {jobs.map(job => (
            <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                equity={job.equity}
                salary={job.salary}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobCardList;