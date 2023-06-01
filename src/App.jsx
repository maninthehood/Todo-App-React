import * as React from 'react';

export default function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const setTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo here!"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" onClick={() => saveTodo()}>
        Save
      </button>
      <ul>
        <li>{todo}</li>
      </ul>
    </div>
  );
}
