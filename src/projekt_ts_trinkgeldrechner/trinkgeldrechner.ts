console.clear();
const rechnungsHoehe = document.querySelector('#rechnungsHoehe') as HTMLInputElement;
const anzahlZahler = document.querySelector('#anzahlZahler') as HTMLInputElement;
const serviceRating = document.querySelector('#serviceRating');
const berechneBtn  = document.querySelector('#berechneBtn') as HTMLInputElement;

const tipHoehe = document.createElement ('p');
const gesamtSumme = document.createElement ('p'); 
const preisProPerson = document.createElement ('p');

document.body.append(tipHoehe, gesamtSumme, preisProPerson);

const berechneTrinkgeld = (): void => {
    const rechnung = Number(rechnungsHoehe.value);
    const personen = parseInt(anzahlZahler.value); 
    const serviceProz = Number(serviceRating.value);
    
    if (isNaN(rechnung) || isNaN(personen) || isNaN(serviceProz)){
        alert ('bitte füllen sie alle felder korrekt aus');
        return
    }
    const trinkgeld = rechnung * serviceProz;
    const gesamt = rechnung + trinkgeld;
    const proPerson = gesamt / personen;

    tipHoehe.textContent= `Trinkgeld: ${trinkgeld.toFixed(2)} €`;
    gesamtSumme.textContent= `Gesamtsumme: ${gesamt.toFixed(2)} €`;
    preisProPerson.textContent= `Preis pro Person: ${proPerson.toFixed(2)} €`;
}
berechneBtn.addEventListener('click', berechneTrinkgeld);


