import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/camere', label: 'Camere' },
    { to: '/ristorante', label: 'Ristorante' },
    { to: '/prenota', label: 'Prenota' },
    { to: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
    const [aperto, setAperto] = useState(false)
    const location = useLocation()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-stone-700">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

                {/* Logo */}
                <Link to="/" className="text-amber-400 font-serif text-xl font-bold tracking-wide">
                    Da Giustino
                </Link>

                {/* Links desktop */}
                <ul className="hidden md:flex gap-8">
                    {links.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`text-sm tracking-wide transition-colors duration-200 ${
                                    location.pathname === link.to
                                        ? 'text-amber-400 font-semibold'
                                        : 'text-stone-300 hover:text-amber-400'
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA desktop */}
                <Link
                    to="/prenota"
                    className="hidden md:block bg-amber-500 hover:bg-amber-600 text-stone-900 text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
                >
                    Prenota ora
                </Link>

                {/* Hamburger mobile */}
                <button
                    onClick={() => setAperto(!aperto)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-0.5 bg-stone-300 transition-all duration-300 ${aperto ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-stone-300 transition-all duration-300 ${aperto ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-stone-300 transition-all duration-300 ${aperto ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

            </div>

            {/* Menu mobile */}
            {aperto && (
                <div className="md:hidden bg-stone-900 border-t border-stone-700 px-4 py-4 flex flex-col gap-4">
                    {links.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setAperto(false)}
                            className={`text-sm tracking-wide ${
                                location.pathname === link.to
                                    ? 'text-amber-400 font-semibold'
                                    : 'text-stone-300'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/prenota"
                        onClick={() => setAperto(false)}
                        className="bg-amber-500 text-stone-900 text-sm font-semibold px-4 py-2 rounded text-center"
                    >
                        Prenota ora
                    </Link>
                </div>
            )}
        </nav>
    )
}