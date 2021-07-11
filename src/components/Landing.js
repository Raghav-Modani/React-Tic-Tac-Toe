import React from 'react'
import '../App.css';
import {Form, Input , Button} from 'antd';
import { Player1 } from '../states/Player1';
import { Player2 } from '../states/Player2';
import { useRecoilState} from 'recoil';

import { Link } from 'react-router-dom';
function Landing() {

const [name1,setName1]=useRecoilState(Player1)
const [name2,setName2]=useRecoilState(Player2)

    return (
        <div>
            <Form>
                <Form.Item label='Player 1'>
                    <Input type='text' value={name1}
          onChange={e => setName1(e.target.value)}></Input>
                </Form.Item>
                <Form.Item label='Player 2'>
                    <Input type='text' value={name2}
          onChange={e => setName2(e.target.value)}></Input>
                </Form.Item>
                <Form.Item>
                    <Button type='default'><Link to='/game'>Start Playing!</Link></Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Landing