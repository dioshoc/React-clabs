import './App.css';
import Header from './comoinents/Header/Header';
import MessagerContainer from './comoinents/Main/Messager/MessagerContainer';

import Profile from './comoinents/Main/Profile/Profile';
import News from './comoinents/Main/News/News';
import Music from './comoinents/Main/Music/Music';
import Setings from './comoinents/Main/Setings/Setings';
import Sidebar from './comoinents/Sidebar/Sidebar';
import Friends from './comoinents/Main/Friends/Friends';

import { BrowserRouter, Route } from 'react-router-dom';
import FindFrendsContainer from './comoinents/Main/Friends/FindFriends/FindFriendsContainer';



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <main className="app-wrapper-content">
          <Route path='/Profile' render={() => <Profile />} />
          <Route path='/Messager' render={() => <MessagerContainer />} />
          <Route path='/Friends' render={() => <Friends />} />
          <Route path='/FindFriends' render={() => <FindFrendsContainer />} />
          <Route path='/News' render={() => <News />} />

          <Route path='/Music' render={() => <Music />} />
          <Route path='/Setings' render={() => <Setings />} />

        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;

