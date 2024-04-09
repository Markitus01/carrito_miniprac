import { NavBar } from "./components/NavBar"
import { Routes, Route, Navigate } from "react-router-dom"
import { CompresScreen } from "./screens/CompresScreen"
import { ProductesScreen } from "./screens/ProductesScreen"

export const CarroApp = () => 
{
    return(
        <>
            <h1>Aplicació de Compres</h1>
            <hr/>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<CompresScreen></CompresScreen>}></Route>
                <Route path="/llista" element={<ProductesScreen></ProductesScreen>}></Route>
                <Route path="/*" element={<Navigate></Navigate>}></Route>
            </Routes>
        </>
    )
}