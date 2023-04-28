


import SideBar from "../../components/Sidebar"
import sidebar_menu from "../../constants/sidebar-menu"
import "../../App.css"
import Eliminar from "../../pages/Eliminar/eliminar"

export default function ViewEliminar(){
    return(
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} /> 
            <div className='dashboard-body'>
                <Eliminar/>
            </div>
        </div>
    )
}