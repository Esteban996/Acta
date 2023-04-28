import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/admin/registro',
        title: 'Registro',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/admin/modificar',
        title: 'Modificar',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/admin/eliminar',
        title: 'Eliminar',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/admin/consultar',
        title: 'Consultar',
    }
]

export default sidebar_menu;