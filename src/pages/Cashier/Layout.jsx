import { Outlet } from "react-router-dom"
import { SidebarCashier } from "../../components/Navigation/Cashier/Sidebar"


export const Layout = () => {
    return (
        <>
            <SidebarCashier />
            <Outlet />
        </>
    )
}