/*
*/

let learners=["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
let emplacement = document.querySelector("article");
for (let i=0;i<learners.length;i++){
    let divel = document.createElement("div");
    let r= Math.floor(Math.random() * 256);
    let g= Math.floor(Math.random() * 256);
    let b= Math.floor(Math.random() * 256);
    divel.style.backgroundColor=`rgb(${r},${g},${b})`;
    let paragr = document.createElement("p");
    let nom = document.createTextNode(learners[i]);
    paragr.appendChild(nom);
    divel.appendChild(paragr);
    emplacement.appendChild(divel);
}
