let time = 3000,
    i = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

    function nextImage(){

        images[i].classList.remove("selected")
        i++
        if(i >= max)
        i = 0
        images[i].classList.add("selected")
    }


    function start(){

     setInterval(() =>{
        //Troca de imagem
    nextImage()
     }, time)
    }

window.addEventListener("load", start)
