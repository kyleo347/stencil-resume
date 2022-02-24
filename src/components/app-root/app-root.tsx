import { Component, h, Listen, Prop, Watch } from '@stencil/core';
import { injectHistory, LocationSegments } from '@stencil/router';
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
          <mwc-top-app-bar-fixed>
            <mwc-icon-button slot="navigationIcon" icon="menu" onClick={this.toggle}></mwc-icon-button>
            <div slot="title"></div>
          </mwc-top-app-bar-fixed>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/about" component="app-about" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
                <stencil-route url="/" component="app-home" exact={true} />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </mwc-drawer>
    );
  }

  @Prop() location: LocationSegments;

  @Watch('location') onRouteChange(newRoute) {
    (window as any).dataLayer.push({ event: 'spa_navigate', page: newRoute.pathname });
  }
  @Listen('MDCDrawer:closed')
  MDCDrawerCloseHandler() {
    store.state.drawerOpen = false;
  }
}

injectHistory(AppRoot);
