# react-toast
> Toast for react

## properties:
```javascript

  
```

## install && import:
```bash
npm install --save afeiship/react-toast --registry=https://registry.npm.taobao.org
```

```js
import ReactToast from 'react-toast';
```

```scss
// customize your styles:
$react-toast-options:(
);

@import 'node_modules/react-toast/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-toast --save
// import : import ReactToast from 'react-toast'

class App extends React.Component{
  state = {
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
    Toast.init();
  }

  _onClick1 = e =>{
    Toast.present({
      content:'sfsdfsdfd!'
    });
  };

  render(){
    return (
      <div className="hello-react-toast">
        <button onClick={this._onClick1} className="button">Show Toast</button>
      </div>
    );
  }
}

```
