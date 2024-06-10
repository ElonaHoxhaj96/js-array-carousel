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
                <div class="photo_img > 
                    <img src= "${imgFile}">
                </div>`;
    //inseriamo questo nuovo elemento al contenitore
    imgCarosello.innerHTML +=  itemCarosello    
}

//selezioniamo tutti gli elementi photo_img della pagina
const photo_img = document.getElementsByClassName("photo_img");
// console.log(photo_img)

// rendiamo visibile il primo elemento 
photo_img[0].classList.add("visible");
console.log(photo_img[0]);

