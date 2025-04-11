const CompletedList = () => {
/**/
  return (<p>TBD CompletedList</p>)
/*/
  return (
    <>  
    {{#each done_todos_by_date}}
      <dl data-title="{{@key}}" data-total="{{this.length}}" id="{{@key}}">
        <dt><time>{{@key}}</time></dt>
        <dd>{{this.length}}</dd>
      </dl>
    {{/each}}
    </>
  )
/**/
}

export default CompletedList
