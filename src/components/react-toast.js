import './style.scss';
import classNames from 'classnames';
import {BackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';

class Toast extends React.Component{

  static propTypes={
    cssClass:React.PropTypes.string,
    iconClass:React.PropTypes.string,
    content:React.PropTypes.string
  }

  static defaultProps={
    cssClass:'',
    iconClass:'',
    content:'',
    visible:false
  }

  constructor(props){
    super(props);
    this.state={
      iconClass:props.iconClass,
      visible:props.visible,
      content:props.content
    };
  }


  componentWillMount(){
    BackdropCtrl.getInstance({
      visible:false,
      style:{
        opacity:0.001
      }
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  static newInstance(inProps){
    return appendToDocument(Toast,inProps,{
      className:'toast-container'
    });
  }

  show(inOptions){
    inOptions.visible=true;
    this.state=inOptions;
    this.setState(this.state);
    BackdropCtrl.show();
  }

  hide(){
    this.state.visible=false;
    this.setState(this.state);
    BackdropCtrl.hide();
  }

  render(){
    return (
      <div data-visible={this.state.visible} className={classNames('react-toast',this.props.cssClass)}>
        <i className={classNames('react-icon',this.state.iconClass)}></i>
        <span className="text" dangerouslySetInnerHTML={{__html: this.state.content}}></span>
      </div>
    );
  }
}

export default Toast;
