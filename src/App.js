import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SpDetailContainer from './containers/SpDetailContainer';
import SpecialContainer from './containers/SpecialContainer';
import JoinPage from './pages/member/JoinPage';
import Login from './pages/member/Login';
import IdFind from './pages/member/IdFind';
import PassFind from './pages/member/PassFind';
import EditPassword from './pages/member/EditPassword';
import WriteEvent from './pages/WriteEvent';
import WriteRoom from './pages/WriteRoom';
import RoomContainer from './containers/RoomContainer';
import RoomDetailContainer from './containers/RoomDetailContainer';
import Example from './pages/Example';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/special" element={<SpecialContainer isMain={false} limits={10} />} />
        <Route path="/special/:no" element={<SpDetailContainer />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<IdFind />} />
        <Route path="/findpass" element={<PassFind />} />
        <Route path="/updatepass" element={<EditPassword />} />
        <Route path="/writeevent" element={<WriteEvent />} />
        <Route path="/writeroom" element={<WriteRoom />} />
        <Route path="/room" element={<RoomContainer />} />
        <Route path="/roomdetail/:no" element={<RoomDetailContainer />} />
        <Route path="test" element={<Example />} />
        <Route path="/reservation/*" element={<Reservation />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
