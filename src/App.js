import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayNote from "./Components/DisplayNote/DisplayNote";
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ListNotes} />
        <Route exact path="/edit" component={MainArea} />
        <Route exact path="/displaynote/:id" component={DisplayNote} />
      </Switch>
    </Router>
  );
}

export default App;
