
import logo from './logo.svg';
import './App.css';
import Welcome from './pages/welcomepage';
import Den from './pages/den';
import Pride from './pages/pride';
import Mint from './pages/mint';
import Roadmap from './pages/roadmap';
import Lion from './pages/lion';
import Landing from './pages/landingpage';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
function App() {




  return (
    <Router>
     <>
    
   
<Switch>
<Route path="/mint"  component={Mint} />
<Route path="/lion"  component={Lion} />
<Route path="/roadmap"  component={Roadmap} />
<Route path="/den"  component={Den} />
<Route path="/pride"  component={Pride} />
      <Route path="/home"  component={Landing} />
      <Route exact path="/"   component={Welcome} />
    </Switch>
    </>
   </Router>
    
  );
}

export default App;
