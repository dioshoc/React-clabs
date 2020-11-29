import './App.css';
import Header from './comoinents/Header/Header';
import Profile from './comoinents/Main/Profile/Profile';
import Sidebar from './comoinents/Sidebar/Sidebar';



function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;

