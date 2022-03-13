import React from "react";
import ContentRowTotal from "./content-row-top/ContentRowTotal";
import ContentRowCenter from "./ContentRowCenter";

const ContentRowTop = ({ albums, users }) => {
  let totalAlbums = albums.length;
  let totalUsers = users.length;
  //Obtain all categories includes repeated
  let allCategories = albums.map((album) => album.category);
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
};

export default ContentRowTop;
