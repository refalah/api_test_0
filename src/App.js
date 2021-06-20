import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
