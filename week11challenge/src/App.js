/* 
Create an app to assign a list of people to one of two teams.
You may either start with a hard-coded array of people or you can create a form to gather names from the user.
Start with listing the users. Have some way to add them into one of the two teams. 
Once a person is assigned, they should be removed from the unassigned list and should be added to a team list. 
Once a person is on a team list, have a way to remove them from a team assignment (which will put them back on the unassigned list) or to switch them to the other team. 
Finally, have a way to reset things back to the original state of the game at the beginning.
*/
import React, { Component } from 'react';
import AddToTeam from './AddToTeam';
import Players from './Players';
import './App.css';

const data = {
  // hardcode users in game
  "players": [
    {"name": "Jesse Larson", "inTeam1": false},
    {"name": "Mark Isaiah", "inTeam": false},
    {"name": "Chris Blue", "inTeam": false},
    {"name": "Vanessa Ferguson", "inTeam": false},  
  ]
}
class App extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = data;
  }

  handleClick(event) {
    let playerArray = this.state.players.slice();
    this.setState({ 
      player: playerArray
    })
  }

  

  render() {
    let team1 = [];
    let team2 = [];
    const players = this.state.players.map(function(player, index){
      return (
        <div className="player">
          <Players
            key={index} 
            players={player} 
            handleAddToTeam1Click={()=>{this.handleClick(player); }}
            handleAddToTeam2Click={()=>{this.handleClick(player); }}
          />
        </div>
      );
    },this);

    return (
      <div className="App">
        <div className="unassigned">
          <h2>Unassigned List</h2>
           {players}
        </div>

        <div className="teams">
          <div >
            <h3>Team 1</h3>
          </div>

          <div>
            <h3>Team 2</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

 