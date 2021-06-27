import React, { Component } from 'react'
import Board from './Board';
class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            stepnumber: 0,
            nextTurnX: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepnumber + 1)
        const current = history[history.length - 1];
        const square = current.squares.slice();
        if (calWinner(square) || square[i]) {
            return;
        }
        square[i] = this.state.nextTurnX ? "X" : "O";
        this.setState({
            history: history.concat([{ squares: square }]),
            stepnumber: history.length,
            nextTurnX: !this.state.nextTurnX
        })
    }

    jumpTo(move_number) {
        this.setState({
            stepnumber: move_number,
            nextTurnX: (move_number % 2) === 0
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepnumber];
        const square = current.squares.slice();
        const winner = calWinner(square);

        const moves = history.map((dummy_square, move) => {
            const listitem = move ? `Go to move ${move}` : 'Go to Start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{listitem}</button>
                </li>
            )
        })
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.nextTurnX ? 'X' : 'O');
        }
        return (
            <div className="wrapper">
                < div className="container">
                    <div className="board">
                        <Board onClickgame={i => this.handleClick(i)} squares={square}></Board>
                    </div>
                    <div className="game-info">
                        {status}
                        <ol>{moves}</ol>
                    </div>

                </div>
            </div>
        )
    }
}
function calWinner(square) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}
export default Game;