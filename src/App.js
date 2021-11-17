
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Logo from './pages/Header/Logo/Logo';
import Banner from './pages/Header/Banner/Banner';

function App() {
  return (
    <div>
      <Router>
        <Logo />

        <Switch>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
