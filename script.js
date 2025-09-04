//SELEZIONE
const lampadinaSpenta = document.getElementById("lamp-off");
console.log(lampadinaSpenta);

const lampadinaAccesa = document.getElementById("lamp-on");
console.log(lampadinaAccesa);

let bottoneAccensione = document.getElementById("button-on");
console.log(bottoneAccensione);

//GESTIAMO EVENTO SU BOTTONE
bottoneAccensione.addEventListener('click',
    accendiLampadina,
);

//SVOLGO LA FUNZIONE DI ACCENSIONE LAMPADINA
function accendiLampadina () {
    //check classe aggiuntiva
    const isItHidden = lampadinaSpenta.classList.contains("d-none");
    //se la classe è gia presente, allora rimuovila
    if (isItHidden) {
        lampadinaSpenta.classList.remove("d-none");
        //altrimenti aggiungila
    } else {
        lampadinaSpenta.classList.add("d-none");
    }
    
    //check classe aggiuntiva
    const isItVisible = lampadinaAccesa.classList.contains("d-block");
    if (isItVisible) {
        lampadinaAccesa.classList.remove("d-block");
        
    } else {
        lampadinaAccesa.classList.add("d-block");
    } 

    console.log(lampadinaSpenta.classList);
    console.log(lampadinaAccesa.classList);
}




