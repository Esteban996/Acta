import Modificar from "../../pages/Modificar/modificar"
import SideBar from "../../components/Sidebar"
import sidebar_menu from "../../constants/sidebar-menu"
import "../../App.css"

export default function ViewOrder(){
    return(
        <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} /> 
            <div className='dashboard-body'>
                <Modificar/>
            </div>
        </div>
    )
}