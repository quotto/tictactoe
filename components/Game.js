import React from 'react'
import Moves from './Moves'

class Game extends React.Component {
    render() {
        let status;
        if(this.props.winner) {
            status = 'Winner: ' + (this.props.xIsNext ? 'O' : 'X');;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game-info">
                <div>{status}</div>
                <ol>
                    <Moves history={this.props.history} stepNumber={this.props.stepNumber} reverse={this.props.reverse} onClick={this.props.onMoveClick}/>
                </ol>
                <a className="reverse" onClick={()=>this.props.onReverseClick()}>reverse</a>
            </div>
        );
    }
}

export default Game
