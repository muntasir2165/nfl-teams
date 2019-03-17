import React, { Component } from 'react';
import './App.css';
import TeamInfo from "./data.json";
import TeamListing from "./components/TeamListing";

class App extends Component {
  render() {
    console.log(TeamInfo.teams);
    return (
      <div className="App">
        <h1>NFL Teams</h1>
        <TeamListing teams={TeamInfo.teams}/>
      </div>
    );
  }
}

export default App;
