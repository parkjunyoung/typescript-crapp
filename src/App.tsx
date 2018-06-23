import * as React from 'react';
import './App.css';
import Header from './Header';
import * as Router from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Accounts from './components/Accounts';

class App extends React.Component {
  public render() {
    return (
        <Router.BrowserRouter>
          <div>
              <Header />
              <Router.Route exact={true} path="/" component={Home}/>
              <Router.Route path="/posts" component={Posts}/>
              <Router.Route path="/accounts" component={Accounts}/>
          </div>
        </Router.BrowserRouter>
    );
  }
}

export default App;
