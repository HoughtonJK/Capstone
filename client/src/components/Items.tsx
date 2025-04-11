import { useState } from 'react';
import Title from './Title'
import List from './List'
import Modal from './Modal.tsx';
import { addTodo, updateTodo, deleteTodo } from '../services/services'

const Items = ({ todos, setTodos, currentTodos }) => {
  const blankTodo = {
           id: undefined,
           title: undefined,
           day: undefined, 
           month: undefined,
           year: undefined,
           description: undefined,
           completed: false
        };
  const [modalStyle, setModalStyle] = useState({display: 'none'})  
  const [selectedTodo, setSelectedTodo] = useState(blankTodo)

  const handleNewTodo = () => {
    toggleModal();
  }

  const toggleModal = () => {
    if(modalStyle.display === "none") {
      setModalStyle({display: "block"}) 
    } else{ 
      setModalStyle({display: "none" });
      setSelectedTodo(blankTodo)
    }
  }

  const submitTodo = async (e) => {
    e.preventDefault();
    console.log(selectedTodo);
    if(!selectedTodo.id) {
      setTodos(todos.concat(await addTodo(selectedTodo)));
    } else {
      let updated = await updateTodo(selectedTodo.id, selectedTodo);
      console.log("Updated:", updated)
      let updatedTodos = todos.map(todo => (todo.id === updated.id) ? updated : todo);
      setTodos(await updatedTodos);
    }
    toggleModal()
  }

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
  <div id="items" >
    <header>
      <Title currentTodos={currentTodos}/>
    </header>
    <main>
      <label htmlFor="new_item" onClick={handleNewTodo}>
        <img src="src/images/plus.png" alt="Add Todo Item" />
        <h2>Add new to do</h2>
      </label>
      <table cellSpacing="0">
        <tbody>
          <List todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                selectedTodo={selectedTodo}
                setSelectedTodo={setSelectedTodo}
                toggleModal={toggleModal}
                submitTodo={submitTodo}
                selectedTodo={selectedTodo}
          />
        </tbody>
      </table>
      <Modal todos={todos}
             modalStyle={modalStyle}
             toggleModal={toggleModal}
             submitTodo={submitTodo}
             selectedTodo={selectedTodo}
             setSelectedTodo={setSelectedTodo}
      />

    </main>
  </div>
    </>
  )
}


export default Items;
