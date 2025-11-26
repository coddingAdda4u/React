import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  return (
    <div className='container'>
      <h1>Todo with Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App
