
    import React from 'react'
    import { useRecoilState, useRecoilValue} from 'recoil';
    import { History } from '../states/History';
    import { stepnumber } from '../states/stepnumber';
    import { isnextX } from '../states/isnextX';
    import { WinnerState } from '../states/WinnerState';
    import { Player1 } from '../states/Player1';
    import { Player2 } from '../states/Player2';
    import { Button} from 'antd';

    
    function RenderState() {
        
    const History_game = useRecoilValue(History)
    const [, setStepnumber] = useRecoilState(stepnumber)
    const [nextTurnX, setnextTurnX] = useRecoilState(isnextX)
    const winner = useRecoilValue(WinnerState);
    const name1=useRecoilValue(Player1)
    const name2=useRecoilValue(Player2)

    function jumpTo(move_number) {
        // this.setState({
        //     stepnumber: move_number,
        //     nextTurnX: (move_number % 2) === 0
        // })
        setStepnumber(move_number)
        setnextTurnX((move_number % 2) === 0)
    
        
    }
    
    
    const moves = History_game.map((dummy_square, move) => {
        const listitem = move ? `Go to move ${move}` : 'Go to Start';
        return (
            <li key={move}>
                <Button onClick={() => jumpTo(move)}>{listitem}</Button>
            </li>
        )
    })
    let status;
        status = 'Next player: ' + (nextTurnX ? name1 : name2);
    
        if(!winner){
            return (
                <div className="game-info">
                      <h4>{status}</h4>  
                    <ol>{moves}</ol>
                </div>
        )
        }
        else{
            return(
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            )
        }
        
    }
    
    export default RenderState
    