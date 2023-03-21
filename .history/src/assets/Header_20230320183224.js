import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="text-sm font-medium text-zinc-600 dark:text-zinc-400" to="/">Jack Turner</Link>
            <div className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10" id="navbarNav">
                <ul className="mt-6">
                    <li className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Header;
