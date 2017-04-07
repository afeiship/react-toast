import './style.scss';
import React,{PropTypes,PureComponent} from 'react';
import classNames from 'classnames';
import {ReactBackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';

export default class ReactToast extends PureComponent{

  static propTypes={
    className:PropTypes.string,
    backdrop:PropTypes.bool,
    content:PropTypes.string,
  }

  static defaultProps={
    className:'',
    content:'',
    visible:false,
    backdrop:true
  }

  static newInstance(inProps){
    return appendToDocument(ReactToast,inProps,{
      className:'react-toast-container'
    });
  }

  constructor(props){
    super(props);
    this.state = {
      visible:props.visible,
      content:props.content,
    };
  }

  componentWillMount(){
    ReactBackdropCtrl.createInstance({
      visible:false,
      style:{
        opacity:0.001
      }
    });
  }

  show(inOptions){
    let options = Object.assign({},this.props,inOptions,{visible:true});
    const {backdrop} = options;
    this.setState(options);
    backdrop && ReactBackdropCtrl.show();
  }

  hide(){
    this.setState({visible:false});
    ReactBackdropCtrl.hide();
  }

  render(){
    const {className} = this.props;
    const {content,visible} = this.state;
    return (
      <div data-visible={visible} className={classNames('react-toast',className)}>
        <div className="bd" dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}
