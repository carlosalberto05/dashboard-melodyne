import React, { Component } from "react";
import ContentRowTotal from "./content-row-top/ContentRowTotal";
import ContentRowCenter from "./ContentRowCenter";

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
    let albums = this.state.contentAlbums;

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
            <h1 className="h3 mb-0 text-gray-800">Mellowdyne Dashboard</h1>
          </div>

          {/*<!-- Paneles whit total albums, users and categories-->*/}
          <div className="row">
            {cardProps.map((card, index) => {
              return <ContentRowTotal {...card} key={index} />;
            })}
          </div>

          <ContentRowCenter albums={albums} />
        </div>
        {/*<!--End Content Row Top-->*/}
      </>
    );
  }
}
export default ContentRowTop;
