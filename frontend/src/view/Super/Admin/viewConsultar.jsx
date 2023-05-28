


import SideBar from "../../components/Sidebar"
import sidebar_menu from "../../constants/sidebar-menu"
import "../../App.css"
import Consultar from "../../pages/Consultar/consultar"

export default function ViewConsultar(){
    return(
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} /> 
            <div className='dashboard-body'>
                <Consultar/>
            </div>
        </div>
    )
}