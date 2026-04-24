class Navbar extends HTMLElement {
  constructor() {
    super();
    // Creamos el Shadow DOM o la "burbujita" aislante :)
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /*Para que no se borre nada del estilo del navbar, como si se reseteara*/
        :host {
          display: block;
          width: 100%;
          font-family: 'Segoe UI', Roboto, sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .navbar {
          background-color: #49144C; 
          color: white;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .container {
          width: 100%;
          max-width: 100%; 
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-logo-img {
          height: 60px;
          width: auto;
          display: block;
          object-fit: contain; 
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem; /* Espacio ajustado para que quepa todo */
          flex-grow: 1;
          justify-content: center;
        }

        .nav-links a {
          color: #ffffff !important; 
          text-decoration: none !important; 
          font-size: 1rem;
          transition: 0.3s;
          opacity: 0.8;
        }

        .nav-links a:hover {
          opacity: 1;
          color: #E3A2E6 !important; 
        }

        /* 3. BUSCADOR (Limpio y sin duplicados) */
        .search-box {
          display: flex;
          align-items: center;
        }

        input {
          padding: 0.5rem 1rem;
          border-radius: 20px 0 0 20px; /* Redondeado solo del lado izquierdo */
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: white;
          outline: none;
          width: 150px;
          transition: 0.3s;
        }

        input::placeholder { 
          color: rgba(255,255,255,0.5); 
        }

        button {
          padding: 0.5rem 1rem;
          border-radius: 0 20px 20px 0; /* Redondeado solo del lado derecho */
          border: 1px solid rgba(255,255,255,0.2);
          background: #49144C;
          color: #E3A2E6;
          cursor: pointer;
          transition: all 0.3s;
        }

        button:hover {
          background: #E3A2E6;
          color: white;
        }

        .user-menu {
          margin-left: 1rem;
          display: flex;
          align-items: center;
        }

        .user-link {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .user-icon-svg {
          width: 32px;
          height: 32px;
          fill: white; /* Color del muñequito */
          transition: 0.3s;
        }

        .user-link:hover {
            color: #E3A2E6; 
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px rgba(227, 162, 230, 0.6)); 
        }

        .user-link:hover { 
          transform: scale(1.1); 
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .nav-links { gap: 1rem; }
        }

        @media (max-width: 768px) {
          .container { flex-direction: column; gap: 1rem; }
          .nav-links { margin: 10px 0; }
        }
      </style>

      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="logo">
            <img src="/img/logoNavbar.png" alt="Logo" class="nav-logo-img">
          </a>
          
          <ul class="nav-links">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>

          <div style="display: flex; align-items: center;">
            <form class="search-box">
              <input type="text" placeholder="Buscar...">
              <button type="submit">🔍︎​</button>
            </form>

            <div class="user-menu">
              <a href="login.html" class="user-link">
                <svg class="user-icon-svg" viewBox="0 0 24 24">
                  <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,6c1.93,0,3.5,1.57,3.5,3.5S13.93,13,12,13 s-3.5-1.57-3.5-3.5S10.07,6,12,6z M12,20c-2.03,0-4.43-0.82-6.14-2.88C7.55,15.8,9.68,15,12,15s4.45,0.8,6.14,2.12 C16.43,19.18,14.03,20,12,20z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

//Este es el nombre de la etiqueta que pondríamos en cada sección.
customElements.define('main-navbar', Navbar);