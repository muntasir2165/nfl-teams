import React from "react";
import "./TeamListing.css";

const TeamListing = (props) => (
  <div>
    {props.teams.map(team => <div key={team.id}>{team.fullName} {team.nickName} {team.roster.length}</div>)}
  </div>
);

export default TeamListing;
