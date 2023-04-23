import TasksProvider from './TasksProvider';

import '../css/App.css'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {


  return ( 
    <div className="App">
      <TasksProvider>
        <TaskForm />
        <TaskList />
      </TasksProvider>
    </div>
   );
}
 
export default App;