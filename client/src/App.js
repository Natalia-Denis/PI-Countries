import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ActivityCreate from './components/ActivityCreate';
import Detail from './components/Detail';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
        <Switch>
        <Route exact path= '/' component = {LandingPage}/>
        <Route exact path = '/countries' component = {Home}/>
        <Route path = '/activity' component = {ActivityCreate}/>
        <Route path = '/countries/:id' component = {Detail}/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
