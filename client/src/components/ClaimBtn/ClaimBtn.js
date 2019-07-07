import React from "react";
import "./style.css";

function ClaimBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props}>
        Claim
    </button>
  );
}

export default ClaimBtn;