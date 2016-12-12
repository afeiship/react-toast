import './style.scss';
import classNames from 'classnames';
import {BackdropCtrl} from 'react-backdrop';

import appendToDocument from 'react-append-to-document';

class Toast extends React.Component{

  static propTypes={
    cssClass:React.PropTypes.string,
    cssClass:React.PropTypes.string,
    msg:React.PropTypes.string,
    backdropStyle:React.PropTypes.object
  }

  static defaultProps={
    cssClass:'',
    iconClass:'',
    msg:'',
    visible:false,
    backdropStyle:{
      opacity:0
    }
  }

  constructor(props){
    super(props);
    this.state={
      visible:props.visible,
      msg:props.msg
    };
  }

  componentWillMount(){
    BackdropCtrl.getInstance({
      visible:false,
      style:this.props.backdropStyle
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

  show(inMsg){
    Object.assign(this.state,{
      visible:true,
      msg:inMsg
    });
    this.setState(this.state);
    BackdropCtrl.show();
  }

  hide(){
    Object.assign(this.state,{
      visible:false
    })
    this.setState(this.state);
    BackdropCtrl.hide();
  }

  render(){
    return (
      <div data-visible={this.state.visible} className={classNames('react-toast',this.props.cssClass)}>
        <i className={classNames('react-icon',this.props.iconClass)}></i>
        <span className="text">{this.state.msg}</span>
      </div>
    );
  }
}

export default Toast;
