import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./Components/Create.Components";
import EditTodo from "./Components/Edit.Components";
import TodosList from "./Components/TodosList.Components";



export default class App extends Component {
  render(){
  return (
    <Router>
    <div class="container">
    <h2>MERN-Stack Todo App</h2>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
    <Route path="/" exact component={TodosList} />
    <Route path="/edit/:id" component={EditTodo} />
    <Route path="/create" component={CreateTodo} />
    </div>
   </Router> 
  );
}
}
