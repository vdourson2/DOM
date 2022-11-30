/*
*/

let learners=["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
let emplacement = document.querySelector("article");
for (let i=0;i<learners.length;i++){

    //Création d'une nouvelle div
    let divel = document.createElement("div");

    //Génération de nombres aléatoires pour une nouvelle couleur
    let r= Math.floor(Math.random() * 256);
    let g= Math.floor(Math.random() * 256);
    let b= Math.floor(Math.random() * 256);

    //Application de la couleur au fond de la div
    divel.style.backgroundColor=`rgb(${r},${g},${b})`;
        
    //Création du noeud p et du noeud texte
    let paragr = document.createElement("p");
    let nom = document.createTextNode(learners[i]);
        
    //Extraction de la luminosité de la couleur rgb
    //et changement de la couleur du texte si la luminosité est 
    //inférieure à 60%
    let M = Math.max(r,g,b);
    let m = Math.min(r,g,b);
    let L = ((M+m)/510)*100;
    console.log(r + " " + g + " " + b);
    console.log(L)
    console.log(nom)
    if (L<60){
        paragr.style.color="rgb(255,255,255)";
    }

    //Rattachement des différents noeuds à leur parent
    paragr.appendChild(nom);
    divel.appendChild(paragr);
    emplacement.appendChild(divel);
}
