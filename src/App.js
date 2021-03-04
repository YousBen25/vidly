import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Movies from "./components/Movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "./App.css";
// snippets : Route[path][component]*4
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
            <Switch>
              <Route path='/movies' component={Movies}/> 
              <Route path='/customers' component={Customers}/>
              <Route path='/rentals' component={Rentals}/>
              <Route path='/not-found' component={NotFound}/>
              <Redirect from='/' exact to='/movies'/>
              <Redirect to='/not-found' />
            </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
