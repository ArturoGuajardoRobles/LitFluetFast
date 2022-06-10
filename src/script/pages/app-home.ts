import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Bienvenido';
  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fluent-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }


      #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
        color: white;
      }

      @media (min-width: 1024px) {
        #welcomeCard,
        #infoCard {
        width: 100%;
        }
      }

      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #0000;
        }

        #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
          color: initial;
        }
      }

      @media(prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #ffff;
          color: #0000;
          border: none;
          color: rgba(1, 2, 3, 4);
        }
      }
      .tar{
        --card-width: 25%;
        --card-height: 55%;
        padding:22px

      }
      .fluent-horizontal-scroll {
        max-width: 620px;
      }
      .totar{
        border-radius: 15px 50px 30px 5px;
      }
      .logos{
        float: center;

        max-width:250px
      }
      .lico{
        margin: 0px 0px 7px 0px
      }
      #cards{
        padding:10px;

    }
    body {
        font-family: sans-serif;
        padding: 1em;
      }

      .custom {
        --card-width: 450px;
        --card-height: 400px;
      padding: 22px;
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWA FEMIA',
        text: 'PWA Members FEMIA',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <div>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <h2>${this.message}</h2>

            <p>
            Para mas información puedes consultar varias paginas
            </p>

            <p id="mainInfo">
              bienvenido porfavor construye de manera correcta la app
            </p>
          </fluent-card>

          <div>
          <fluent-anchor href="about" appearance="accent">Listado de Empresas</fluent-anchor>
          <fluent-anchor href="page" appearance="accent">Sobre FEMIA</fluent-anchor>
          <fluent-anchor href="buscar" appearance="accent">Buscar una Empresa</fluent-anchor>
          </div>
          <br>

          <div>


        <fluent-horizontal-scroll>
        <fluent-card class="tar">
        <fast-card style="width: 400px;"><img src="https://static4.arrow.com/-/media/arrow/images/manufacturers/a/ae-petsche-logo-approved.png?mw=220&hash=0EF304756A17DD83F671CD17D1C20BD8" class="logos" />
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>A.E. Petsche Co.</h2>
        <p>
        A.E. Petsche Company, a division of Arrow Electronics, is the leading global supplier of defense, transportation, and aerospace interconnect solutions. Our expertise in interconnect components has been built over decades of experience serving the industry, and it’s engineered for the demands of the future.
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.aepetsche.com/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>


        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="data:image/jpeg;base64,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" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>ABT Manufacturing Services.
        </h2>
        <p>
        We are a company specialized in precision custom wear components and metalworking projects through inside capabilities and strategic outsourcing with allies and partners.
        We are a company specialized in precision custom wear components and metalworking projects through inside capabilities
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="http://www.abtmexico.com/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="data:image/jpeg;base64,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" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Grupo TTT</h2>
        <p>
        A.E. Petsche Company, a division of Arrow Electronics, is the leading global supplier of defense, transportation, and aerospace interconnect solutions. Our expertise in interconnect components has been built over decades of experience serving the industry, and it’s engineered for the demands of the future.
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="http://www.grupottt.com/index.php?lang=es" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="src//script//pages//logos//AIRBUS.png" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Airbus</h2>
        <p>
        A.E. Petsche Company, a division of Arrow Electronics, is the leading global supplier of defense, transportation, and aerospace interconnect solutions. Our expertise in interconnect components has been built over decades of experience serving the industry, and it’s engineered for the demands of the future.
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.airbus.com/en" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>
        </fluent-horizontal-scroll>


      <br>


        <fluent-horizontal-scroll>
        <fluent-card class="tar">
        <fast-card style="width: 400px;"><img src="https://s.yimg.com/ny/api/res/1.2/zIc4Mu7IxxAwFL8n.gap8A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTE4Mw--/https://s.yimg.com/uu/api/res/1.2/f_XBJa5fVsMKQZTNk51mmA--~B/aD0xMzc7dz00ODA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/business-wire.com/c1b129797f2bc58e21bfb4db46ee8642" width="100%" height="125px" />
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Albany International</h2>
        <p>
        Albany International is a leading developer and manufacturer of engineered components, using advanced materials processing and automation capabilities Albany International is headquartered in Rochester, New Hampshire, operates 23 facilities in 11 countries, employs approximately 4,000 people worldwide
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.albint.com/en-us/Pages/default.aspx" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>


        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Align_Aerospace_Logo_1.jpg/640px-Align_Aerospace_Logo_1.jpg" width="100%" height="125px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>ALIGN AEROSPACE</h2>
        <p>
        The focus of Align Aerospace is to continue concentrating on our core values and strengths, as they are in the heart of the focus of our customers, and the right leverages for our growth. -- Jerome de Truchis, President and CEO of Align Aerospace The focus of Align Aerospace is to continue concentrating on our core values and strengths
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.w3schools.com" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="https://web.altair.com/hs-fs/hubfs/Spain/Altair_Brandmark_Hz_RGB_FullColor.png?width=2196&name=Altair_Brandmark_Hz_RGB_FullColor.png" width="100%" height="130px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Altair</h2>
        <p>
        Our comprehensive, open-architecture solutions for data analytics & AI, computer-aided engineering, and high-performance computing (HPC), enable design and optimization for high performance, innovative, and sustainable products and processes in an increasingly connected world.        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.w3schools.com" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="src//script//pages//logos//Altaser.png" width="100%" height="135px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Altaser</h2>
        <p>
        A.E. Petsche Company, a division of Arrow Electronics, is the leading global supplier of defense, transportation, and aerospace interconnect solutions. Our expertise in interconnect components has been built over decades of experience serving the industry, and it’s engineered for the demands of the future.
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.w3schools.com" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>
        </fluent-horizontal-scroll>

      <br>

        <fluent-horizontal-scroll>
        <fluent-card class="tar">
        <fast-card style="width: 400px;"><img src="data:image/png;base64,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" width="100%" height="110px" />
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Ambe</h2>
        <p>
        Trabajamos con empresas para aumentar las ganancias y ayudar a cumplir los objetivos de lanzamiento y producción a través de mejoras en las operaciones de fabricación.    Hemos llevado a cabo alrededor de 300 proyectos en 22 países para o en nombre de OEM/Primes y nos hemos extendido profundamente en la base de suministro.
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://ambeeng.com/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>


        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="https://www.americanindustriesgroup.com/wp-content/uploads/2020/04/Logo-AI-Horizontal-Azul-Sin-tagline.png" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>American Industries</h2>
        <p>
        American Industries® is a private Mexican company established in 1976 that has helped over 250 international companies successfully start up and grow their manufacturing and distribution operations in Mexico through Shelter Administrative Services and Industrial Real Estate.        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.americanindustriesgroup.com/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="src//script//pages//logos//AMT.png" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>AMT</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper eros non eros pharetra condimentum. Pellentesque nec ex at purus egestas suscipit et at lectus. Curabitur enim ex, tincidunt posuere finibus eu, mattis eu magna. Curabitur feugiat sollicitudin urna semper pretium.
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.w3schools.com" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="https://cdn.fabtechexpo.com/wp-content/uploads/sites/2/2022/01/Anaerobia-Logo-.jpg" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Anaerobia</h2>
        <p>
        Somos una empresa especializada en el desarrollo de proyectos llave en mano integrando la más alta tecnología.Nuestra especialidad es el diseño, fabricación, instalación y puesta en marcha de sistemas de pintura y acabado en general.Contamos con un área de servicio post-venta para atender todas las necesidades</p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://anaerobia.com/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>
        </fluent-horizontal-scroll>



        <br>

        <fluent-horizontal-scroll>
        <fluent-card class="tar">
        <fast-card style="width: 400px;"><img src="https://i0.wp.com/www.canacintraem.org.mx/blog/wp-content/uploads/2020/09/APCA.png?fit=395%2C226&ssl=1" width="100%" height="110px" />
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>APCA Ingenieria</h2>
        <p>
        Somos una empresa especializada en maquinado CNC especializados en manufacturar piezas de alta complejidad.
        En APCA, nuestras prioridades siempre serán exceder las expectativas de calidad y servicio de nuestros clientes,contar con personal calificado e integro y ser amables con el medio
        </p>
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://apcaingenieria.com/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>


        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="https://www.arnprioraerospace.com/images/logo.png" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>Arnprior Aerospace Inc</h2>
        <p>
        Our expertise creates a superior one-stop shopping experience and value for our customers. This capability, combined with an ingrained Lean Manufacturing/Continuous Improvement culture, yields tremendous value for higher level assembly and integration solutions.        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.arnprioraerospace.com/index.php" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="data:image/png;base64,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" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>ASESA</h2>
        <p>
        Nos especializamos en transportación aérea, mantenimiento, logística y administración de aeronaves.
        Por más de 40 años, ASESA ha sido la mejor alternativa para prestar servicios de transporte aéreo en el país, acercando a nuestros clientes a sus destinos tanto en costa afuera como en tierra.
        <div>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="http://www.asesa.com.mx/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>



        <fluent-card class="tar">
        <fast-card style="width: 300px;"><img src="https://www.aeisa.com.mx/wp-content/uploads/2019/12/logookfinal_7aced018eeb556f5215f23089ac2bfe4.png" width="100%" height="110px"/>
        <div style="padding: 0 10 px 10px; color: var(--neutral-foreground-rest);">
        <h2>AEISA</h2>
        <p>
        Los equipos que ofrecemos son fabricados por empresas líderes a nivel mundial en el área de los Ensayos No Destructivos, desde equipos portátiles y accesorios, hasta sistemas automáticos de inspección.
        Esperamos tener la oportunidad de servirle en un futuro cercano en sus necesidades de equipos de pruebas no destructivas.


        </p>
        <fluent-anchor href="buscar" appearance="accent" style="text-align: right;width:420px" class="lico">Información de Contacto</fluent-anchor>
        <fluent-anchor <a href="https://www.aeisa.com.mx/" target="_blank" appearance="accent" style="text-align: right;width:420px">Visita su pagina</a></fluent-anchor>
        </div>
        </div>
        </fast-card>
        </fluent-card>
        </fluent-horizontal-scroll>



        <br>



        <pwa-install>Instalar Aplicación</pwa-install>


    `;
  }
}