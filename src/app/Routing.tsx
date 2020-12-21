import { BrowserRouter , Route, Switch } from 'react-router-dom';
import {NotFound, Home, About, UnderConstruction} from '../pages';

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-me" component={About }/>
            <Route exact path="/coding" component={UnderConstruction}/>
            <Route exact path="/music" component={UnderConstruction}/>
            <Route exact path="/games" component={UnderConstruction}/>
            <Route exact path="/contact" component={UnderConstruction}/>
            <Route exact path="/resume" component={UnderConstruction}/>
            <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;