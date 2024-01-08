// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function InformationCard(props) {
//   return (
//     <div className="info-cards">
//       <span className="info-card-icon">
//         <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
//       </span>
//       <p className="info-card-title">{props.title}</p>
//       <p className="info-card-description">{props.description}</p>
//     </div>
//   );
// }

// export default InformationCard;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`info-cards ${isExpanded ? "open" : ""}`}>
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <p className="info-card-title">{props.title}</p>
      <div className="info-card-content">
        <p className="info-card-description">{props.description}</p>
      </div>
      <div className="info-toggle" onClick={toggleCard}>
        {isExpanded ? "-" : "+"}
      </div>
    </div>
  );
}

export default InformationCard;

