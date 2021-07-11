import './App.css';
import Game from './components/Game';
import Winner from './components/Winner'
import RenderState from './components/RenderState';
import Landing from './components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Content, Sider } = Layout;

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Layout>
              <Header className='Header'>Enter The Players Names</Header>
              <Layout className='Content-Sider'>
                <Sider className='Sider'></Sider>
                <Sider className='Sider'></Sider>
                <Content className='Content'><Landing /></Content>
                <Sider className='Sider'></Sider>
                <Sider className='Sider'></Sider>
              </Layout>
            </Layout>
          </Route>
          <Route path='/game'>
            <Layout>
              <Header className='Header'>Enjoy The Game!</Header>
              <Layout className='Content-Sider'>
                <Content className='Content'><Game /></Content>
                <Sider className=' Sider Sider-Game'><RenderState /></Sider>
              </Layout>
              <Footer className='Footer'><Winner /></Footer>
            </Layout>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
