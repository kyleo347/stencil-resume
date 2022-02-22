import { Component, h } from '@stencil/core';
import Helmet from '@stencil/helmet';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
  scoped: true,
})
export class AppHome {
  skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Angular', 'React', 'Web Components', 'Static Site Generator', 'Headless CMS', 'Unit Tests', 'E2E Tests', 'Azure', 'AWS'];
  skillClicked = (skill: string) => {
    (window as any).dataLayer.push({ event: 'skill_clicked', skill: skill });
  };
  render() {
    return [
      <Helmet>
        <title>Home</title>
      </Helmet>,
      <section class="hero is-medium is-link">
        <div class="hero-body">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-128x128">
                <img class="is-rounded" src="/assets/hammahamma.jpg" title="profile picture" />
              </figure>
            </div>
            <div class="column">
              <h1 class="title">Kyle O'Connor</h1>
              <p class="subtitle">Full Stack Web Developer</p>
            </div>
          </div>
        </div>
      </section>,
      <section class="section">
        <div class="container">
          <h2 class="title">Skills</h2>
          <div class="tags are-medium">
            {this.skills.map(skill => (
              <span class="tag is-success is-rounded" onClick={() => this.skillClicked(skill)}>
                {skill}
              </span>
            ))}
          </div>
          <stencil-route-link url="/profile/stencil">
            <mwc-button raised>Profile Page</mwc-button>
          </stencil-route-link>
        </div>
      </section>,
      <section class="section has-background-dark ">
        <div class="container">
          <h2 class="title has-text-light">Projects</h2>
          <div class="columns">
            <div class="column box">I'm in a box.</div>
          </div>
        </div>
      </section>,
    ];
  }
}
