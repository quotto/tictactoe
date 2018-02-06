import React from 'react'
import BoardContainer from '../containers/BoardContainer'
import GameContainer from '../containers/GameContainer'

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <BoardContainer />
                </div>
                <GameContainer />
            </div>
        );
    }
}

export default App
