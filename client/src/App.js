import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ActivityCreate from './components/ActivityCreate';
import Detail from './components/Detail';
import Nav from './components/Nav';
import DetailActivity from './components/DetailActivity';
import Tourism from './components/Tourism';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
        <Switch>
        <Route exact path= '/' component = {LandingPage}/>
        <Route exact path = '/countries' component = {Home}/>
        <Route exact path = '/activity' component = {ActivityCreate}/>
        <Route path = '/countries/:id' component = {Detail}/>
        <Route path = '/activity/:id' component = {DetailActivity}/>
        <Route exact path = '/tourism' component = {Tourism}/>
        <Route exact path = '/about' component = {Aboutme}/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
