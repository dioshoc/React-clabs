import './App.css';
import HeaderContainer from './comoinents/Header/HeaderContainer';
import MessagerContainer from './comoinents/Main/Messager/MessagerContainer';

import ProfileConatiner from './comoinents/Main/Profile/ProfileConatiner';
import News from './comoinents/Main/News/News';
import Music from './comoinents/Main/Music/Music';
import Setings from './comoinents/Main/Setings/Setings';
import Sidebar from './comoinents/Sidebar/Sidebar';
import FriendsContainer from './comoinents/Main/Friends/FriendsContainer';

import { BrowserRouter, Route } from 'react-router-dom';
import FindFrendsContainer from './comoinents/Main/Friends/FindFriends/FindFriendsContainer';
import Login from './comoinents/Login/Login';



function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <main className="app-wrapper-content">
          <Sidebar />
          <div className="app-wrapper-main-content">
            <Route path='/Profile/:userID?' render={() => <ProfileConatiner />} />
            <Route path='/Messager' render={() => <MessagerContainer />} />
            <Route path='/Friends' render={() => <FriendsContainer />} />
            <Route path='/FindFriends' render={() => <FindFrendsContainer />} />
            <Route path='/News' render={() => <News />} />
            <Route path='/Music' render={() => <Music />} />
            <Route path='/Setings' render={() => <Setings />} />

            <Route path='/Login' render={() => <Login />} />
          </div>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;

