import { BrowserRouter , Route, Switch } from 'react-router-dom';
import {NotFound, Home} from '../pages';

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;