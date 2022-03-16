import React from "react";
import { Link } from "react-router-dom";

function Album(props) {
  return (
    <Link
      className="text-decoration-none col-lg-6 mb-4"
      to={`/detail/${props.id}`}
    >
      <div className="card text-white bg-dark  shadow">
        <div className="card-body">
          <div>
            {props.name} <br /> {props.artist}
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Album;
