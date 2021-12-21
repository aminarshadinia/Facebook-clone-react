import { Fragment } from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets';


function App() {
  const user = 'Amin';

  return (
    <div className="app">
      {!user ? <h1>Login</h1> : (
        <Fragment>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}




    </div>
  );
}

export default App;
