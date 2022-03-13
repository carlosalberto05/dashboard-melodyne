import React from "react";
import AlbumList from "./AlbumList";

const AlbumTable = ({ albums }) => {
  return (
    <>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className="h3 mb-2 text-gray-800">
        Todos los albumes de la base de datos
      </h1>

      {/*<!-- DataTales Example -->*/}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Título</th>
                  <th>Género</th>
                  <th>Artista</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Título</th>
                  <th>Género</th>
                  <th>Artista</th>
                  <th>Categoría</th>
                </tr>
              </tfoot>
              <tbody>
                {albums.map((album, index) => {
                  return <AlbumList {...album} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumTable;
