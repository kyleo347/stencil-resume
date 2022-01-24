import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
})
export class AppAbout {
  render() {
    return (
      <section class="section">
        <div class="container content">
          <p>This site was built with:</p>
          <ul>
            <li>
              <a href="https://stenciljs.com/" target="_blank" rel="noopener noreferrer">
                StencilJS
              </a>
            </li>
            <li>
              <a href="https://github.com/material-components/" target="_blank" rel="noopener noreferrer">
                Material Web Components
              </a>
            </li>
            <li>
              <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
                Bulma
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
