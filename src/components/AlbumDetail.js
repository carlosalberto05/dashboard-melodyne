import React, { useState, useEffect } from "react";

const AlbumDetail = (props) => {
  let idLink = props.match.params.id;
  console.log(idLink);

  const [album, setAlbum] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${idLink}`)
      .then((result) => result.json())
      .then((data) => {
        setAlbum(data.data);
      });
  }, [idLink]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mt-5">
            <img
              src={album.image}
              className="rounded mx-auto d-block w-75"
              alt={album.name}
            />
          </div>
        </div>
        <div className="col">
          <div className="mt-5">
            <h3>Título del album: {album.name}</h3>
            <h3>Artista: {album.artist}</h3>
            <p>Genero:{album.genre}</p>
            <p>Categoría: {album.category}</p>
            <p>{album.description}</p>
            {/* <ul>
              {album ? (
                album.songs.map((song, i) => {
                  return <li key={song.name + i}>{song.name}</li>;
                })
              ) : (
                <p>Cargando...</p>
              )}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
