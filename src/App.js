
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todos from './component/Todos';
import Todo from './component/Todo';
import Edit from './component/EditTodo'
// import Create from './components/CreateTodo';

// import { Route, Switch, NavLink, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/:id' element={<Todo />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
