import { newSpecPage } from '@stencil/core/testing';
import { HeroSection } from '../hero-section';

describe('hero-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeroSection],
      html: `<hero-section></hero-section>`,
    });
    expect(page.root).toEqualHtml(`
      <hero-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hero-section>
    `);
  });
});
