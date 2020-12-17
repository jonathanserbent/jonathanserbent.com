import Routing from './Routing';
import './App.css'
import {Navigation} from '../components/Navigation';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="App">
      <Navigation/>
      <Routing/>
    </Container>
    
  );
}

export default App;
