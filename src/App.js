import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TeamInfo from "./data.json";
import TeamListing from "./components/TeamListing";
import TeamRoster from "./components/TeamRoster";

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
    // console.log(this.state.teams);
    return (
      <Router>
      <div className="App">
        <h1>NFL Teams</h1>
        <Route exact path="/" render={() => <TeamListing teams={this.state.teams}/>} />
        <Route path="/team-roster/:id" render={(props) => <TeamRoster {...props} />} />
      </div>
      </Router>
    );
  }
}

export default App;
