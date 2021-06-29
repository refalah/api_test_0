import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import Home from './Home';
import Test from './Test';
import Test2 from './Test2';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path='/' exact component={Home}></Route> */}
        <Route path='/' exact component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
