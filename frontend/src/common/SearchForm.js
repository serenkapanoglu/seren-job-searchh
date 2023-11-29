import React, { useState } from "react";
//import "./SearchForm.css";

/* Wiget to search on companyList and jobList
Renders search from and calls searchFor function prop */
function SearchForm({ searchFor }) {

  let [searchTerm, setSearchTerm] = useState("");

  /* Asks parent component to filter  */
  function handleSubmit(e) {
    e.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /* Updates form data */
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
      <div className="SearchForm">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
              className="form-control"
              name="searchTerm"
              placeholder="Search here"
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
