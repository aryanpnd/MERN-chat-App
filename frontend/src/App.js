import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/authentication/login/LoginPage';
import { Signup } from './pages/authentication/signup/Signup';
import ChatPage from './pages/ChatPage';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className='App'>
      <Switch>

        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/chats" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
