import Link from "next/link";

import './navbar.css';
const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link href="/">Tus notas</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/crearNota">Crear nota</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;