import Item from "./Item"

const List = ({ todos, handleDeleteTodo, selectedTodo, setSelectedTodo, toggleModal, submitTodo }) => {

  const sortTodos = () => {
    const order = (a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      if ((a.month && a.year) && !(b.month && b.year)) return -1;
      if (!(a.month && a.year) && (b.month && b.year)) return 1;
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    }
    return todos.map(todo=>todo).sort(order);

  }

  return (
    <>
    {sortTodos().map(todo => {
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
