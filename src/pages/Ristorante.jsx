import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { menu, info } from '../data/data'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const categorie = [
    { key: 'antipasti', label: 'Antipasti', icona: '🥗' },
    { key: 'primi', label: 'Primi', icona: '🍝' },
    { key: 'secondi', label: 'Secondi', icona: '🥩' },
    { key: 'dolci', label: 'Dolci', icona: '🍮' },
]

export default function Ristorante() {
    return (
        <div className="pt-16">

            {/* HERO */}
            <section
                className="h-64 md:h-80 flex items-center justify-center text-center relative"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/ristorante/1600/600)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    className="relative z-10 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Cucina toscana</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Il nostro ristorante</h1>
                </motion.div>
            </section>

            {/* INTRO */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">La nostra cucina</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800 mb-6">Tradizione e territorio</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            La cucina di Da Giustino è quella delle nonne toscane — semplice, genuina, profumata. Usiamo prodotti del nostro orto e del territorio: carni chianine, pecorino di Pienza, tartufo delle colline senesi.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            I vini sono selezionati tra le migliori cantine del Chianti Classico. Ogni piatto racconta una storia di famiglia e di terra.
                        </p>
                        <div className="flex flex-col gap-2 text-sm text-stone-600">
                            <div className="flex items-center gap-2">
                                <span className="text-amber-500">🕛</span>
                                <span>Pranzo: {info.orariRistorante.pranzo}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-amber-500">🌙</span>
                                <span>Cena: {info.orariRistorante.cena}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-amber-500">🔒</span>
                                <span>Chiuso il {info.orariRistorante.chiusura}</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <img
                            src="https://picsum.photos/seed/cucina2/700/500"
                            alt="Cucina Da Giustino"
                            className="rounded-xl shadow-xl w-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* MENU */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Cosa mangiare</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800">Il menu</h2>
                    </motion.div>

                    <div className="flex flex-col gap-16">
                        {categorie.map((cat, ci) => (
                            <motion.div
                                key={cat.key}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: ci * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
                                    <span className="text-3xl">{cat.icona}</span>
                                    <h3 className="font-serif text-2xl font-bold text-stone-800">{cat.label}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {menu[cat.key].map((piatto, pi) => (
                                        <motion.div
                                            key={pi}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: pi * 0.08 }}
                                            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-start gap-4"
                                        >
                                            <div>
                                                <h4 className="font-semibold text-stone-800 mb-1">{piatto.nome}</h4>
                                                <p className="text-stone-500 text-sm leading-relaxed">{piatto.descrizione}</p>
                                            </div>
                                            <span className="text-amber-600 font-bold text-lg whitespace-nowrap">€{piatto.prezzo}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-stone-900">
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-center px-4"
                >
                    <h2 className="font-serif text-4xl font-bold text-white mb-4">Prenota il tuo tavolo</h2>
                    <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
                        Disponibile a pranzo e a cena, dal mercoledì alla domenica. Prenotazione consigliata.
                    </p>
                    <Link
                        to="/prenota"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-10 py-4 rounded text-lg transition-colors duration-200"
                    >
                        Prenota un tavolo →
                    </Link>
                </motion.div>
            </section>

        </div>
    )
}