import { combineReducers } from 'redux'
import { actions } from '../actions'

const initialMarkState = {
    history: [{
        squares: (()=>{
            let s = new Array(3);
            for(let i=0; i<s.length;i++) {
                s[i] = new Array(3).fill(null);
            }
            return s;
        })()
    }],
    stepNumber: 0,
    xIsNext: true,
}

const initialReverseState = {
    reverse: false
}



function calculateWinner(squares) {
    const lines = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a[0]][a[1]] && squares[a[0]][a[1]] === squares[b[0]][b[1]] && squares[a[0]][a[1]] === squares[c[0]][c[1]]) {
            return lines[i];
        }
    }
    return null;
}

const mark = (state = initialMarkState,action) => {
    switch(action.type) {
        case actions.MARK:
            const history = state.history.slice(0, state.stepNumber + 1)
            const current = history[history.length - 1]
            const newSquares = Array(current.squares.length)
            for(let i=0; i<newSquares.length;i++) {
                newSquares[i] = current.squares[i].slice()
            }
            if(state.winner || newSquares[action.position[0]][action.position[1]]) {
                return state
            }
            newSquares[action.position[0]][action.position[1]] = state.xIsNext ? 'X' : 'O';
            return (
                Object.assign({},state,{
                    history: history.concat([{
                        squares: newSquares,
                    }]),
                    stepNumber: history.length,
                    xIsNext: !state.xIsNext,
                    winner: calculateWinner(newSquares)
                })
            )
        case actions.MOVE:
            return (
                Object.assign({},state,{
                    stepNumber: action.index,
                    xIsNext: (action.index % 2) === 0,
                    winner:  calculateWinner(state.history[action.index].squares)
                })
            );
        default:
            return state
    }
}

const reverse = (state = initialReverseState,action) => {
    switch(action.type) {
        case actions.REVERSE:
        return (
            Object.assign({},state,{reverse: !state.reverse})
        );
        default:
            return state
    }
}

const gameApp = combineReducers({
    mark,
    reverse
})

export default gameApp
