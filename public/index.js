import ReactToast from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    ReactToast.init({ interval: 2000 });
  }

  handleClick = (inEvent) => {
    ReactToast.present('I am a toast');
  };

  render() {
    return (
      <div className="app-container">
        <button className="button" onClick={this.handleClick}>
          Show Toast
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));