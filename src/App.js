import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ListNotes} />
        <Route path="/edit" component={MainArea} />
      </Switch>
    </Router>
  );
}

export default App;
