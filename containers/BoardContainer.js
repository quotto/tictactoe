import { connect } from 'react-redux'
import { putMark } from '../actions'
import Board from '../components/Board'

function mapStateToProps(state) {
    return {
        squares: state.mark.history[state.mark.stepNumber].squares,
        winner: state.mark.winner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (i,j) => {
            dispatch(putMark(i,j))
        }
    }
}

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardContainer
