import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("meow");
    return (

      <Router >
        <div className="App">
        <header className="App-header">
          {/* <img  className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Simple React App</h1>
        </header>
          {/* <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch> */}
      </div>
    </Router>
    );
  }
}

export default App;
