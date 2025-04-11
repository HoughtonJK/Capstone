const CompletedTodos = ({ length }) => {
  
  return (
    <>
      <header data-title="Completed" data-total="{length}" id="all_done_header">
        <dl>
          <dt>Completed</dt>
          <dd>{length}</dd>
        </dl>
      </header>
    </>
  )
}

export default CompletedTodos
