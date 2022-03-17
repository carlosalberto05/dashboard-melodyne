import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AlbumByCategories from "./AlbumByCategories";
import AlbumTable from "./content-wrapper/AlbumTable";
import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";
import AlbumDetail from "./AlbumDetail";
import UserTable from "./content-wrapper/UserTable";

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
      .then((albums) => this.setState({ contentAlbums: albums.products }))
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
          <Route path="/users-table">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <UserTable users={users} />
              </div>
            </div>
          </Route>
          <Route path="/albums-table">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <AlbumTable albums={albums} />
              </div>
            </div>
          </Route>
          <Route path="/abums-categories">
            <AlbumByCategories albums={albums} />
          </Route>
          <Route path="/detail/:id" component={AlbumDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
