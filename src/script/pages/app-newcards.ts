import {LitElement, html} from 'lit';
import {customElement, state, query} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

const imageInfo = {
  'AIRBUS': { domain: "AIRBUS.png", id:10, opyears:39, website: "www.airbus.com",locations:"Mexico City, Querétaro, Yucatan", telefono:+5215518640847,email:"martinez@airbus.com", name: "AIRBUS"},
  'Albany Company': { domain: 'Albany.png', id: 11, opyears:3, website: "wwwalbint.com",locations:"Querétaro", telefono:"+52 (442) 730 8813",email:"arturo.salgado@albint.com", name: "ALBANY ENGINEERED COMPOSITES" },
  'Petsche Company': { domain: 'petsche.jpg', id: 11, opyears:1, website: "www.aepetsche.com",locations:"Monterrey, México", telefono:"(+52) (81 8882 9664)",email:"csantiago@aepetsche.com", name: "A.E. Petsche Company S. de R.L. de C.V." },
  'ABT': { domain: 'abt.png', id: 11, opyears:14, website: "www.abtmexico.com",locations:"Nuevo León", telefono:"+521 (81) 1029 0377",email:"jose.astorga@abtmexico.com", name: "ABT Manufacturing Services, S.A. de C.V." },
  'Aeroprocess TTT': { domain: 'ttt.jpg', id: 11, opyears:8, website: "www.grupottt.com",locations:"Queretaro", telefono:"+52 (442) 483 3977 ",email:"aeroprocessttt@grupottt.com", name: "AEROPROCESS TTT" },
  'Align Aerospace': { domain: 'align.png', id: 11, opyears:11, website: "www.alignaero.com",locations:"México City, Chihuahua", telefono:"+521 (614) 345 8829",email:"alejandro.galindo@alignaero.com", name: "ALIGN AEROSPACE" },
  'Altair': { domain: 'altair.jpg', id: 11, opyears:12, website: "www.altair.com",locations:"Mexico City", telefono:"52 (55) 5658 6808",email:"kappes@altair.com", name: "ALTAIR" },
  'Altaser': { domain: 'Altaser.png', id: 11, opyears:9, website: "www.altaser-aero.com",locations:"Chihuahua", telefono:"+52 (614) 417 5492",email:"p.romero@altaser-aero.com", name: "ALTASER" },
  'Ambe Engineering': { domain: 'ambe.png', id: 11, opyears:21, website: "www.ambeeng.com",locations:"United States, Mexico, Brasil, India, Europe", telefono:"+52 1 (442) 343 2295",email:"carlos.robles@ambeeng.com", name: "AMBE ENGINEERING LLC" },
  'AMT': { domain: 'AMT.png', id: 11, opyears:7, website: "www.amt-precision.com / www.amt-mfg.com",locations:"Sonora", telefono:"+52 (631) 314 3186",email:"jcarpio@amtservice.net / jorgep@amtservice.net /cclark@amtservice.net", name: "AMT PRECISION" },
  'Anaerobia': { domain: 'anaerobia.jpg', id: 11, opyears:9, website: "www.anaerobia.com",locations:"Puebla / Nuevo Leén / Guanajuato", telefono:"Ramén Aguila: +521 (222) 111 6900 / Isabel Cordero: +52 (222) 567 5877",email:"ramon.aguila@anaerobia.com / isabel.cordero@anaerobia.com", name: "ANAEROBIA" },
  'APCA': { domain: 'apca.png', id: 11, opyears:6, website: "apcaingenieria.com",locations:"Estado de México", telefono:"+521 (722) 419 370 / +521 (729) 1344239",email:"ventas@apcaingenieria.com", name: "APCA Ingenieria" },
  'Optimen': { domain: 'Optimen.png', id: 11, opyears:15, website: "www.optimen.com.mx",locations:"Guanajuato, Mexico / Argentina / Canada / Panama / Chile", telefono:"+52 (477) 717 3339",email:"info@optimen.com.mx", name: "OPTIMEN" },
  'Nombre': { domain: 'signo.jpg', id: 11, opyears:"", website: "",locations:"", telefono:"",email:"", name: "" }

};

type ImageKey = keyof typeof imageInfo;

@customElement('app-element')
class MyElement extends LitElement {

  @state()
  private imageName: ImageKey = 'Nombre';

  @query('input#name')
  private input!: HTMLInputElement;

  render() {
    // Might be undefined if the input doesn't match one of the image keys
    const info = imageInfo[this.imageName];

    return html`
      <app-header ?enableBack="${true}"></app-header>
      <h1>Busca una Compañía</h1>


      <br>

      <label for="site-search">Empresa: </label>
      <input type="search" id="name" .value=${this.imageName} @input=${this.updateImage}>
      <button>Search</button>
      </div>
      <table class="table table-striped">


      <h2>Logo de la Empresa:</h2>
      <br>
      <img height="300" width="720" src="src//script//pages//logos//${ifDefined(info?.domain)}"><hr>
      <br>
      <h2>Información Sobre la Empresa:</h2>
      <br>
      <h2>Nombre: ${ifDefined(info?.name)}</h2>
      <h3>Email de contacto: ${ifDefined(info?.email)}
      <br>
      Ubicaciones: ${ifDefined(info?.locations)}
      <br>
      Años de Operación: ${ifDefined(info?.opyears)}
      <br>
      Telefonos disponibles: ${ifDefined(info?.telefono)}
      <br>
      Pagina Web: ${ifDefined(info?.website)}
      </h3>
      <br>
      <br>
    `;
  }

  private updateImage() {
    this.imageName = this.input.value as ImageKey;
  }
}