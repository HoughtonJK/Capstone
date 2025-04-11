const AllList = () => {
/**/
  return <p>TBD AllList</p>
/*/
  return (
    <>
    {{#each todos_by_date}}
      <dl data-title="{{@key}}" data-total="{{this.length}}">
        <dt><time>{{@key}}</time></dt>
        <dd>{{this.length}}</dd>
      </dl>
    {{/each}}
    </>
  )
/**/
}

export default AllList

