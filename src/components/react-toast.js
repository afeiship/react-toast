import './style.scss';

import React,{ PureComponent } from 'react';
import {ReactBackdrop, ReactBackdropCtrl} from 'react-backdrop';

import PropTypes from 'prop-types';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends ReactBackdrop{

  static propTypes={
    className:PropTypes.string,
    backdrop:PropTypes.bool,
    content:PropTypes.string,
  };

  static defaultProps={
    content:'',
    visible:false,
    animating:false,
    hidden:true,
    backdrop:true
  };

  static newInstance(inProps){
    return appendToDocument(this,inProps,{
      className:'react-toast-container'
    });
  }

  constructor(props){
    super(props);
    this.state = objectAssign(this.state,{
      content:props.content,
      backdrop:props.backdrop
    });
  }

  show(inOptions,inCallback){
    const options = objectAssign({ ...this.props},inOptions);
    this.setState(options,()=>{
      super.show(inCallback);
    });
  }

  render(){
    const {className} = this.props;
    const {content,visible,backdrop,hidden,animating} = this.state;
    return (
      <div hidden={hidden} data-animating={animating} className={classNames('react-toast',className)}>
        <div data-visible={visible} className="bd" dangerouslySetInnerHTML={{__html: content}} />
        {backdrop && <ReactBackdrop style={{opacity:0.01,position:'fixed'}} visible={visible} />}
      </div>
    );
  }
}
