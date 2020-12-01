import './App.css';
import Header from './comoinents/Header/Header';
import Messager from './comoinents/Main/Messager/Messager';
import Profile from './comoinents/Main/Profile/Profile';
import News from './comoinents/Main/News/News';
import Music from './comoinents/Main/Music/Music';
import Setings from './comoinents/Main/Setings/Setings';
import Sidebar from './comoinents/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <main className="app-wrapper-content">
          <Route path='/Profile' component={Profile} />
          <Route path='/Messager' component={Messager} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Setings' component={Setings} />
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;

