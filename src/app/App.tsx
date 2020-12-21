import Routing from './Routing';
import './App.css'
import {Navigation} from '../components/Navigation';
import {Footer} from '../components/Footer/Footer';
import { Banner } from '../components/Home/Banner/Banner';

function App() {
  return (
    <div className="App d-flex flex-column">
      <div className="flex-fill">
        <Banner/> {/* Only shows up on Home Page */}
        <Navigation/>
        <Routing/>
      </div>
      <div className="flex-shrink-0">
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
