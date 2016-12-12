import {ToastCtrl} from './main';


class App extends React.Component{
  componentWillMount(){
    ToastCtrl.createInstance();
  }
  _click(){
    ToastCtrl.show({
      interval:2000,
      iconClass:'ion-checkmark-circled',
      msg:'操作成功!'
    })
  }

  _click2(){
    ToastCtrl.show({
      interval:2000,
      msg:'操作成功!'
    })
  }

  render(){
    return (
      <div className="hello-toast">
        <button onClick={this._click.bind(this)}>show toast - has icon</button>
        <button onClick={this._click2.bind(this)}>show toast - no icon</button>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
