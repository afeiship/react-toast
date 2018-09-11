# react-toast
> Toast for react.


## size:
+     react-toast.js   8.3 kB
+ react-toast.js.map  51.2 kB

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
| name | type | value | description |
| :----| :----| :----| :----|
| className  | String | '' | Your ext classname |
| visible  | Boolean | true/false | show/hide |
| backdrop  | Boolean | true/false | If has backdrop |
| content  | String | String Or Html | The toast content. |


## usage:
+ import lib:
```javascript
import {ToastCtrl} from 'react-toast';
```

+ use it:
```jsx
  componentWillMount(){
    ToastCtrl.createInstance();
  }

  _click(){
    ToastCtrl.show({
      interval:1000,
      content:`<div className="abc">
      <i className="icon">☀</i>
      <p>操作成功!</p>
      </div>`
    })
  }

  _click2(){
    ToastCtrl.show({
      interval:1000,
      backdrop:false,
      content:'操作成功!'
    })
  }
```
