import React from 'react';
import "./styles/App.css"
import { Route, Switch} from "react-router-dom"
import {TransitionGroup, CSSTransition} from "react-transition-group"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Portfolio from "./pages/Portfolio"
import Dropdown from "./components/Dropdown"

function App() {
  return (
    <>
      <Dropdown />
      <Contact />
      <Route 
        render={({location}) => (
         
                <Switch location={location}>
                  <Route exact path="/about" component={Home} />
                  <Route exact path="/portfolio/" component={Portfolio} />
                </Switch>
           
        )}/>
      <Footer />
      
     
    </>
  );
}

export default App;
