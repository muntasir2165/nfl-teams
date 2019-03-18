import React from "react";
import { Link } from 'react-router-dom';
import "./TeamListing.css";
import Team from "../Team";

const TeamListing = (props) => (
  <div className="container">
      {props.teams ? props.teams.map(team => (<Link to= {`/team-roster/${team.id}`} key={team.id}><Team teamFullName={team.fullName} teamNickName={team.nickName} teamRosterLength={team.roster.length}></Team></Link>)) : ""}
  </div>
);

export default TeamListing;
