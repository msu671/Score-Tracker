//JSX
//{ }: curely braces lets JSX know its java code
//{/* */}
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className = "stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) =>{
    return(
        <div className="player">
            <span className="player-name">
                <button className ="remove-player" onClick={()=> props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>
                <Counter />
        </div>
    );
}

class Counter extends React.Component{
    /*constructor() {
        super()
        this.state = {
            score: 0
        };
    }*/
    
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => ({
                score: prevState.score + 1
        
        }));//lets react know state has changed
    }
    //insure state is updating correctly
    decrementScore = () => {
        this.setState(prevState =>({
                score: prevState.score - 1
        }));
    }

    render() {
        return (
            <div className="counter">
            <button className="counter-action decrement" onClick = {this.decrementScore}>-</button>
            <span className="counter-score">{this.state.score}</span>
            {/*<button className="counter-action inrement" onClick={this.incrementScore.bind(this)}>+</button>*/}
            <button className="counter-action inrement" onClick = {this.incrementScore}>+</button>
         </div>
        );
    }
}


class App extends React.Component{
    state = {
        players: [  {
            name: "Guil",
            id: 1
          },
          {
            name: "Treasure",
            id: 2
          },
          {
            name: "Ashley",
            id: 3
          },
          {
            name: "James",
            id:4
          }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState =>{
            return {
            players: this.state.players.filter( p => p.id !== id)
            };
        });
    }

    render(){
        return(
            <div className="scoreboard">
                <Header title="Scoreboard" 
                totalPlayers={this.state.players.length} />
    
    
                {/*plyaer list*/}
                {this.state.players.map( player => 
                <Player
                    name = {player.name}
                    id = {player.id}
                    key = {player.id.toString()}
                    removePlayer ={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}


ReactDOM.render(
    <App />,//capitalize tags means react component
    document.getElementById('root')
);
