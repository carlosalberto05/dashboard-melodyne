import React from "react";
import CategoryRow from "./CategoryRow";
import ContentRowTotal from "./content-wrapper/content-row-top/ContentRowTotal";

const AlbumByCategories = ({ albums }) => {
  //Filter album by category
  //top
  let topAlbums = albums.filter((album) => album.category === "top");
  let totalTopAlbums = topAlbums.length;
  //popular
  let popularAlbums = albums.filter((album) => album.category === "popular");
  let totalPopularAlbums = popularAlbums.length;
  //moreSale
  let moreSaleAlbums = albums.filter((album) => album.category === "moreSale");
  let totalMoreSaleAlbums = moreSaleAlbums.length;

  let topAlbumsInDataBase = {
    color: "primary",
    title: "Álbumes top",
    total: totalTopAlbums,
    icon: "fas fa-compact-disc",
  };

  let popularAlbumsInDataBase = {
    color: "success",
    title: "Álbumes populares",
    total: totalPopularAlbums,
    icon: "fas fa-user",
  };

  let moreSaleAlbumsInDataBase = {
    color: "warning",
    title: "Álbumes mas vendidos",
    total: totalMoreSaleAlbums,
    icon: "fas fa-folder",
  };

  let cardProps = [
    topAlbumsInDataBase,
    popularAlbumsInDataBase,
    moreSaleAlbumsInDataBase,
  ];

  let topAlbumsByCategory = {
    title: "Top álbumes",
    albums: topAlbums,
  };

  let popularAlbumsByCategory = {
    title: "Álbumes populares",
    albums: popularAlbums,
  };

  let moreSaleAlbumsByCategory = {
    title: "Álbumes más vendidos",
    albums: moreSaleAlbums,
  };

  let cardCategoryProps = [
    topAlbumsByCategory,
    popularAlbumsByCategory,
    moreSaleAlbumsByCategory,
  ];

  return (
    <>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4"></div>
        <h4 className="h3 justify-content-center align-items-center mb-0 text-gray-800 w-100">
          Álbumes por categorías
        </h4>

        {/*<!-- Paneles whit total albums, users and categories-->*/}
        <div className="row">
          {cardProps.map((card, index) => {
            return <ContentRowTotal {...card} key={index} />;
          })}
        </div>

        {cardCategoryProps.map((card, index) => {
          return <CategoryRow {...card} key={index} />;
        })}
      </div>
    </>
  );
};

export default AlbumByCategories;
