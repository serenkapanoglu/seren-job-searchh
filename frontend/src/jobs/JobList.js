import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import Search from "../common/SearchForm";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";

/* Renders list of jobs
  Routes to /jobs */
function JobList() {

  let [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    search();
  }, []);


  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
      <div className="JobList">
        <Search searchFor={search} />
        {jobs.length
            ? <JobCardList jobs={jobs} />
            : <p className="lead">No results</p>
        }
      </div>
  );
}

export default JobList;