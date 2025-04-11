const AllTodos = ({ length }) => {

  return (
    <>
      <header data-title="All Todos" data-total={length} id="all_header">
        <dl>
          <dt>All Todos</dt>
          <dd>{length}</dd>
        </dl>
      </header>
    </>
  );
}


export default AllTodos
