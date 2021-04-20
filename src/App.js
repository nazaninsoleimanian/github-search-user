import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorPage, Dashboard, LoginPage} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/profile/:username' component={Dashboard}/>
        <Route path='*' component={ErrorPage}/>
      </Switch>
    </Router>
    
  );
}

export default App;
