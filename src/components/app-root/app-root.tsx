import { Drawer } from '@material/mwc-drawer';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  drawer!: Drawer;
  toggle = () => {
    this.drawer.open = !this.drawer.open;
  };
  render() {
    return (
      <mwc-drawer hasHeader type="modal" ref={el => (this.drawer = el as Drawer)}>
        <span slot="title">Drawer Title</span>
        <span slot="subtitle">subtitle</span>
        <div>
          <p>Drawer content!</p>
          <mwc-icon-button icon="gesture"></mwc-icon-button>
          <mwc-icon-button icon="gavel"></mwc-icon-button>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu" onClick={this.toggle}></mwc-icon-button>
            <div slot="title">Title</div>
          </mwc-top-app-bar>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
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
