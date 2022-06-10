import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-newpage')
export class AppNueva extends LitElement {
  static get styles() {
    return css`

    fluent-card {
      padding: 18px 18px 18px;
    }

    @media(prefers-color-scheme: light) {
      fluent-card {
        --fill-color: #edebe9;
      }
    }

    @media(prefers-color-scheme: dark) {
      fluent-card {
        --fill-color: #4e4e4e;
        color: white;
        border: none;
      }
    }

    @media (min-width: 1024px) {
      fluent-card {
        width: 100%;
        padding: 5px
      }
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <div>
        <h2>¿Que es FEMIA?</h2>

        <fluent-card>
          <h2>Federación Mexicana de la Industria Aeroespacial</h2>
          <p>Somos una Asociación sin fin de lucro establecida en 2007, que agrupa y representa a las principales empresas de la Industria Aeroespacial de México.
          </p>
        </fluent-card>
        <br>
        <fluent-card>
        <p>
        Hemos realizado proyectos con el Gobierno Federal y organismos internacionales, para apoyar a pequeñas, medianas y grandes empresas en rubros como internacionalización y promoción,  certificaciones, entre otros.
        </p>
        </fluent-card>
        <br>
        <fluent-card>
        <p>
        Nuestros miembros son:
        +100 empresas aeroespaciales,
       con actividades de
       manufactura, mantenimiento, ingeniería y diseño.        </p>
        </fluent-card>
        <br>
        <fluent-card>
        <p>
        Tenemos acuerdos de colaboración con organismos nacionales e internacionales del ámbito aeroespacial e industrial, para el desarrollo del sector a nivel global
       </p>
        </fluent-card>
        <br>
        <fluent-card>
        <p>

        Somos el Organismo referente del sector
        aeroespacial a nivel nacional.
        Con más de 10 años  de experiencia y
         consolidación dentro de la industria
       </p>
        </fluent-card>
        <br>
      </div>
    `;
  }
}
