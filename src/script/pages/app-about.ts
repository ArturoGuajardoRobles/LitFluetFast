import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-about')
export class AppAbout extends LitElement {

  list: any = [];

  constructor() {
    super();
    this.list = [
      {
        "company": "A.E. Petsche Company S. de R.L. de C.V.", "op_years": "1","website": " www.aepetsche.com","locations":"Monterrey, México","telefono":" (+52) (81 8882 9664)","email":"csantiago@aepetsche.com"
      },
      {
        "company": "ABT Manufacturing Services, S.A. de C.V.", "op_years": "14","website": "www.abtmexico.com","locations":"Nuevo León","telefono":"+521 (81) 1029 0377","email":"jose.astorga@abtmexico.com"
      },
      {
        "company": "AEROPROCESS TTT", "op_years": "8","website": "www.grupottt.com","locations":"Queretaro","telefono":"+52 (442) 483 3977 ","email":"aeroprocessttt@grupottt.com"
      },
      {
        "company": "AIRBUS", "op_years": "39","website": "www.airbus.com","locations":"Mexico City, Querétaro, Yucatan","telefono":"+52 1 (55) 1864 0847","email":"martinez@airbus.com"
      },
      {
        "company": "ALBANY ENGINEERED COMPOSITES", "op_years": "3","website": "wwwalbint.com","locations":"Querétaro","telefono":"+52 (442) 730 8813","email":"arturo.salgado@albint.com"
      },
      {
        "company": "ALIGN AEROSPACE", "op_years": "11","website": "www.alignaero.com","locations":"México City, Chihuahua","telefono":"+521 (614) 345 8829","email":"alejandro.galindo@alignaero.com"
      },
      {
        "company": "ALTAIR", "op_years": "12","website": "www.altair.com","locations":"Mexico City","telefono":"52 (55) 5658 6808","email":"kappes@altair.com"
      },
      {
        "company": "ALTASER", "op_years": "9","website": "www.altaser-aero.com","locations":"Chihuahua","telefono":"+52 (614) 417 5492","email":"p.romero@altaser-aero.com"
      },
    ]
  }

  static get styles() {
    return css`

    fluent-card {
      padding: 0px 18px 18px;
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
        width: 50%%;
      }
    }
    `;
  }

  render() {
    const listTmp: any = [];
    for (const i of this.list) {
      listTmp.push(html`<tr><td>${(i.company)}</td><td>${(i.op_years)}</td><td>${(i.website)}<td>${(i.locations)}</td><td>${(i.telefono)}</td><td>${(i.email)}</td></td></tr>`);
    }
    console.info(listTmp);


    return html`
      <app-header ?enableBack="${true}"></app-header>

      <div>
        <h2>About Page</h2>

        <fluent-card>
          <h2>Miembros de FEMIA</h2>
          <p>
          Este es el listado general de todos nuestros miembros de FEMIA
          </p>


          <label for="site-search">Buscar</label>
          <input type="search" id="site-search" company="A">
          <button>Search</button>
          </div>
          <table class="table table-striped">


            <tr>
                <th>Company</th>
                <th>Years</th>
                <th>Pagina Web</th>
                <th>Ubicaciones</th>
                <th>Telefono</th>
                <th>Email</th>
            </tr>
                ${listTmp}
        </table>

        </fluent-card>
      </div>
    `;
  }

}
