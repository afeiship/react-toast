# react-toast
> Toast for react.

## installation
```shell
npm install -S @feizheng/react-toast
```

## update
```shell
npm update @feizheng/react-toast
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | bool   | false   | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |
| interval  | number | 2500    | The default timer interval;           |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-toast/dist/style.scss";
  @import "@feizheng/webkit-sassui-toast";

  // customize your styles:
  $react-toast-options: ()
  ```
2. import js
  ```js
  import ReactToast from '@feizheng/react-toast';
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

  ```

## documentation
- https://afeiship.github.io/react-toast/
