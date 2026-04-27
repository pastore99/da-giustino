import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { camere } from '../data/data'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Camere() {
    return (
        <div className="pt-16">

            {/* HERO */}
            <section
                className="h-64 md:h-80 flex items-center justify-center text-center relative"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/camere/1600/600)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    className="relative z-10 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Dove dormire</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Le nostre camere</h1>
                </motion.div>
            </section>

            {/* CAMERE */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12">
                    {camere.map((camera, i) => (
                        <motion.div
                            key={camera.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <img
                                src={camera.immagine}
                                alt={camera.nome}
                                className={`w-full h-64 md:h-auto object-cover ${i % 2 !== 0 ? 'md:order-2' : ''}`}
                            />
                            <div className={`p-8 flex flex-col justify-between ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                                <div>
                                    <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2">
                                        {camera.posti === 1 ? 'Singola' : camera.posti === 2 ? 'Doppia / Matrimoniale' : 'Familiare'}
                                    </p>
                                    <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">{camera.nome}</h2>
                                    <p className="text-stone-600 leading-relaxed mb-6">{camera.descrizione}</p>
                                    <ul className="grid grid-cols-2 gap-2 mb-6">
                                        {camera.servizi.map((s, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                                                <span className="text-amber-500">✓</span> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-amber-600">
                    €{camera.prezzo}
                      <span className="text-base text-stone-400 font-normal"> / notte</span>
                  </span>
                                    <Link
                                        to="/prenota"
                                        state={{ camera: camera.id }}
                                        className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-6 py-3 rounded transition-colors duration-200"
                                    >
                                        Prenota →
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* INFO UTILI */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { titolo: 'Check-in', valore: 'dalle 15:00', icona: '🕒' },
                        { titolo: 'Check-out', valore: 'entro le 11:00', icona: '🔑' },
                        { titolo: 'Colazione', valore: 'inclusa 8:00 – 10:00', icona: '☕' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-stone-50 rounded-xl p-6"
                        >
                            <div className="text-4xl mb-3">{item.icona}</div>
                            <h3 className="font-semibold text-stone-800 mb-1">{item.titolo}</h3>
                            <p className="text-stone-500 text-sm">{item.valore}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SERVIZI AGGIUNTIVI */}
            <section className="py-16 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Durante il soggiorno</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800">Cosa offriamo</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icona: '🚴', titolo: 'Noleggio bici', desc: 'Esplora le colline del Chianti in sella a una bici da trekking' },
                            { icona: '🍷', titolo: 'Degustazione vini', desc: 'Tour guidato in cantina con degustazione di Chianti Classico' },
                            { icona: '🌿', titolo: 'Orto biologico', desc: 'Visita il nostro orto e raccogli i prodotti freschi di stagione' },
                            { icona: '🐓', titolo: 'Fattoria didattica', desc: 'Scopri i nostri animali — perfetto per i bambini' },
                            { icona: '🧖', titolo: 'Massaggi', desc: 'Trattamenti benessere su prenotazione nella nostra area relax' },
                            { icona: '🥾', titolo: 'Escursioni', desc: 'Trekking guidato tra boschi e vigneti con guida naturalistica' },
                            { icona: '🍳', titolo: 'Corsi di cucina', desc: 'Impara a fare la pasta fresca e i dolci tipici toscani' },
                            { icona: '🚗', titolo: 'Transfer', desc: 'Servizio navetta da e per Siena, Firenze e le stazioni ferroviarie' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                            >
                                <div className="text-4xl mb-3">{s.icona}</div>
                                <h3 className="font-semibold text-stone-800 mb-2 text-sm">{s.titolo}</h3>
                                <p className="text-stone-500 text-xs leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEI DINTORNI */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Cosa visitare</p>
                        <h2 className="font-serif text-4xl font-bold text-stone-800">Nei dintorni</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { luogo: 'Siena', distanza: '35 km', desc: 'Piazza del Campo, il Duomo e il Palio. Una delle città medievali più belle d\'Italia.', immagine: 'https://picsum.photos/seed/siena/600/400' },
                            { luogo: 'Greve in Chianti', distanza: '18 km', desc: 'Capitale del Chianti Classico, con enoteca regionale e mercato tipico del sabato.', immagine: 'https://picsum.photos/seed/greve/600/400' },
                            { luogo: 'Castello di Brolio', distanza: '22 km', desc: 'Dimora storica dei Barone Ricasoli, tra i produttori storici del Chianti Classico.', immagine: 'https://picsum.photos/seed/brolio/600/400' },
                        ].map((p, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <img src={p.immagine} alt={p.luogo} className="w-full h-48 object-cover" />
                                <div className="p-5 bg-stone-50">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-serif font-bold text-stone-800 text-lg">{p.luogo}</h3>
                                        <span className="text-xs text-amber-600 font-semibold bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">{p.distanza}</span>
                                    </div>
                                    <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINALE */}
            <section className="py-20 bg-stone-900">
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-center px-4"
                >
                    <h2 className="font-serif text-4xl font-bold text-white mb-4">Hai trovato la camera giusta?</h2>
                    <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">Controlla la disponibilità e prenota direttamente online in pochi secondi.</p>
                    <Link to="/prenota" className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-10 py-4 rounded text-lg transition-colors duration-200">
                        Prenota ora →
                    </Link>
                </motion.div>
            </section>

        </div>
    )
}