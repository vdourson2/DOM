/*
*/
console.log(document.title);

document.title = "Modifying the DOM";

document.body.style.backgroundColor="#FF69B4";

for (let i=0;i<document.body.children.length;i++){
    console.log(document.body.children[i]);
}
