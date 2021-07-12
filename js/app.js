const app = new Vue({
    el: "#app",
    data: {

        posicionActual: 0,
        posicionActual2: 0,
        posicionActual3: 0,
        posicionActual4: 0,
        isCollapsed: true,
        isOpen: true,
        cambiomodal: false,

        imagen: [
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        ],
        imagen1: [
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1624396770/img/portada_web_2_lw3pus.png",
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1624923597/img/papaya-01_xzi3rs.png",
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1624396770/img/portada_web_2_lw3pus.png",
        ],

        texts: [{
                title: "¿Quiénes somos?",
                paragraph: "Frutos  Del Campo, es una Cooperativa de Trabajo Asociado. Especializada en la producción de Papaya de la más alta calidad, constituida en el año 2018 en la ciudad de Villavicencio Departamento del Meta Colombia, formada por un grupo de agricultores e ingenieros, con más de 15 años de experiencia en la siembra, producción, distribución y comercialización de papaya a nivel nacional e internacional.",
            },
            {
                title: "Misión",
                paragraph: "1) Que todos nuestros cultivos sea amigables con el medio ambiente. 2) Implementar la más alta tecnología en nuestros Cultivos y Planta Empacadora. 3) Ofrecer el mejor producto a nuestros clientes. 4) Mantener un ambiente de trabajo y un modelo de vida saludable para el ser humano, manteniendo una altísima responsabilidad social en el desarrollo de nuestras actividades.",
            },
            {
                title: "Visión",
                paragraph: "Ser reconocidos a nivel mundial como la mejor empresa productora, distribuidora y comercializadora de papaya y ente integrador de los productores de Papaya en Colombia, enfocándolos en la economía a escala, prestándoles asistencia técnica y capacitación para sus colaboradores.",
            },
        ],

        texts2: [{
                title: "Planta empacadora",
                paragraph: "Certificada por el ICA con Código No EMP 500016, Capacidad de empaque de 2 contenedores diarios, (40.800 Kilos), donde manejamos los más altos estándares de calidad, Bioseguridad e inocuidad del producto.",
            },
            {
                title: "Cultivo",
                paragraph: "Certificado por el ICA con código N 500017, Único en el país con sistema eficiente de fertirriego y emplasticado, trabajamos con agricultura de precisión, Buenas Practicas Agricolas por eso nuestros cultivos son amigables con el medio ambiente y 100% sostenibles.",
            },
            {
                title: "Calidad",
                paragraph: "En Frutos del Campo estamos comprometidos con la calidad, ya que trabajamos nuestros cultivos con tecnología, siendo la empresa líder en innovación, por esa razón nuestros procesos operativos van enfocados a la agricultura limpia, a la inocuidad de nuestros productos, y al cuidado del medio ambiente, siendo nuestros cultivos totalmente sostenibles.",
            },
        ],

        certificadoDescargas: [{
                title: "No. 505730167",
                paragraph: "Se otorga el presente registro como predio productor de las siguientes especies vegetales para la exportación en fresco: Papaya (Carica Papaya), en un área de ocho (8) hectáreas y Plátano (Musa Paradisiaca), con siete (7) hectáreas.",
                file: "./Files/RegistroNo505730167.pdf",
            },
            {
                title: "No. 500016",
                paragraph: "Registro 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore nihil unde sed blanditiis consequatur incidunt pariatur? Consectetur reiciendis odit tempora quidem! Aperiam saepe hic voluptas sit necessitatibus, debitis fugiat.",
                file: "./Files/RegistroNo500016.pdf",
            },
            {
                title: "No. 500017",
                paragraph: "Registro 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore nihil unde sed blanditiis consequatur incidunt pariatur? Consectetur reiciendis odit tempora quidem! Aperiam saepe hic voluptas sit necessitatibus, debitis fugiat.",
                file: "./Files/RegistroNo500017.pdf",
            },

        ],

        texts4: [{
                title: "Titulo 1",
                paragraph: "Titulo 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id fuga alias pariatur! Ullam fugiat ea, dolores quia odio enim mollitia asperiores laborum fugit velit quisquam eligendi, unde aliquam. Odio?",
                /* link: "https://www.youtube.com/watch?v=vvvxUJDrv0c", */
            },
            {
                title: "Titulo 2",
                paragraph: "Titulo2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id fuga alias pariatur! Ullam fugiat ea, dolores quia odio enim mollitia asperiores laborum fugit velit quisquam eligendi, unde aliquam. Odio?",
                /* link: "https://www.youtube.com/watch?v=vvvxUJDrv0c", */
            },
            {
                title: "Titulo 3",
                paragraph: " Titulo 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id fuga alias pariatur! Ullam fugiat ea, dolores quia odio enim mollitia asperiores laborum fugit velit quisquam eligendi, unde aliquam. Odio?",
                /* link: "https://www.youtube.com/watch?v=OwqeTKImq-0", */
            },
        ],
        swiperImagenes: null

    },

    mounted() {
        this.swiperImagenes = new Swiper(".imagenes", {
            loop: true,
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
            },
        });
    },

    methods: {
        mostrarTexto1: function(posicion) {
            this.posicionActual = posicion;
        },

        mostrarTexto2: function(posicion2) {
            this.posicionActual2 = posicion2;
        },

        mostrarTexto3: function(posicion3) {
            this.posicionActual3 = posicion3;
        },

        atras1: function() {
            if (this.posicionActual > 0) {
                this.posicionActual--;
            } else {
                this.posicionActual = this.texts.length - 1
            }
        },

        adelante1: function() {
            if (this.posicionActual < this.texts.length - 1) {
                this.posicionActual++;
            } else {
                this.posicionActual = 0
            }
        },

        getClase(posicion) {
            if (posicion === this.posicionActual) {
                return "activado";
            }
            return "";
        },

        atras2: function() {
            if (this.posicionActual2 > 0) {
                this.posicionActual2--;
            } else {
                this.posicionActual2 = this.texts.length - 1
            }
        },

        adelante2: function() {
            if (this.posicionActual2 < this.texts.length - 1) {
                this.posicionActual2++;
            } else {
                this.posicionActual2 = 0
            }
        },

        getClase2(posicion2) {
            if (posicion2 === this.posicionActual2) {
                return "activado";
            }
            return "";
        },

        atras3: function() {
            if (this.posicionActual3 > 0) {
                this.posicionActual3--;
            } else {
                this.posicionActual3 = this.texts.length - 1
            }
        },

        adelante3: function() {
            if (this.posicionActual3 < this.texts.length - 1) {
                this.posicionActual3++;
            } else {
                this.posicionActual3 = 0
            }
        },

        getClase3(posicion3) {
            if (posicion3 === this.posicionActual3) {
                return "activado";
            }
            return "";
        },

        atras4: function() {
            if (this.posicionActual4 > 0) {
                this.posicionActual4--;
            } else {
                this.posicionActual4 = this.texts.length - 1
            }
        },

        adelante4: function() {
            if (this.posicionActual4 < this.texts.length - 1) {
                this.posicionActual4++;
            } else {
                this.posicionActual4 = 0
            }
        },

        getClase4(posicion4) {
            if (posicion4 === this.posicionActual4) {
                return "activado";
            }
            return "";
        },

        toggleCollapsed() {
            this.isCollapsed = !this.isCollapsed
        },

        animation() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        },


        toggleModal: function() {
            this.cambiomodal = !this.cambiomodal
        },
    },

    computed: {
        menu() {
            if (this.isCollapsed) {
                return "nav collapsed"
            }
            return "nav"
        },

        modal() {
            if (this.cambiomodal) {
                return "modalAbierta"
            }
            return "modalCerrada"
        }



    }
});

var rotar = new Swiper(".cambiar__logos", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },

        649: {
            slidesPerView: 3
        },
    }

});

/*
var swiper = new Swiper(".imagenes", {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 10000,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});*/

window.onscroll = function() {
    if (document.documentElement.scrollTop >= 100) {
        document.querySelector(".arriba").classList.add('show')
    } else {
        document.querySelector(".arriba").classList.remove('show')
    }
}



// JS PLAY MODAL

// JS PLAY MODAL