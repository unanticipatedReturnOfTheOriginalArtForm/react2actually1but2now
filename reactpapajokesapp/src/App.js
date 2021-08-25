import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Joke from './components/Joke';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Hello Dave!</h1>
        <div className="container mx-auto">
          <Route path="/" exact component={Joke}/>
          <Route path="/about" exact component={About}/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
