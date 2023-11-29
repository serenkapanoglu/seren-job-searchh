import React from "react";
import JobCard from "./JobCard";

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
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobCardList;