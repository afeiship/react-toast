import './style.scss';

import React,{ PureComponent } from 'react';

import PropTypes from 'prop-types';
import {ReactBackdropCtrl} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class ReactToast extends PureComponent{

  static propTypes={
    className:PropTypes.string,
    backdrop:PropTypes.bool,
    content:PropTypes.string,
  }

  static defaultProps={
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
    this._options = {};
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
    let options = this._options = objectAssign({...this.props},inOptions,{visible:true});
    const {backdrop} = options;
    this.setState(options);
    backdrop && ReactBackdropCtrl.show();
  }

  hide(){
    const {backdrop} = this._options;
    this.setState({visible:false});
    backdrop && ReactBackdropCtrl.hide();
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
