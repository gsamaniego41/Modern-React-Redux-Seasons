import React from "react";
import {NavLink, Route} from "react-router-dom";

import Seasons from "./seasons/Seasons";
import Hooks from "./hooks/Hooks";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui two item menu">
          {/* <NavLink to="/" exact className="item">
            Menu
          </NavLink> */}
          <NavLink to="/seasons" className="item">
            Seasons
          </NavLink>
          <NavLink to="/hooks" className="item">
            Hooks Simple
          </NavLink>
        </div>

        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/seasons" component={Seasons} />
        <Route path="/hooks" component={Hooks} />
      </div>
    );
  }
}

export default App;
