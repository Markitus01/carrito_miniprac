import { NavLink } from "react-router-dom"
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

export const NavBar = () =>
{
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Aplicació Compres</NavLink>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/carro" className="nav-link" aria-current="page">LLista de Productes</NavLink>
                            </li>
                        </ul>

                        <NavLink to="/">
                            <Badge badgeContent={14} color="secondary">
                                <ShoppingCart color="action"/>
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}