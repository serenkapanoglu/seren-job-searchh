import React from "react";
import { Link } from "react-router-dom";
//import "./CompanyCard.css";

/* Shows some info on company in a card in a list after being rendered by companyList */
function CompanyCard({ name, description, logoUrl, handle }) {
  
    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
          <div className="card-body">
            <h4 className="card-title">
              {name}
              {logoUrl && <img src={logoUrl}
                               alt={name}
                               className="logo-url" />}
            </h4>
            <p>{description}</p>
          </div>
        </Link>
    );
  }
  
  export default CompanyCard;