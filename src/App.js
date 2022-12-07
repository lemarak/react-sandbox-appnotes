import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
  );
}

export default App;
