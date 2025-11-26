import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('')
  }
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder='Enter new Todo'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;
