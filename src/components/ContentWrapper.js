import React from "react";
import AlbumTable from "./content-wrapper/AlbumTable";
import ContentRowTop from "./content-wrapper/ContentRowTop";
import Footer from "./content-wrapper/Footer";
import TopBar from "./content-wrapper/TopBar";

const ContentWrapper = ({ albums, users }) => {
  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ContentRowTop albums={albums} users={users} />
          <AlbumTable albums={albums} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
