import Link from "next/link";

import './navbar.css';
const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/">Tus notas</a>
                </li>
                <li className="navbar-item">
                <a href="/crearNota">Crear Nota</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;