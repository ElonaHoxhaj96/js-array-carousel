// creiamo una Array che contenga le mie immagini
const immaginiArray = [
    'img/04.webp',
    'img/03.webp',
    'img/01.webp',
    'img/02.webp',
    'img/05.webp'
];

//estrapoliamo l'elemnto del contenitore di HTML
const imgCarosello = document.querySelector("#container");

//estrapoliamo gli elementi dall array
for(let i = 0; i < immaginiArray.length; i++){
    let imgFile = immaginiArray[i];
    // console.log(imgFile);
    // creare l'elemento da inserire ad ogni interazione
    let itemCarosello = `
                <div class="photo_img" > 
                    <i class="fa-regular fa-circle-up icone "></i>
                    <img src= "${imgFile}">
                    <i class="fa-regular fa-circle-down icone"></i>
                </div>`;
    //inseriamo questo nuovo elemento al contenitore
    imgCarosello.innerHTML +=  itemCarosello    
}

//selezioniamo tutti gli elementi photo_img della pagina
const photo_img = document.getElementsByClassName("photo_img");
console.log(photo_img);

let visibleItes = 0;
// rendiamo visibile il primo elemento 
photo_img[visibleItes].classList.add("visible");

// selezioniamo lei icone con freccia su e giu
const icone = document.getElementsByClassName("icone");

// diamo la funzione al click delle icone 

icone.addEventListener("click",
    function (){
        //tolgo la classe visible al elemento visibile
        photo_img[visibleItes].classList.remuve("visible");

        //incremento il valore dell'indice visibleItems
        visibleItes++;

        //mettiamo la classe attiva al valore incrementato
        photo_img[visibleItes].classList.remuve("visible");
    }
)