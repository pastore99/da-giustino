import { useState } from 'react'
import { motion } from 'framer-motion'
import { info } from '../data/data'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Contatti() {
    const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })
    const [errori, setErrori] = useState({})
    const [inviato, setInviato] = useState(false)

    const inputClass = (campo) =>
        `w-full border rounded-lg px-4 py-3 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
            errori[campo] ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white'
        }`

    const valida = () => {
        const e = {}
        if (!form.nome.trim()) e.nome = 'Inserisci il nome'
        if (!form.email.trim()) e.email = 'Inserisci l\'email'
        if (!form.messaggio.trim()) e.messaggio = 'Inserisci un messaggio'
        return e
    }

    const submit = () => {
        const e = valida()
        if (Object.keys(e).length > 0) { setErrori(e); return }
        setInviato(true)
        setErrori({})
    }

    return (
        <div className="pt-16">

            {/* HERO */}
            <section
                className="h-56 flex items-center justify-center text-center relative"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/contatti/1600/400)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    className="relative z-10 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Siamo qui per te</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Contattaci</h1>
                </motion.div>
            </section>

            {/* INFO + FORM */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* INFO */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Dove siamo</p>
                        <h2 className="font-serif text-3xl font-bold text-stone-800 mb-8">Vieni a trovarci</h2>

                        <div className="flex flex-col gap-6">
                            {[
                                { icona: '📍', titolo: 'Indirizzo', valore: info.indirizzo },
                                { icona: '📞', titolo: 'Telefono', valore: info.telefono, href: `tel:${info.telefono}` },
                                { icona: '✉️', titolo: 'Email', valore: info.email, href: `mailto:${info.email}` },
                                { icona: '🕒', titolo: 'Ricezione', valore: info.orariRicezione },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                                        {item.icona}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">{item.titolo}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
                                                {item.valore}
                                            </a>
                                        ) : (
                                            <p className="text-stone-700 font-medium">{item.valore}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Orari ristorante */}
                        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-stone-800 mb-4 text-sm uppercase tracking-wide">Orari ristorante</h3>
                            <div className="flex flex-col gap-2 text-sm text-stone-600">
                                <div className="flex justify-between">
                                    <span>Pranzo</span>
                                    <span className="font-medium text-stone-800">{info.orariRistorante.pranzo}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Cena</span>
                                    <span className="font-medium text-stone-800">{info.orariRistorante.cena}</span>
                                </div>
                                <div className="flex justify-between border-t border-stone-100 pt-2 mt-1">
                                    <span>Giorno di chiusura</span>
                                    <span className="font-medium text-red-500">{info.orariRistorante.chiusura}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FORM */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {inviato ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-2xl shadow-sm p-10 text-center h-full flex flex-col items-center justify-center"
                            >
                                <div className="text-6xl mb-4">✅</div>
                                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">Messaggio inviato!</h3>
                                <p className="text-stone-500 text-sm mb-6">Ti risponderemo entro 24 ore all'indirizzo <span className="font-semibold text-stone-700">{form.email}</span>.</p>
                                <button
                                    onClick={() => { setForm({ nome: '', email: '', messaggio: '' }); setInviato(false) }}
                                    className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
                                >
                                    Invia un altro messaggio
                                </button>
                            </motion.div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
                                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-2">Scrivici</h2>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Nome *</label>
                                    <input
                                        type="text"
                                        className={inputClass('nome')}
                                        placeholder="Mario Rossi"
                                        value={form.nome}
                                        onChange={e => setForm({ ...form, nome: e.target.value })}
                                    />
                                    {errori.nome && <p className="text-red-500 text-xs mt-1">{errori.nome}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Email *</label>
                                    <input
                                        type="email"
                                        className={inputClass('email')}
                                        placeholder="mario.rossi@email.it"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                    />
                                    {errori.email && <p className="text-red-500 text-xs mt-1">{errori.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Messaggio *</label>
                                    <textarea
                                        rows={6}
                                        className={inputClass('messaggio')}
                                        placeholder="Come possiamo aiutarti?"
                                        value={form.messaggio}
                                        onChange={e => setForm({ ...form, messaggio: e.target.value })}
                                    />
                                    {errori.messaggio && <p className="text-red-500 text-xs mt-1">{errori.messaggio}</p>}
                                </div>

                                <button
                                    onClick={submit}
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold py-4 rounded-lg transition-colors duration-200 text-sm"
                                >
                                    Invia messaggio →
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* MAPPA */}
            <section className="h-96">
                <iframe
                    title="Mappa Da Giustino"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.3500%2C43.4800%2C11.4500%2C43.5300&layer=mapnik&marker=43.5050%2C11.3850"
                    className="w-full h-full border-0"
                    loading="lazy"
                />
            </section>

        </div>
    )
}