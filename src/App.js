import './App.css';
import Header from './comoinents/Header';
import Sidebar from './comoinents/Sidebar';
import User from './comoinents/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <User />
    </div>
  );
}

export default App;

