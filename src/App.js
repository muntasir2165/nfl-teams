import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TeamInfo from "./data.json";
import TeamListing from "./components/TeamListing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    this.setState({
      teams: TeamInfo.teams
    });
  }

  render() {
    // console.log(TeamInfo.teams);
    console.log(this.state.teams);
    return (
      <div className="App">
        <h1>NFL Teams</h1>
        <TeamListing teams={this.state.teams}/>
      </div>
    );
  }
}

export default App;
