import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/* Shows detail about company and jobs for that company
Routes to /companies/:handle */
function CompanyDetail() {
  let { handle } = useParams();

  let [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
      <div className="CompanyDetail">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
      </div>
  );
}

export default CompanyDetail;