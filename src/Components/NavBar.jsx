import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CompresContext } from "../context/CompresContext";
import { useContext } from "react";

export const NavBar = () =>{
    const { llistaCompres } = useContext(CompresContext);

    return(
        <>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Aplicació Compres</NavLink>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/llista" className="nav-link" aria-current="page">Llistat de Productes</NavLink>
                            </li>
                        </ul>
                        <NavLink to="/">
                            <Badge badgeContent={llistaCompres.length} color="secondary">
                                <ShoppingCart color="action" />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )

}