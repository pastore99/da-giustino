import { Link } from 'react-router-dom'
import { info } from '../data/data'

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 border-t border-stone-700">
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-amber-400 font-serif text-xl font-bold mb-3">Da Giustino</h3>
                    <p className="text-sm leading-relaxed">
                        Un angolo di Toscana autentica tra ulivi e vigneti. Ospitalità, cucina e natura a Radda in Chianti.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href={info.social.instagram} target="_blank" rel="noreferrer"
                           className="text-stone-400 hover:text-amber-400 text-sm transition-colors">Instagram</a>
                        <a href={info.social.facebook} target="_blank" rel="noreferrer"
                           className="text-stone-400 hover:text-amber-400 text-sm transition-colors">Facebook</a>
                    </div>
                </div>

                {/* Link rapidi */}
                <div>
                    <h4 className="text-stone-200 font-semibold mb-3 text-sm tracking-wide uppercase">Esplora</h4>
                    <ul className="flex flex-col gap-2">
                        {[['/', 'Home'], ['/camere', 'Camere'], ['/ristorante', 'Ristorante'], ['/prenota', 'Prenota'], ['/contatti', 'Contatti']].map(([to, label]) => (
                            <li key={to}>
                                <Link to={to} className="text-sm hover:text-amber-400 transition-colors">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contatti */}
                <div>
                    <h4 className="text-stone-200 font-semibold mb-3 text-sm tracking-wide uppercase">Contatti</h4>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li>{info.indirizzo}</li>
                        <li>
                            <a href={`tel:${info.telefono}`} className="hover:text-amber-400 transition-colors">{info.telefono}</a>
                        </li>
                        <li>
                            <a href={`mailto:${info.email}`} className="hover:text-amber-400 transition-colors">{info.email}</a>
                        </li>
                        <li className="mt-2">Check-in: {info.checkIn} — Check-out: {info.checkOut}</li>
                    </ul>
                </div>

            </div>
            <div className="border-t border-stone-700 py-4 text-center text-xs text-stone-600">
                © {new Date().getFullYear()} Agriturismo Da Giustino — Tutti i diritti riservati
            </div>
        </footer>
    )
}