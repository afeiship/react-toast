import './dev.scss';
import { ReactToast, Toast } from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
