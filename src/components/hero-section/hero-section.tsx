import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.css',
  shadow: true,
})
export class HeroSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
