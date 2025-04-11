
const Item = ({ todo, handleDeleteTodo, toggleModal, setSelectedTodo, submitTodo, selectedTodo }) => {
  if(!todo) return (<></>);

  const toggleComplete = async (e) => {
    e.preventDefault();
    console.log("TOGGLE")
    await setSelectedTodo({...todo, completed: !todo.completed})
    submitTodo(e);
  }

  const input = todo.completed ? 
                (<input type="checkbox" name={`item_${todo.id}`} id={`item_${todo.id}`} onClick={toggleComplete} defaultChecked={true} />)
                : (<input type="checkbox" name={`item_${todo.id}`} id={`item_${todo.id}`} onClick={toggleComplete} defaultChecked={false} />)

  const onDelete = async (e) => {
    e.preventDefault();
    handleDeleteTodo(todo.id);
  }

  const onUpdate = async (e) => {
    e.preventDefault();
    setSelectedTodo(todo);
    toggleModal();
  }

  const dueDate = todo.month && todo.year ? `${todo.month}/${todo.year}` : "No Due Date";

  return (
    <>
    <tr key={todo.id} data-id={todo.id} >
      <td className="list_item" onClick={toggleComplete}>
      {input}
      <span className="check"></span>
      <label htmlFor={`item_${todo.id}`} onClick={onUpdate}>{todo.title} - {dueDate}</label></td>
      <td className="delete" name={todo.id} onClick={onDelete}><img src="src/images/trash.png" alt="Delete"/></td>
    </tr>
    </>
  );
}

export default Item;
