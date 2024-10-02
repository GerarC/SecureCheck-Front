import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Empresastable from "../../components/empresastable/Empresastable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Empresastable/>
    </div>
  </div>

  )
}

export default List