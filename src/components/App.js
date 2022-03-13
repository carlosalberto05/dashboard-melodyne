import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AlbumTable from "./content-wrapper/AlbumTable";
import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";

class App extends Component {
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
    let users = this.state.contentUsers;
    return (
      <div id="wrapper">
        <SideBar />

        <Switch>
          <Route exact path="/">
            <ContentWrapper albums={albums} users={users} />
          </Route>
          <Route path="/albums-table">
            <AlbumTable albums={albums} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
