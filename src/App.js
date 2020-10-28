import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import TaskPage from "./pages/task";
import ProjectsPage from "./pages/project";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/tasks" component={TaskPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </Router>
  );
}

export default App;
