import React from "react";
import Album from "./Album";

const AlbumsInDb = ({ albums }) => {
  return (
    <>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Albums en la Base de Datos
            </h6>
          </div>
          <div className="card-body fondoCaja">
            <div className="row">
              {albums ? (
                albums.map((album, index) => {
                  return <Album {...album} key={index} />;
                })
              ) : (
                <span>Cargando datos...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumsInDb;
