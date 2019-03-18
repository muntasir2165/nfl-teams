import React from "react";
import "./TeamListing.css";
import TeamRoster from "../TeamRoster";

const TeamListing = (props) => (
  <div className="container">
      {props.teams ? props.teams.map(team => (<TeamRoster key={team.id} teamFullName={team.fullName} teamNickName={team.nickName} teamRosterLength={team.roster.length}></TeamRoster>)) : ""}
  </div>
);

export default TeamListing;
