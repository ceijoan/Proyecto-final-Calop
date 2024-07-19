document.addEventListener("DOMContentLoaded", function (){
    //Variables que pone la escucha de los elementos
    const Titulos = document.querySelectorAll(".AcordeonTitle");
    const liTextosDespliega = document.querySelectorAll(".Acordeonli");
    const MasoMenos = document.querySelectorAll(".AcordeonTitle::before");

    Titulos.forEach(header =>{
        header.addEventListener("click", ()=>{
            const acordeonClic = header.closest(".Acordeonli");
            //cerrar los contents
            liTextosDespliega.forEach(elementoNoClic => {
            elementoNoClic.classList.remove("is-Active");
            });
            //Abrir solo el content que dio clic
            acordeonClic.classList.toggle("is-Active");
                        
            
        });
    });
    liTextosDespliega[0].classList.add('is-Active');
    

    //variables del slider
    const sliderImages = document.querySelector(".Slider-contetImg");
    const listImages = document.querySelectorAll(".Slider-box");
    //variables de los botones
    const btnAnterior = document.querySelector(".Slider-prev");
    const btnSiguiente = document.querySelector(".Slider-next");
    //Eventos de accion de los botones
    btnAnterior.addEventListener("click", prevServicio);
    btnSiguiente.addEventListener("click", nextServicio);
    //variable que inicializa el estado de los elementos
    let indice = 0;
    const totalImages = listImages.length;


    function nextServicio(){
        indice++;
        console.log(totalImages);
        if (indice >= totalImages){
            indice = 0;
        }
        actualizarSlider()
    }
    function prevServicio(){
        indice --;
        if (indice < 0){
            indice = totalImages;
        }
        actualizarSlider()
    }

    function actualizarSlider(){
        const width= sliderImages.querySelector('.Slider-box').clientWidth;
        sliderImages.style.transform=`translateX(${width*indice}px)`;
        
    }
    
    
    //SLIDER PROYECTOS
    //variables del slider
    const contProyectosSlider = document.querySelector(".Section-contentComplete");
    const divProyecto = document.querySelectorAll(".SliderProyectos");
    //variables de los botones
    const btnAnteriorProject = document.querySelector(".SliderProyectos-Flechas .Slider-prev");
    const btnSiguienteProject = document.querySelector(".SliderProyectos-Flechas .Slider-next");
    //Eventos de accion de los botones
    btnAnteriorProject.addEventListener("click", prevProyect);
    btnSiguienteProject.addEventListener("click", nextProyect);
    //variable que inicializa el estado de los elementos
    let indice2 = 0;
    const totalProyectos = divProyecto.length;


    function nextProyect(){
        indice2++;
        console.log(totalProyectos);
        if (indice >= totalProyectos){
            indice = 0;
        }
        actualizarSliderProyect()
    }
    function prevProyect(){
        indice --;
        if (indice < 0){
            indice = totalProyectos;
        }
        actualizarSliderProyect()
    }

    function actualizarSliderProyect(){
        const anchocompleto= contProyectosSlider.querySelector('.SliderProyectos').clientWidth;
        contProyectosSlider.style.transform=`translateX(${anchocompleto*indice2}px)`;
    
    }
});

