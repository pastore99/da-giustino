import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { camere, recensioni, info } from '../data/data'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Home() {
    return (
        <div className="pt-16">

            {/* HERO */}
            <section
                className="relative h-screen flex items-center justify-center text-center"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/agriturismo/1600/900)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <motion.div
                    className="relative z-10 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Radda in Chianti — Toscana</p>
                    <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Benvenuti<br />da Giustino
                    </h1>
                    <p className="text-stone-200 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                        Un angolo autentico di Toscana tra ulivi e vigneti. Soggiorna, assapora, respira.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/prenota" className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-3 rounded transition-colors duration-200">
                            Prenota una stanza
                        </Link>
                        <Link to="/ristorante" className="border border-white text-white hover:bg-white hover:text-stone-900 font-semibold px-8 py-3 rounded transition-colors duration-200">
                            Scopri il ristorante
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* CHI SIAMO */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">La nostra storia</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800 mb-6">Una famiglia,<br />una passione</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            L'Agriturismo Da Giustino nasce nel 1987 dalla passione di Giustino Ferretti per la terra e l'ospitalità toscana. Quello che era un semplice podere di famiglia è diventato nel tempo un luogo di accoglienza autentica.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-8">
                            Coltiviamo il nostro orto, produciamo l'olio extravergine e allevamo animali da cortile. La cucina è quella di sempre — ricette tramandate di generazione in generazione.
                        </p>
                        <Link to="/contatti" className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-6 py-3 rounded transition-colors duration-200">
                            Scopri di più
                        </Link>
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <img
                            src="https://picsum.photos/seed/toscana/700/500"
                            alt="Agriturismo Da Giustino"
                            className="rounded-xl shadow-xl w-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CAMERE */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Dove dormire</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800">Le nostre camere</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {camere.map((camera, i) => (
                            <motion.div
                                key={camera.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-stone-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <img src={camera.immagine} alt={camera.nome} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-serif font-bold text-stone-800 text-lg mb-1">{camera.nome}</h3>
                                    <p className="text-stone-500 text-sm mb-3 line-clamp-2">{camera.descrizione}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-amber-600 font-bold">€{camera.prezzo}<span className="text-stone-400 text-xs font-normal">/notte</span></span>
                                        <Link to="/prenota" className="text-xs bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded transition-colors">Prenota</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/camere" className="inline-block border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white font-semibold px-8 py-3 rounded transition-colors duration-200">
                            Vedi tutte le camere
                        </Link>
                    </div>
                </div>
            </section>

            {/* RISTORANTE */}
            <section
                className="py-24 relative"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/cucina/1600/700)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-stone-900/70" />
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="relative z-10 text-center px-4"
                >
                    <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Cucina toscana</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Il nostro ristorante</h2>
                    <p className="text-stone-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Prodotti del territorio, ricette della tradizione e vini del Chianti. Pranzo e cena con vista sui vigneti.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/ristorante" className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-3 rounded transition-colors duration-200">
                            Vedi il menu
                        </Link>
                        <Link to="/prenota" className="border border-white text-white hover:bg-white hover:text-stone-900 font-semibold px-8 py-3 rounded transition-colors duration-200">
                            Prenota un tavolo
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* RECENSIONI */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Cosa dicono di noi</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800">Recensioni</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recensioni.map((r, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white rounded-xl p-6 shadow"
                            >
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: r.stelle }).map((_, j) => (
                                        <span key={j} className="text-amber-400 text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">"{r.testo}"</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-stone-800 text-sm">{r.nome}</span>
                                    <span className="text-stone-400 text-xs">{r.data}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINALE */}
            <section className="py-20 bg-amber-500">
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-center px-4"
                >
                    <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Pronto a venirci a trovare?</h2>
                    <p className="text-stone-800 text-lg mb-8 max-w-xl mx-auto">Verifica la disponibilità e prenota il tuo soggiorno o la tua cena direttamente online.</p>
                    <Link to="/prenota" className="inline-block bg-stone-900 hover:bg-stone-700 text-white font-semibold px-10 py-4 rounded text-lg transition-colors duration-200">
                        Prenota ora
                    </Link>
                </motion.div>
            </section>

        </div>
    )
}