import { newE2EPage } from '@stencil/core/testing';

describe('hero-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hero-section></hero-section>');

    const element = await page.find('hero-section');
    expect(element).toHaveClass('hydrated');
  });
});
