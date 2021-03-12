import React from "react";

function JobComponent(props) {
  console.log(props.details)
  return(
    <div>
      <div className="flex overview">
        <div>
          <p>{props.details.role}</p>
          <p>{props.details.company}</p>
        </div>
        <div>
          <p>{props.details.from} - {props.details.to}</p>
          <p>{props.details.city}</p>
        </div>
      </div>
      <div>
        <p>{props.details.description}</p>
      </div>
      <button>x</button>
    </div>
  )
}

export default JobComponent;
