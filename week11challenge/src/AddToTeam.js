import React from 'react';

// access buttons from player component
function AddToTeam(props) {
	return(
		<div className="scorecontroller">
		  <button className="team 1 btn" onClick={props.team1}>Add to Team 1</button>
		  <button className="team 2 btn" onClick={props.team2}>Add to Team 2</button>
		</div>
	);
}

export default AddToTeam;
