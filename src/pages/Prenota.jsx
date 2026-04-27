import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { camere, orariPrenotazione } from '../data/data'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Prenota() {
    const location = useLocation()
    const cameraPreselezionata = location.state?.camera || ''

    const [tab, setTab] = useState('stanza')
    const [confermato, setConfermato] = useState(false)
    const [riepilogo, setRiepilogo] = useState(null)
    const [errori, setErrori] = useState({})

    const [formStanza, setFormStanza] = useState({
        camera: cameraPreselezionata,
        checkIn: '',
        checkOut: '',
        ospiti: 1,
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        note: ''
    })

    const [formCena, setFormCena] = useState({
        data: '',
        orario: '',
        persone: 1,
        nome: '',
        cognome: '',
        email: '',
        note: ''
    })

    const validaStanza = () => {
        const e = {}
        if (!formStanza.camera) e.camera = 'Seleziona una camera'
        if (!formStanza.checkIn) e.checkIn = 'Inserisci la data di check-in'
        if (!formStanza.checkOut) e.checkOut = 'Inserisci la data di check-out'
        if (!formStanza.nome.trim()) e.nome = 'Inserisci il nome'
        if (!formStanza.cognome.trim()) e.cognome = 'Inserisci il cognome'
        if (!formStanza.email.trim()) e.email = 'Inserisci l\'email'
        if (!formStanza.telefono.trim()) e.telefono = 'Inserisci il telefono'
        return e
    }

    const validaCena = () => {
        const e = {}
        if (!formCena.data) e.data = 'Inserisci la data'
        if (!formCena.orario) e.orario = 'Seleziona un orario'
        if (!formCena.nome.trim()) e.nome = 'Inserisci il nome'
        if (!formCena.cognome.trim()) e.cognome = 'Inserisci il cognome'
        if (!formCena.email.trim()) e.email = 'Inserisci l\'email'
        return e
    }

    const submitStanza = () => {
        const e = validaStanza()
        if (Object.keys(e).length > 0) { setErrori(e); return }
        const cam = camere.find(c => c.id === parseInt(formStanza.camera))
        setRiepilogo({
            tipo: 'stanza',
            camera: cam?.nome,
            checkIn: formStanza.checkIn,
            checkOut: formStanza.checkOut,
            ospiti: formStanza.ospiti,
            nome: `${formStanza.nome} ${formStanza.cognome}`,
            email: formStanza.email,
            telefono: formStanza.telefono,
            note: formStanza.note
        })
        setConfermato(true)
        setErrori({})
    }

    const submitCena = () => {
        const e = validaCena()
        if (Object.keys(e).length > 0) { setErrori(e); return }
        setRiepilogo({
            tipo: 'cena',
            data: formCena.data,
            orario: formCena.orario,
            persone: formCena.persone,
            nome: `${formCena.nome} ${formCena.cognome}`,
            email: formCena.email,
            note: formCena.note
        })
        setConfermato(true)
        setErrori({})
    }

    const inputClass = (campo) =>
        `w-full border rounded-lg px-4 py-3 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
            errori[campo] ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white'
        }`

    if (confermato && riepilogo) {
        return (
            <div className="pt-16 min-h-screen bg-stone-50 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full text-center"
                >
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="font-serif text-3xl font-bold text-stone-800 mb-2">Prenotazione ricevuta!</h2>
                    <p className="text-stone-500 mb-8 text-sm">
                        Grazie {riepilogo.nome}, ti contatteremo a breve alla mail <span className="font-semibold text-stone-700">{riepilogo.email}</span> per confermare.
                    </p>
                    <div className="bg-stone-50 rounded-xl p-6 text-left text-sm text-stone-600 space-y-3 mb-8">
                        {riepilogo.tipo === 'stanza' ? (
                            <>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Camera</span><span>{riepilogo.camera}</span></div>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Check-in</span><span>{riepilogo.checkIn}</span></div>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Check-out</span><span>{riepilogo.checkOut}</span></div>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Ospiti</span><span>{riepilogo.ospiti}</span></div>
                                {riepilogo.note && <div className="flex justify-between"><span className="font-medium text-stone-800">Note</span><span>{riepilogo.note}</span></div>}
                            </>
                        ) : (
                            <>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Data</span><span>{riepilogo.data}</span></div>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Orario</span><span>{riepilogo.orario}</span></div>
                                <div className="flex justify-between"><span className="font-medium text-stone-800">Persone</span><span>{riepilogo.persone}</span></div>
                                {riepilogo.note && <div className="flex justify-between"><span className="font-medium text-stone-800">Note</span><span>{riepilogo.note}</span></div>}
                            </>
                        )}
                    </div>
                    <button
                        onClick={() => { setConfermato(false); setRiepilogo(null) }}
                        className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-3 rounded transition-colors duration-200"
                    >
                        Nuova prenotazione
                    </button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="pt-16">

            {/* HERO */}
            <section
                className="h-56 flex items-center justify-center text-center relative"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/prenota/1600/400)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    className="relative z-10 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Disponibilità online</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Prenota</h1>
                </motion.div>
            </section>

            {/* FORM */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-2xl mx-auto px-4">

                    {/* TAB */}
                    <div className="flex rounded-xl overflow-hidden border border-stone-200 mb-10 bg-white">
                        <button
                            onClick={() => { setTab('stanza'); setErrori({}) }}
                            className={`flex-1 py-4 text-sm font-semibold transition-colors duration-200 ${
                                tab === 'stanza' ? 'bg-amber-500 text-stone-900' : 'text-stone-500 hover:bg-stone-50'
                            }`}
                        >
                            🛏 Prenota una stanza
                        </button>
                        <button
                            onClick={() => { setTab('cena'); setErrori({}) }}
                            className={`flex-1 py-4 text-sm font-semibold transition-colors duration-200 ${
                                tab === 'cena' ? 'bg-amber-500 text-stone-900' : 'text-stone-500 hover:bg-stone-50'
                            }`}
                        >
                            🍽 Prenota una cena
                        </button>
                    </div>

                    <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

                        {tab === 'stanza' ? (
                            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
                                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-2">Dettagli soggiorno</h2>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Camera *</label>
                                    <select
                                        className={inputClass('camera')}
                                        value={formStanza.camera}
                                        onChange={e => setFormStanza({ ...formStanza, camera: e.target.value })}
                                    >
                                        <option value="">Seleziona una camera</option>
                                        {camere.map(c => (
                                            <option key={c.id} value={c.id}>{c.nome} — €{c.prezzo}/notte</option>
                                        ))}
                                    </select>
                                    {errori.camera && <p className="text-red-500 text-xs mt-1">{errori.camera}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Check-in *</label>
                                        <input type="date" className={inputClass('checkIn')} value={formStanza.checkIn} onChange={e => setFormStanza({ ...formStanza, checkIn: e.target.value })} />
                                        {errori.checkIn && <p className="text-red-500 text-xs mt-1">{errori.checkIn}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Check-out *</label>
                                        <input type="date" className={inputClass('checkOut')} value={formStanza.checkOut} onChange={e => setFormStanza({ ...formStanza, checkOut: e.target.value })} />
                                        {errori.checkOut && <p className="text-red-500 text-xs mt-1">{errori.checkOut}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Numero ospiti</label>
                                    <input type="number" min="1" max="4" className={inputClass('ospiti')} value={formStanza.ospiti} onChange={e => setFormStanza({ ...formStanza, ospiti: e.target.value })} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Nome *</label>
                                        <input type="text" className={inputClass('nome')} placeholder="Mario" value={formStanza.nome} onChange={e => setFormStanza({ ...formStanza, nome: e.target.value })} />
                                        {errori.nome && <p className="text-red-500 text-xs mt-1">{errori.nome}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Cognome *</label>
                                        <input type="text" className={inputClass('cognome')} placeholder="Rossi" value={formStanza.cognome} onChange={e => setFormStanza({ ...formStanza, cognome: e.target.value })} />
                                        {errori.cognome && <p className="text-red-500 text-xs mt-1">{errori.cognome}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Email *</label>
                                    <input type="email" className={inputClass('email')} placeholder="mario.rossi@email.it" value={formStanza.email} onChange={e => setFormStanza({ ...formStanza, email: e.target.value })} />
                                    {errori.email && <p className="text-red-500 text-xs mt-1">{errori.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Telefono *</label>
                                    <input type="tel" className={inputClass('telefono')} placeholder="+39 333 1234567" value={formStanza.telefono} onChange={e => setFormStanza({ ...formStanza, telefono: e.target.value })} />
                                    {errori.telefono && <p className="text-red-500 text-xs mt-1">{errori.telefono}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Note aggiuntive</label>
                                    <textarea rows={3} className={inputClass('note')} placeholder="Allergie, richieste particolari..." value={formStanza.note} onChange={e => setFormStanza({ ...formStanza, note: e.target.value })} />
                                </div>

                                <button
                                    onClick={submitStanza}
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold py-4 rounded-lg transition-colors duration-200 text-sm"
                                >
                                    Conferma prenotazione →
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
                                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-2">Dettagli cena</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Data *</label>
                                        <input type="date" className={inputClass('data')} value={formCena.data} onChange={e => setFormCena({ ...formCena, data: e.target.value })} />
                                        {errori.data && <p className="text-red-500 text-xs mt-1">{errori.data}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Orario *</label>
                                        <select className={inputClass('orario')} value={formCena.orario} onChange={e => setFormCena({ ...formCena, orario: e.target.value })}>
                                            <option value="">Seleziona orario</option>
                                            {orariPrenotazione.map(o => <option key={o} value={o}>{o}</option>)}
                                        </select>
                                        {errori.orario && <p className="text-red-500 text-xs mt-1">{errori.orario}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Numero persone</label>
                                    <input type="number" min="1" max="20" className={inputClass('persone')} value={formCena.persone} onChange={e => setFormCena({ ...formCena, persone: e.target.value })} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Nome *</label>
                                        <input type="text" className={inputClass('nome')} placeholder="Mario" value={formCena.nome} onChange={e => setFormCena({ ...formCena, nome: e.target.value })} />
                                        {errori.nome && <p className="text-red-500 text-xs mt-1">{errori.nome}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Cognome *</label>
                                        <input type="text" className={inputClass('cognome')} placeholder="Rossi" value={formCena.cognome} onChange={e => setFormCena({ ...formCena, cognome: e.target.value })} />
                                        {errori.cognome && <p className="text-red-500 text-xs mt-1">{errori.cognome}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Email *</label>
                                    <input type="email" className={inputClass('email')} placeholder="mario.rossi@email.it" value={formCena.email} onChange={e => setFormCena({ ...formCena, email: e.target.value })} />
                                    {errori.email && <p className="text-red-500 text-xs mt-1">{errori.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Note aggiuntive</label>
                                    <textarea rows={3} className={inputClass('note')} placeholder="Allergie, richieste particolari, occasioni speciali..." value={formCena.note} onChange={e => setFormCena({ ...formCena, note: e.target.value })} />
                                </div>

                                <button
                                    onClick={submitCena}
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold py-4 rounded-lg transition-colors duration-200 text-sm"
                                >
                                    Conferma prenotazione →
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}