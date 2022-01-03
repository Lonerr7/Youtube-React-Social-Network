import { Route, BrowserRouter, Routes } from 'react-router-dom';

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

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
