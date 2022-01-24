import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
  scoped: true,
})
export class AppHome {
  render() {
    return [
      <section class="hero is-medium is-link">
        <div class="hero-body columns container">
          <div class="column is-2">
            <figure class="image is-128x128">
              <img class="is-rounded" src="/assets/hammahamma.jpg" title="profile picture" />
            </figure>
          </div>
          <div class="column">
            <p class="title">Medium hero</p>
            <p class="subtitle">Medium subtitle</p>
          </div>
        </div>
      </section>,
      <section class="section">
        <div class="container">
          <stencil-route-link url="/profile/stencil">
            <mwc-button raised>Profile Page</mwc-button>
          </stencil-route-link>
        </div>
      </section>,
    ];
  }
}
