import { Route, Routes } from 'react-router-dom';

import './App.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderCotainer';
import Login from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) return <Preloader />;

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper__content">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
