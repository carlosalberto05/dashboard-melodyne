import React from "react";
import LastAlbumInDb from "./content-row-center/LastAlbumInDb";
import AlbumsInDb from "./content-row-center/AlbumsInDb";

function ContentRowCenter({ albums }) {
  return albums ? (
    <div className="row">
      {/*<!-- Last Album in DB -->*/}
      <LastAlbumInDb albums={albums} />
      {/*<!-- End content row last album in Data Base -->*/}

      {/*<!-- Albums in DB -->*/}
      <AlbumsInDb albums={albums} />
    </div>
  ) : null;
}

export default ContentRowCenter;
