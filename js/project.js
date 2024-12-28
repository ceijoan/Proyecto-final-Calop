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
    const servicios = [
    { id: 1, titulo: 'Tu marca, tu identidad.', descripcion: 'Entendemos que la importancia de tu marca va mas alla de un logo y sus colores. Te ayudamos a encontrar el balance adecuado entre imágen y comunicación para crear una conexión con tus usuarios que resalte.', titulodebarra: 'Estrategia de Marca', imagen: 'No tiene cobertura' },
    { id: 2, titulo: 'titulo 2', descripcion: 'descripcion 2', titulodebarra: 'Estrategia de Marca 2', imagen: 'No tiene cobertura' },
    { id: 3, titulo: 'titulo3', descripcion: 'descripcion 3', titulodebarra: 'Estrategia de Marca 3', imagen: 'No tiene cobertura' },
    { id: 4, titulo: 'titulo4', descripcion: 'descripcion 4', titulodebarra: 'Estrategia de Marca 4', imagen: 'No tiene cobertura' },
    { id: 5, titulo: 'titulo5', descripcion: 'descripcion 5', titulodebarra: 'Estrategia de Marca 5', imagen: 'No tiene cobertura' }
    ];
    
    //Crear el slider con JS
    const serviciosContainer = document.getElementById('Slider-ServiciosBox');
    servicios.forEach((servicio, index) => {
        const div = document.createElement('div');
        if (servicios.length = 4) {
            div.innerHTML = 
                `<div class="Slider-box">
                    <span class="Slider-img"><p class="Slider-txtContentBox u-colorBlanco">${servicio.titulodebarra}</p></span>
                </div>`
            ;
        };
        serviciosContainer.appendChild(div);
    });
    
    function renderSlider() {
        const serviciosContainer2 = document.getElementById('Slider-ServiciosBox');
        serviciosContainer.innerHTML = ''; 
        servicios.slice(0, 5).forEach(servicio => {
            const div = document.createElement('div');
            div.classList.add('Slider-box');
            div.innerHTML = 
                `<span class="Slider-img">
                    <p class="Slider-txtContentBox u-colorBlanco">${servicio.titulodebarra}</p>
                </span>`
            ;
            serviciosContainer2.appendChild(div);
        });
    } 

    function nextSlide() {
        const firstService = servicios.shift();
        servicios.push(firstService);
        console.log(firstService);
        renderSlider();
        
    }
    
    renderSlider();
    window.nextSlide = nextSlide;
    
    
    
    //variable que inicializa el estado de los elementos
    let indice2 = 0;
    const totalProyectos = servicios.length;
    
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

