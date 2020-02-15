import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../bootstrap.min.css'
import '../App.css'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';


library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/experience" exact component={Experience}/>
          <Route path="/education" exact component={Education}/>
          <Route path="/skills" exact component={Skills}/>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
      </div>
    );
  }
}

export default App;
