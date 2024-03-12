// Breadcrumb.jsx

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb">
      {links.map((link, index) => (
        <React.Fragment key={link.path}>
          <Link to={link.path}>{link.label}</Link>
          {index !== links.length - 1 && <span> / </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
