class Footer extends HTMLElement {
constructor() {
    super();
    // Creamos el Shadow DOM o la "burbujita" aislante :)
    //holi espero que no les moleste que haya copiado el formato
    //del componente de vale :p
    this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {                      //aqui empieza
        this.shadowRoot.innerHTML = ` 
        <style>
            :host {
            display: block;
            width: 100%;
            font-family: 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            }

            .footer{
                position: relative;
                width: 100%;
                background: #49144C;
                min-height: 100px;
                padding: 1px 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 30px;
            }

            .social-icons{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                margin: 10px 5px;
                flex-wrap: wrap;
            }

            .icon-elem{
                list-style: none;
            }

            .icon{
                color: white;
                font-size: 32px;
                display: inline-block;
                margin: 0px 10px;
                transition: 0.5s;
            }

            .icon:hover{
                transform: translateY(-10px);
                color: #E3A2E6;
            }

            .menu{
                display: flex;
                justify-content: center;
                position: relative;
                align-items: center;
                margin: 10px 0px;
                flex-wrap: wrap;
            }

            .menu-elem{
                list-style: none;
            }

            .menu-icon{
                color: white;
                font-size: 1rem;
                display: inline-block;
                text-decoration: none;
                margin: 5px 10px;
                opacity: 0.8;
                transition: 0.3s;
            }

            .menu-icon:hover{
                opacity: 1;
                color: #E3A2E6
            }

            .text{
                color: white;
                text-align: center;
                margin-top: 15px;
                margin-bottom: 10px;
                font-size: 0.5
                rem;
            }
        </style>
        <footer class="footer">
            <!-- iconos -->
            <ul class="social-icons">
                <!-- icono de instagram -->
                <li class="icon-elem">
                    <a href="" class="icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <!-- icono de facebook -->
                <li class="icon-elem">
                    <!-- nota personal: icon-elem es icon element :s-->
                    <a href="" class="icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <!-- icono de youtube -->
                <li class="icon-elem">
                    <a href="" class="icon">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                </li>
                <!-- icono de whatsapp -->
                <li class="icon-elem">
                    <a href="" class="icon">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                </li>
            </ul>
            <!-- Menu extra del footer -->
            <ul class="menu">
                <li class="menu-elem">
                    <a href="" class="menu-icon">Inicio</a>
                </li>
                <li class="menu-elem">
                    <a href="" class="menu-icon">Servicios</a>
                </li>
                <li class="menu-elem">
                    <a href="" class="menu-icon">Proyectos</a>
                </li>
                <li class="menu-elem">
                    <a href="" class="menu-icon">Nostros</a>
                </li>
                <li class="menu-elem">
                    <a href="" class="menu-icon">Blog</a>
                </li>
                <li class="menu-elem">
                    <a href="" class="menu-icon">Contacto</a>
                </li>
            </ul>
            <p class="text">@2026 | Diseñado por Softgirls</p>
        </footer>
        `; //aqui termina
    }
}

//Este es el nombre con el que se llamara el footer :o
customElements.define('main-footer', Footer);