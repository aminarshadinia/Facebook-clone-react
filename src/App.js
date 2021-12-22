import { Fragment } from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets';
import { useStateValue } from './components/StateProvider/StateProvider';
import { Container } from '@material-ui/core';


function App() {
  const [{user} , dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? <Login /> : (
        <Fragment>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Container>
            <Feed />
            </Container>
            <Widgets />
          </div>
        </Fragment>
      )}




    </div>
  );
}

export default App;
