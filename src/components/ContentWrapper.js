import React from "react";
import ContentRowTop from "./content-wrapper/ContentRowTop";
import Footer from "./content-wrapper/Footer";
import TopBar from "./content-wrapper/TopBar";

function ContentWrapper() {
  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ContentRowTop />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default ContentWrapper;
