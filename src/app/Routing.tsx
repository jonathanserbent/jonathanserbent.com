import { BrowserRouter , Route, Switch } from 'react-router-dom';
import {NotFound, Home, About, UnderConstruction, Coding, Contact, Resume} from '../pages';

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-me" component={About }/>
            <Route exact path="/coding" component={Coding}/>
            <Route exact path="/music" component={UnderConstruction}/>
            <Route exact path="/games" component={UnderConstruction}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/resume" component={Resume}/>
            <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;