import Item from "./Item"

const List = ({ todos, handleDeleteTodo, selectedTodo, setSelectedTodo, toggleModal, submitTodo }) => {

  return (
    <>
    {todos.map(todo => {
      return <Item key={todo.id}
                   todo={todo}
                   handleDeleteTodo={handleDeleteTodo}
                   toggleModal={toggleModal}
                   setSelectedTodo={setSelectedTodo}
                   submitTodo={submitTodo}
                   selectedTodo={selectedTodo}
             />
    })}
    </>
  );
}

export default List
