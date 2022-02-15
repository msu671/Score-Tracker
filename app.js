//JSX
//{ }: curely braces lets JSX know its java code
//{/* */}
const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className = "stats">Players: 1</span>
        </header>
    );
}

const Player = () =>{
    return(
        <div className="player">
            <span className="player-name">
                Mike
            </span>
                <Counter />
        </div>
    );
}

const Counter = () =>{
    return (
        <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">50</span>
        <button className="counter-action inrement">+</button>
    </div>
    );
}

const App = () =>{

    return(
        <div className="scoreboard">
            <Header />
            {/*plyaer list*/}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,//capitalize tags means react component
    document.getElementById('root')
);