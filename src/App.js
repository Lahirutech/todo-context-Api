import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TaskContextProvider from './contexts/TaskContext';


function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>

    </div>
  );
}

export default App;
