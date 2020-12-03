import './App.css';
import Header from './comoinents/Header/Header';
import Messager from './comoinents/Main/Messager/Messager';
import Profile from './comoinents/Main/Profile/Profile';
import News from './comoinents/Main/News/News';
import Music from './comoinents/Main/Music/Music';
import Setings from './comoinents/Main/Setings/Setings';
import Sidebar from './comoinents/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <main className="app-wrapper-content">
          <Route path='/Profile' render={() => <Profile
            State={props.State.ProfilePage}
            dispatch={props.dispatch}
          />} />
          <Route path='/Messager' render={() => <Messager State={props.State.MessagerPage} />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Setings' render={() => <Setings />} />

        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;

