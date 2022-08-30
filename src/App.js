
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todos from './components/Todos';

// import { Route, Switch, NavLink, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
