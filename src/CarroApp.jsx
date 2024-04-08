import { NavBar } from "./components/NavBar"
import { Routes } from "react-router-dom"

export const CarroApp = () => 
{
    return(
        <>
            <h1>Aplicació de Compres</h1>
            <hr/>
            <NavBar></NavBar>
            <Routes>
                {/* TODO navigation routes <Route></Route> */}
            </Routes>
        </>
    )
}