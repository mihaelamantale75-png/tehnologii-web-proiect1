/**
 * Proiect: Tehnologii Web - Filtrare Valori
 * Studenti: Mantale Laura & Bahnareanu Andreea
 */

// 1. Functia de filtrare ceruta (Algoritm propriu)
function filterEvenNumbers(tablouIntrare) {
    let tablouRezultat = [];
    
    // Parcurgem tabloul manual cu o structura repetitiva for
    for (let i = 0; i < tablouIntrare.length; i++) {
        // Verificam daca numarul este par (modulo 2 este 0)
        if (tablouIntrare[i] % 2 === 0) {
            tablouRezultat.push(tablouIntrare[i]);
        }
    }
    return tablouRezultat;
}

// 2. Gestionare Input Manual
const btnManual = document.getElementById('btnFiltreaza');
btnManual.addEventListener('click', () => {
    const inputRaw = document.getElementById('numereInput').value;
    // Convertim sirul de caractere intr-un array de numere
    const numere = inputRaw.trim().split(/\s+/).map(Number);
    
    const pare = filterEvenNumbers(numere);
    document.getElementById('rezultatManual').textContent = pare.length > 0 ? pare.join(', ') : "Niciunul";
});

// 3. Provocarea 3: Incarcare si filtrare din JSON
const btnJSON = document.getElementById('btnIncarcaJSON');
btnJSON.addEventListener('click', () => {
    fetch('date.json')
        .then(response => response.json())
        .then(data => {
            // Presupunem ca JSON-ul are o proprietate "numere"
            const filtrate = filterEvenNumbers(data.lista_numere);
            document.getElementById('rezultatJSON').textContent = filtrate.join(', ');
        })
        .catch(err => console.error("Eroare la citirea JSON:", err));
});