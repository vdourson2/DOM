/*
*/

const important = document.getElementsByClassName("important");
for (let i=0;i<important.length;i++){
    important[i].setAttribute("title","This is an important item");
}

const image = document.querySelectorAll("img");
for (let i=0;i<image.length;i++){
    if (!image[i].classList.contains("important")){
        image[i].style.display="none";
    }
}

const paragr = document.querySelectorAll("p");
for (let i=0;i< paragr.length;i++){
    if (paragr[i].classList.length != 0){
        console.log("La classe de l'élément ci-dessous est: " + paragr[i].classList)
    }
    else {
        let r= Math.floor(Math.random() * 256);
        let g= Math.floor(Math.random() * 256);
        let b= Math.floor(Math.random() * 256);
        paragr[i].style.color=`rgb(${r},${g},${b})`

    }
    console.log(paragr[i].innerText)
}


