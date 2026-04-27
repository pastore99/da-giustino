export const camere = [
    {
        id: 1,
        nome: "Camera Ulivo",
        descrizione: "Spaziosa camera matrimoniale con vista sul giardino degli ulivi. Arredata in stile rustico toscano con travi a vista e pavimento in cotto.",
        prezzo: 95,
        posti: 2,
        servizi: ["WiFi gratuito", "Aria condizionata", "Bagno privato", "Colazione inclusa", "Vista giardino"],
        immagine: "https://picsum.photos/seed/ulivo/800/500"
    },
    {
        id: 2,
        nome: "Camera Vigneto",
        descrizione: "Camera doppia con balcone privato affacciato sui vigneti. Perfetta per chi vuole godersi il tramonto toscano con un bicchiere di vino.",
        prezzo: 110,
        posti: 2,
        servizi: ["WiFi gratuito", "Aria condizionata", "Bagno privato", "Colazione inclusa", "Balcone", "Vista vigneto"],
        immagine: "https://picsum.photos/seed/vigneto/800/500"
    },
    {
        id: 3,
        nome: "Suite Giustino",
        descrizione: "La nostra suite principale con soggiorno separato, vasca idromassaggio e terrazza panoramica. Il massimo del comfort in campagna.",
        prezzo: 180,
        posti: 2,
        servizi: ["WiFi gratuito", "Aria condizionata", "Bagno con idromassaggio", "Colazione inclusa", "Terrazza panoramica", "Minibar"],
        immagine: "https://picsum.photos/seed/suite/800/500"
    },
    {
        id: 4,
        nome: "Camera Famiglia",
        descrizione: "Ampia camera con letto matrimoniale e due letti singoli, ideale per famiglie. Dotata di angolo lettura e giardino privato.",
        prezzo: 145,
        posti: 4,
        servizi: ["WiFi gratuito", "Aria condizionata", "Bagno privato", "Colazione inclusa", "Giardino privato", "Adatta a bambini"],
        immagine: "https://picsum.photos/seed/famiglia/800/500"
    }
]

export const menu = {
    antipasti: [
        { nome: "Tagliere di salumi toscani", descrizione: "Selezione di finocchiona, prosciutto crudo e lardo di Colonnata con crostini al burro", prezzo: 14 },
        { nome: "Bruschetta al pomodoro fresco", descrizione: "Pane casereccio tostato con pomodori del nostro orto, basilico e olio extravergine", prezzo: 8 },
        { nome: "Crostini con fegatini", descrizione: "Crostini toscani con paté di fegatini di pollo alla salvia", prezzo: 9 },
        { nome: "Pecorino e miele", descrizione: "Pecorino stagionato di Pienza con miele di castagno e noci tostate", prezzo: 11 },
        { nome: "Insalata di farro", descrizione: "Farro della Garfagnana con verdure di stagione, olive taggiasche e erbe aromatiche", prezzo: 10 },
    ],
    primi: [
        { nome: "Pici al ragù di cinghiale", descrizione: "Pasta fresca fatta in casa con ragù di cinghiale del Chianti e pecorino grattugiato", prezzo: 16 },
        { nome: "Ribollita", descrizione: "La classica zuppa toscana con cavolo nero, fagioli cannellini e pane raffermo", prezzo: 13 },
        { nome: "Tagliatelle al tartufo", descrizione: "Tagliatelle all'uovo con burro, parmigiano e tartufo nero delle colline senesi", prezzo: 22 },
        { nome: "Zuppa di farro e legumi", descrizione: "Zuppa rustica con farro, ceci, lenticchie e un filo di olio nuovo", prezzo: 12 },
        { nome: "Pappardelle al ragù di anatra", descrizione: "Pappardelle larghe con ragù di anatra stufata al vino rosso e rosmarino", prezzo: 17 },
    ],
    secondi: [
        { nome: "Bistecca alla fiorentina", descrizione: "Chianina IGP, minimo 800g, cotta alla brace. Servita con fagioli all'uccelletto", prezzo: 38 },
        { nome: "Pollo alla cacciatora", descrizione: "Pollo ruspante del nostro allevamento con olive, capperi, pomodoro e erbe aromatiche", prezzo: 18 },
        { nome: "Arista di maiale al forno", descrizione: "Lombo di maiale arrosto con aglio, rosmarino e patate al forno", prezzo: 19 },
        { nome: "Baccalà alla livornese", descrizione: "Merluzzo sotto sale con pomodoro, olive, capperi e prezzemolo fresco", prezzo: 20 },
        { nome: "Fagioli all'uccelletto", descrizione: "Fagioli cannellini in umido con salvia, aglio e pomodoro. Piatto vegetariano", prezzo: 13 },
    ],
    dolci: [
        { nome: "Cantucci e Vin Santo", descrizione: "Biscotti di Prato con mandorle da inzuppare nel Vin Santo del Chianti", prezzo: 8 },
        { nome: "Panna cotta al miele", descrizione: "Panna cotta con miele di lavanda del nostro apiario e coulis di frutti di bosco", prezzo: 7 },
        { nome: "Torta della nonna", descrizione: "Pasta frolla ripiena di crema pasticcera e pinoli, ricetta di nonna Giustina", prezzo: 7 },
        { nome: "Semifreddo al cantuccio", descrizione: "Semifreddo artigianale con pezzi di cantuccio e salsa al caramello salato", prezzo: 8 },
        { nome: "Castagnaccio", descrizione: "Dolce tradizionale toscano con farina di castagne, rosmarino, uvetta e pinoli", prezzo: 6 },
    ]
}

export const info = {
    nome: "Agriturismo Da Giustino",
    indirizzo: "Via del Poggio 14, Radda in Chianti (SI) 53017",
    telefono: "+39 0577 123456",
    email: "info@daggiustino.it",
    orariRistorante: {
        pranzo: "12:30 – 14:30",
        cena: "19:30 – 22:00",
        chiusura: "Martedì"
    },
    orariRicezione: "08:00 – 21:00",
    checkIn: "15:00",
    checkOut: "11:00",
    social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com"
    }
}

export const recensioni = [
    {
        nome: "Marco B.",
        stelle: 5,
        testo: "Posto meraviglioso, cucina autentica e personale accogliente. I pici al cinghiale erano indimenticabili. Torneremo sicuramente!",
        data: "Marzo 2025"
    },
    {
        nome: "Laura e Stefano",
        stelle: 5,
        testo: "Weekend perfetto. La suite Giustino è uno spazio unico, la colazione con prodotti del loro orto vale il viaggio da sola.",
        data: "Febbraio 2025"
    },
    {
        nome: "Familie Müller",
        stelle: 5,
        testo: "Wunderschöner Ort! La camera famiglia era perfetta per noi. I bambini adoravano il giardino e gli animali. Sehr empfehlenswert!",
        data: "Gennaio 2025"
    }
]

export const orariPrenotazione = ["12:30", "13:00", "19:30", "20:00", "20:30", "21:00"]