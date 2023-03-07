import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='homework' />
      <Todo text='network' />
      <Todo text='webdev' />
    </div>)
}

export default App;
