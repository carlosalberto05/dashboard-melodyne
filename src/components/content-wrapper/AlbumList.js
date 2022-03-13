import React from "react";

const AlbumList = ({ id, name, genre, artist, category }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{genre}</td>
      <td>{artist}</td>
      <td>{category}</td>
    </tr>
  );
};

export default AlbumList;
