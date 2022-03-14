import React from "react";
import Album from "./content-wrapper/content-row-center/Album";

function CategoryRow({ title, albums }) {
  return (
    <>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-12 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">{title}</h6>
          </div>
          <div className="card-body fondoCaja">
            <div className="row">
              {albums.map((album, index) => {
                return <Album {...album} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryRow;
