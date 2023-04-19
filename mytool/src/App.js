import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Graph from "./Graph";
import Uploader from "./uploader";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/Graphpage">
            <Graphpage />
          </Route>
        </Switch>
      </Router> */}
      <Router>
        <Routes>
          <Route path="/Graph" element={<Graph />} />
          <Route path="/" element={<Uploader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
