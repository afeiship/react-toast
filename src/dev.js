import './dev.scss'

import {ReactToastCtrl} from './main';

class App extends React.Component{
  componentWillMount(){
    ReactToastCtrl.createInstance();
  }
  _click(){
    ReactToastCtrl.show({
      interval:2000,
      content:`<div className="abc">
      <i className="icon">☀</i>
      <p>操作成功!</p>
      </div>`
    })
  }

  _click2(){
    ReactToastCtrl.show({
      interval:1000,
      backdrop:false,
      content:'操作成功!'
    })
  }

  render(){
    return (
      <div className="hello-toast">
        <button onClick={this._click.bind(this)}>has backdrop - has icon</button>
        <button onClick={this._click2.bind(this)}>no backdrop - no icon</button>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
