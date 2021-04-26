import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from "./components/Start/Start";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Start} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
