import React from 'react'
import Square from './Square'

class Board extends React.Component {
  renderSquare(i,j) {
    let className= "notmach";
    if(this.props.winner) {
      for(let idx=0; idx<this.props.winner.length; idx++) {
        if(this.props.winner[idx][0]==i && this.props.winner[idx][1]==j) {
          className = "match";
          break;
        }
      }
    }
    return (
      <Square
        key={"square-"+i+"-"+j}
        value={this.props.squares[i][j]}
        onClick={()=>this.props.onClick(i,j)}
        className={className}
      />
    )
  }

  render() {
    return (
      <div>
        {this.props.squares.map((value,i)=>{
          return(
            <div key={"row-"+i} className="board-row">
              {this.props.squares[i].map((value,j)=>{
                return(
                  this.renderSquare(i,j)
                );
              })
              }
            </div>
           );
        })}
      </div>
    );
  }
}

export default Board
