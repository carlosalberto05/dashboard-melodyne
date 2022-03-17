import React from "react";
import UserList from "./UserList";

const UserTable = ({ users }) => {
  return (
    <>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className="h3 mb-2 text-gray-800">
        Todos los usuarios de la base de datos
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
                  <th>Nombre</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Email</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user, index) => {
                  return <UserList {...user} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
