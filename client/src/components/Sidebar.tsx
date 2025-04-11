import AllTodos from './AllTodos';
import AllList from './AllList';
import CompletedTodos from './CompletedTodos';
import CompletedList from './CompletedList';

const Sidebar = ({ todos }) => {
  let done = todos.filter(todo => todo.completed)

  return (
    <div id="sidebar">
      <section id="all">
        <div id="all_todos">
          <AllTodos length={todos.length}/>
        </div>
        <article id="all_lists">
          <AllList />
        </article>
      </section>
      <section className="completed" id="completed_items">
        <div id="completed_todos">
          <CompletedTodos length={done.length}/>
        </div>
        <article id="completed_lists">
           <CompletedList />
         </article>
      </section>
    </div>
  );
}

export default Sidebar;
