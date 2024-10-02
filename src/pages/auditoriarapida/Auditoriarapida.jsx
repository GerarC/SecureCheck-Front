import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./auditoriarapida.scss"

const Auditoriarapida = () => {
  return (
    <div className="auditoriarapida">
      <Sidebar />
      <div className="auditoriarapidaContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>

  )
}

export default Auditoriarapida
