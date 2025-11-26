import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  return (
    <ul className='todo-container'>
      {
        todos.map(todo =>
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        )
      }
    </ul>
  );
}
export default Todo;