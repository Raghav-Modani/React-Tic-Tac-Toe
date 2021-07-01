

import React, { useState } from 'react'
import Board from './Board';

const Game = () => {
    const [History, setHistory] = useState([Array(9).fill(null)])
    const [stepnumber, setStepnumber] = useState(0)
    const [nextTurnX, setnextTurnX] = useState(true)
    const winner = calWinner(History[stepnumber]);



    function handleClick(i) {
        const history = History.slice(0, stepnumber + 1)
        const current = history[stepnumber];
        const square = current.slice();
        if (calWinner(square) || square[i]) {
            return;
        }
        square[i] = nextTurnX ? "X" : "O";
        setHistory(history.concat([square]))
        setStepnumber(history.length)
        setnextTurnX(!nextTurnX)
    }

    function jumpTo(move_number) {
        // this.setState({
        //     stepnumber: move_number,
        //     nextTurnX: (move_number % 2) === 0
        // })
        setStepnumber(move_number)
        setnextTurnX((move_number % 2) === 0)

    }

    const moves = History.map((dummy_square, move) => {
        const listitem = move ? `Go to move ${move}` : 'Go to Start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{listitem}</button>
            </li>
        )
    })
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (nextTurnX ? 'X' : 'O');
    }

    return (

        <div className="wrapper">
            < div className="container">
                <div className="board">
                    <Board onClickgame={i => handleClick(i)} squares={History[stepnumber]} ></Board>
                </div>
                <div className="game-info">
                    {status}
                    <ol>{moves}</ol>
                </div>

            </div>
        </div>

    )

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
}

export default Game
