import React, { Component } from 'react';
import AddToTeam from './AddToTeam';


class Players extends Component {
	render() {
		return(
			<section className="player player1">
	      <h2>{this.props.players.name}</h2>
		     <AddToTeam 
		      	team1={this.props.handleAddToTeam1Click} 
		      	team2={this.props.handleAddToTeam2Click}
	      	/>
	    </section>
		);
	}	
}



export default Players;
