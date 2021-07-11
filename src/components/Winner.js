import React from 'react'
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useRecoilState,useRecoilValue } from 'recoil';
import { History } from '../states/History';
import { stepnumber } from '../states/stepnumber';
import { isnextX } from '../states/isnextX';
import { WinnerState } from '../states/WinnerState';
import { Player1 } from '../states/Player1';
import { Player2 } from '../states/Player2';



function Winner() {
    const [, setHistory] = useRecoilState(History)
    const [, setStepnumber] = useRecoilState(stepnumber)
    const [, setnextTurnX] = useRecoilState(isnextX)
    const [winner, setwinner] = useRecoilState(WinnerState);
    const name1=useRecoilValue(Player1)
    const name2=useRecoilValue(Player2)


    const ResetStates = () => {
        setHistory([Array(9).fill(null)]);
        setStepnumber(0);
        setnextTurnX(true);
        setwinner(null);
    }
    if (winner) {
        return (
            <div>
                Winner is {(winner==='X')? name1 :name2}
                <Row gutter={[24, 24]}>
                    <Col span={7} ></Col>
                    <Col span={5} >
                        <Button type='dashed' onClick={ResetStates}>Play Again!</Button>
                    </Col>
                    <Col span={5} >
                        <Button type='dashed' onClick={ResetStates}><Link to='/'>Back to Home Page</Link></Button>
                    </Col>
                    <Col span={7} ></Col>
                </Row>

            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Winner
