import { useState, useEffect } from 'react'
//import './App.css'
import { Todo } from './types/types.ts'
import './todo_v2.css'
import List from "./components/List"
import Sidebar from "./components/Sidebar"
import Items from "./components/Items"
import { getTodos, getTodo, addTodo, deleteTodo, updateTodo } from './services/services'

const buildSampleTodo = () => {
  let i = 1
  return () => {
    return {
      'title': `todo ${i++}`,
      'day': '11',
      'month': '11',
      'year': '2017',
      'completed': false,
      'description': 'sample todo'
    }
  }
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodos, setCurrentTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    const fetchTodos = async () => { 
      const result = await getTodos();
      setTodos(result);
    }
    fetchTodos();
  }, []);

  const add = async () => {
    const result = await addTodo(buildSampleTodo()());
    console.log(result);
  };

  return (
    <>
      <Sidebar todos={todos} />
      <Items todos={todos} setTodos={setTodos} currentTodos={currentTodos} />
    </>
  )
}

export default App
