import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";


/* Shows list of companies
routes to /companyies */
function CompanyList() {
  let [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  /* Reloads companies when search form submits */
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="CompanyList">
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div className="CompanyList-list">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p className="lead">No results</p>
      )}
    </div>
  );
}

export default CompanyList;
