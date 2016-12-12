import {ToastCtrl} from './main';


class App extends React.Component{
  componentWillMount(){
    ToastCtrl.getInstance({visible:false});
  }
  _click(){
    ToastCtrl.show({
      interval:1000,
      msg:'test!'
    })
  }
  render(){
    return (
      <div className="hello-toast">
        <button onClick={this._click.bind(this)}>show toast</button>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
