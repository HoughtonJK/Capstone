import {useEffect} from 'react'
const Title = ({ currentTodos }) => {
/*/
  return (<p>TBD Title</p>)
/*/

  let title = "All Todos"
  return (
    <>
      <label htmlFor="sidebar_toggle">
        <img src="src/images/hamburger.png" alt="Toggle Sidebar" />
      </label>
      <dl>
        <dt><time>{title}</time></dt>
        <dd>{currentTodos.length}</dd>
      </dl>
    </>
  )
/**/
}

export default Title
