import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {animate, AnimateController, flyBelow, fade} from '@lit-labs/motion';
import {styles} from './styles.js';

@customElement('app-company')
export class AppCompany extends LitElement {
  static styles = styles;

  lit = ['F', 'E', 'M','I','A'];

  @property({type: Array}) letters = this.lit;

  duration = 2500;
  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: this.duration,
        fill: 'backwards',
      },
    },
    onComplete: () => this.changeLayout(),
  });
  constructor() {
    super();
    this.addEventListener('click', () => this.clickHandler());
  }

  render() {
    return html`

      ${this.letters?.map(
        (letter, i) =>
          html`<span
            class="letter"
            ${animate({
              keyframeOptions: {
              },
              in: fade,
              out: flyBelow,
            })}
            >${letter}</span
          >`
      )}

    `;
  }
  clickHandler() {
    if (this.controller.isAnimating) {
      this.controller.togglePlay();
    } else {
      this.changeLayout();
    }
  }
  changeLayout() {
    this.letters = this.letters.length ? [] : this.lit;
  }
}



