import React from 'react';
import { Route, Switch} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
