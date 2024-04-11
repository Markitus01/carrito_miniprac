import { NavBar } from "./Components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { CompresScreen } from "./screens/CompresScreen";
import { CarroScreen } from "./screens/CarroScreen";
import { ProductesProvider } from "./context/ProductesProvider";
import { CompresProvider } from "./context/CompresProvider";

export const CarroApp =()=>{
    return(
        <ProductesProvider> 
            <CompresProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<CarroScreen/>}></Route>
                    <Route path="/llista" element={<CompresScreen/>}></Route>
                    <Route path="/*" element={<Navigate to="/"/>}></Route>
                </Routes>
            </CompresProvider>
        </ProductesProvider>
    )
}