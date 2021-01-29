import React from 'react';
import './App.css';
import HeaderContainer from './comoinents/Header/HeaderContainer';
import MessagerContainer from './comoinents/Main/Messager/MessagerContainer';

import ProfileConatiner from './comoinents/Main/Profile/ProfileConatiner';
import News from './comoinents/Main/News/News';
import Music from './comoinents/Main/Music/Music';
import Setings from './comoinents/Main/Setings/Setings';
import Sidebar from './comoinents/Sidebar/Sidebar';
import FriendsContainer from './comoinents/Main/Friends/FriendsContainer';

import { Route, withRouter } from 'react-router-dom';
import FindFrendsContainer from './comoinents/Main/Friends/FindFriends/FindFriendsContainer';
import Login from './comoinents/Login/Login';
import { initializeApp } from './redux/app-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './comoinents/common/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <main className="app-wrapper-content">
          <Sidebar />
          <div className="app-wrapper-main-content">
            {!this.props.isAuth
              && <div>
                <div>Это тестовый проект в котором я изучаю React, он будет улучшаться со временем</div>
                <div>В данный момент наиболее работоспособные вкладки: Profile, Find Friends</div>
                <div>Для входа можно использовать тестовые данные:</div>
                <div>Login: dioshoc1@yandex.ru</div>
                <div>Password: 12345678</div>
                <br />
              </div>
            }

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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.App.initialized,
    isAuth: state.Auth.isAuth
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

