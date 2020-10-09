import React from 'react';
import { Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <>
  
      <Contact />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio/" component={Portfolio} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
