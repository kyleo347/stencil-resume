import { newSpecPage } from '@stencil/core/testing';
import { AppCounter } from '../app-counter';

describe('app-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCounter],
      html: `<app-counter></app-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <app-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-counter>
    `);
  });
});
