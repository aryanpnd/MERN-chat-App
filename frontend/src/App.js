import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/authentication/login/LoginPage';
import { Signup } from './pages/authentication/signup/Signup';
import ChatPage from './pages/ChatPage';
import Homepage from './pages/Homepage';
function App() {
  return (
    <BrowserRouter>

      <div className='App'>
        <Routes>
          <Route index element={<Homepage />} />
          <Route exact path='/chats' element={<ChatPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
