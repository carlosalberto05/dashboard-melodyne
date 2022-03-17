import React from "react";

const UserList = ({ id, name, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserList;
