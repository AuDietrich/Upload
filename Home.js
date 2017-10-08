import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";

class Home extends Component {
  state = {
    repos: [],
    search: ""
  };

  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:>1&s=starts&type=Repositories&sort=stars&per_page=10"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ repos: responseJson.items });
      });
  }

  render() {
    return (
      <div className="container">
        <Header title="Home" />
        <hr />
        <ul>
          {this.state.repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

export default connect(mapStateToProps, null)(Home);