import React, { Component } from "react";
import imagenFondo from "../../assets/images/mandalorian.jpg";
import ContentRowTotal from "./ContentRowTotal";

class ContentRowTop extends Component {
  constructor() {
    super();

    this.state = {
      contentAlbums: [],
      contentUsers: [],
    };
  }

  componentDidMount() {
    fetch("api/products")
      .then((response) => response.json())
      .then((albums) => this.setState({ contentAlbums: albums.data }))
      .catch((err) => console.log(err));

    fetch("api/users")
      .then((response) => response.json())
      .then((users) => this.setState({ contentUsers: users.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    let totalAlbums = this.state.contentAlbums.length;
    let totalUsers = this.state.contentUsers.length;
    //Obtain all categories includes repeated
    let allCategories = this.state.contentAlbums.map((album) => album.category);
    //Filter categories repeated
    let filterCategories = allCategories.filter((category, i) => {
      return allCategories.indexOf(category) === i;
    });
    let totalCategories = filterCategories.length;

    let albumsInDataBase = {
      color: "primary",
      title: "Total de álbumes",
      total: totalAlbums,
      icon: "fas fa-compact-disc",
    };

    let usersInDataBase = {
      color: "success",
      title: "Total de usuarios",
      total: totalUsers,
      icon: "fas fa-user",
    };

    let categoriesInDataBase = {
      color: "warning",
      title: "Total de categorías",
      total: totalCategories,
      icon: "fas fa-folder",
    };

    let cardProps = [albumsInDataBase, usersInDataBase, categoriesInDataBase];

    return (
      <>
        {/*<!-- Content Row Top -->*/}
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          {/*<!-- Paneles whit total albums, users and categories-->*/}
          <div className="row">
            {cardProps.map((card, index) => {
              return <ContentRowTotal {...card} key={index} />;
            })}
          </div>

          {/*<!-- End movies in Data Base -->*/}

          {/*<!-- Content Row Last Movie in Data Base -->*/}
          <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">
                    Last movie in Data Base
                  </h5>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      style={{ width: 40 + "rem" }}
                      src={imagenFondo}
                      alt=" Star Wars - Mandalorian "
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, consequatur explicabo officia inventore libero
                    veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                    voluptatum non corporis quae dolorem culpa citationem
                    ratione aperiam voluptatum non corporis ratione aperiam
                    voluptatum quae dolorem culpa ratione aperiam voluptatum?
                  </p>
                  <a
                    className="btn btn-danger"
                    target="_blank"
                    rel="nofollow"
                    href="/"
                  >
                    View movie detail
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">
                    Genres in Data Base
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Acción</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Animación</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Aventura</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Ciencia Ficción</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Comedia</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Documental</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Drama</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Fantasia</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Infantiles</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">Musical</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!--End Content Row Top-->*/}
      </>
    );
  }
}
export default ContentRowTop;
