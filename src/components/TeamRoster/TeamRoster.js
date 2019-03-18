import React from "react";
import "./TeamRoster.css";

const TeamRoster = (props) => (
	<div className="row">
	<div className="col-lg-8 offset-lg-2 offset-lg-right-2 mb-1 border border-success rounded btn btn-default">
		<p>Name: {props.teamFullName}</p>
		<p>Nickname: {props.teamNickName}</p>
		<p>Number of Players: {props.teamRosterLength}</p>
	</div>
  </div>
);

export default TeamRoster;