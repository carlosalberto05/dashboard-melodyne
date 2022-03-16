import React from "react";
import cargando from "../../../assets/images/cargando.gif";

const LastAlbumInDb = ({ albums }) => {
  let lastAlbum = albums[albums.length - 1];

  console.log(lastAlbum);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último álbum en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={lastAlbum ? lastAlbum.image : cargando}
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p>
            {lastAlbum ? lastAlbum.description : <span>Cargando datos...</span>}
          </p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View album detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastAlbumInDb;
