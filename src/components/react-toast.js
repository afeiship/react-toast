import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactVisible from 'react-visible';
import ReactAppendToDocument from 'react-append-to-document';

export default class extends ReactVisible {
  /*===properties start===*/
  /*===properties end===*/
  get visibleElementView() {
    const { className, destroyable, value, backdrop, ...props } = this.props;
    const { hidden } = this.state;
    return (
      <div
        hidden={hidden}
        data-visible={this.state.value}
        onAnimationEnd={this.onAnimationEnd}
        className={classNames('webkit-sassui-toast react-toast', className)}
        {...props}
      >
        {this.state.content}
      </div>
    )
  }

  static instance(inProps) {
    return ReactAppendToDocument.append(this, inProps, {
      className: 'react-ios-toast-container'
    });
  }

  present(inStates) {
    this.setState(inStates, () => {
      super.present();
      setTimeout(() => {
        this.dismiss();
      }, 1400);
    })
  }

  render() {
    const { destroyValue } = this.state;
    return (
      destroyValue && this.visibleElementView
    );
  }
}
