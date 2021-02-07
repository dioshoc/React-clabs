import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './comoinents/Header/HeaderContainer';

import Sidebar from './comoinents/Sidebar/Sidebar';

import { Route, withRouter } from 'react-router-dom';
import Login from './comoinents/Login/Login';
import { initializeApp } from './redux/app-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './comoinents/common/Preloader';
import { withSuspence } from './HOC/withSuspence';

//import ProfileConatiner from './comoinents/Main/Profile/ProfileConatiner';
//import MessagerContainer from './comoinents/Main/Messager/MessagerContainer';
//import FriendsContainer from './comoinents/Main/Friends/FriendsContainer';
//import FindFrendsContainer from './comoinents/Main/Friends/FindFriends/FindFriendsContainer';
//import Setings from './comoinents/Main/Setings/Setings';
//import News from './comoinents/Main/News/News';
//import Music from './comoinents/Main/Music/Music';
const ProfileConatiner = React.lazy(() => import('./comoinents/Main/Profile/ProfileConatiner'))
const MessagerContainer = React.lazy(() => import('./comoinents/Main/Messager/MessagerContainer'))
const FriendsContainer = React.lazy(() => import('./comoinents/Main/Friends/FriendsContainer'))
const FindFrendsContainer = React.lazy(() => import('./comoinents/Main/Friends/FindFriends/FindFriendsContainer'))
const News = React.lazy(() => import('./comoinents/Main/News/News'))
const Music = React.lazy(() => import('./comoinents/Main/Music/Music'))
const Setings = React.lazy(() => import('./comoinents/Main/Setings/Setings'))

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
            <Route path='/Profile/:userID?' render={withSuspence(ProfileConatiner)} />
            <Route path='/Messager' render={withSuspence(MessagerContainer)} />
            <Route path='/Friends' render={withSuspence(FriendsContainer)} />
            <Route path='/FindFriends' render={withSuspence(FindFrendsContainer)} />
            <Route path='/News' render={withSuspence(News)} />
            <Route path='/Music' render={withSuspence(Music)} />

            <Route path='/Setings' render={withSuspence(Setings)} />
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

