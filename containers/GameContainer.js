import { connect } from 'react-redux'
import { reverse,jumpTo } from '../actions'
import Game from '../components/Game'

const mapStateToProps = (state) => {
    return {
        history: state.mark.history,
        stepNumber: state.mark.stepNumber,
        xIsNext: state.mark.xIsNext,
        winner: state.mark.winner,
        reverse: state.reverse.reverse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMoveClick: (index)=> {
            dispatch(jumpTo(index))
        },
        onReverseClick: () => {
            dispatch(reverse())
        }
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default GameContainer
