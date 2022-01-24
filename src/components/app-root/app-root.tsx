import { Component, h } from '@stencil/core';
import store from '../../store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  toggle = () => {
    store.state.drawerOpen = !store.state.drawerOpen;
  };
  render() {
    return (
      <mwc-drawer hasHeader type="modal" open={store.state.drawerOpen}>
        <span slot="title">Menu</span>
        <mwc-list>
          <stencil-route-link url="/" onClick={this.toggle}>
            <mwc-list-item graphic="icon">
              <mwc-icon slot="graphic">home</mwc-icon>Home
            </mwc-list-item>
          </stencil-route-link>
          <stencil-route-link url="/about" onClick={this.toggle}>
            <mwc-list-item graphic="icon">
              <mwc-icon slot="graphic">info</mwc-icon>About
            </mwc-list-item>
          </stencil-route-link>
        </mwc-list>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu" onClick={this.toggle}></mwc-icon-button>
            <div slot="title"></div>
          </mwc-top-app-bar>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/about" component="app-about" exact={true} />
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </mwc-drawer>
    );
  }
}
