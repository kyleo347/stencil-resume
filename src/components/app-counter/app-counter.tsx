import { Component, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'app-counter',
  styleUrl: 'app-counter.css',
  shadow: true,
})
export class AppCounter {
  componentWillLoad() {
    setInterval(() => state.seconds++, 1000);
  }

  render() {
    return (
      <div>
        <p>
          <MyGlobalCounter />
          <p>
            Seconds: {state.seconds}
            <br />
            Squared Clicks: {state.squaredClicks}
          </p>
        </p>
      </div>
    );
  }
}

const MyGlobalCounter = () => {
  return (
    <button onClick={() => state.clicks++}>
      {state.clicks}
    </button>
  );
};