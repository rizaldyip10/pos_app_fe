import { Route, createRoutesFromElements } from "react-router-dom"
import { Layout } from "../pages/Cashier/Layout"
import { Home } from "../pages/Cashier/Home"
import { CashierTransaction } from "../pages/Cashier/CashierTransaction"
import { CashierSetting } from "../pages/Cashier/CashierSetting"

const Routes = (
    <>
        <Route path="/" element={<Layout />} >
            <Route path="" element={<Home />} />
            <Route path="transaction" element={<CashierTransaction />} />
            <Route path="setting" element={<CashierSetting />} />
        </Route>
    </>
)

export const routes = createRoutesFromElements(Routes)