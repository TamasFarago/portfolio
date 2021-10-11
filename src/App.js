import React from 'react';
import "./styles/App.css"
import { Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Portfolio from "./pages/Portfolio"
import Dropdown from "./components/Dropdown"
import Mobile from './pages/Mobile';
import Desktop from './pages/Desktop';
import Error from "./pages/Error"
function App() {


  return (
    <>
      <Dropdown />
      <Contact />
      
      <Route 
        render={({location}) => (
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/projects/" component={Portfolio} />
                  <Route exact path="/projects/mobile" component={Mobile} />
                  <Route exact path="/projects/desktop" component={Desktop} />
                  <Route component={Error} />
                </Switch>
        )}/>
       
      <Footer />
      
     
    </>
  );
}

export default App;
