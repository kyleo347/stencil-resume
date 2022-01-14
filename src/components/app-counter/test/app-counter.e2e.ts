import { newE2EPage } from '@stencil/core/testing';

describe('app-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-counter></app-counter>');

    const element = await page.find('app-counter');
    expect(element).toHaveClass('hydrated');
  });
});
