import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactAppendToDocument from '@feizheng/react-append-to-document';

const CLASS_NAME = 'react-toast';

export default class ReactToast extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The default timer interval.
     */
    interval: PropTypes.number
  };

  static defaultProps = {
    value: false,
    onChange: noop,
    interval: 2500
  };

  static init(inProps) {
    return ReactAppendToDocument.append(this, inProps, {
      className: 'react-toast-container'
    }).then((instance) => {
      this.instance = instance;
    });
  }

  static present(inProps) {
    return this.instance.component.present(inProps);
  }

  static dismiss() {
    return this.instance.component.dismiss();
  }

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.then = noop;
    this.state = {
      hidden: !value,
      content: '',
      value
    };
  }

  present(inContent) {
    const { interval } = this.props;
    this.setState({
      hidden: false,
      value: true,
      content: inContent
    });

    setTimeout(() => {
      this.dismiss();
    }, interval);
  }

  dismiss() {
    this.setState({ value: false });
  }

  handleAnimationEnd() {
    const { value } = this.state;
    !value && this.setState({ hidden: true });
  }

  render() {
    const { className } = this.props;
    const { hidden, content } = this.state;
    const _value = this.state.value;

    return (
      <div
        data-component={CLASS_NAME}
        data-visible={_value}
        hidden={hidden}
        className={classNames('webkit-sassui-toast', CLASS_NAME, className)}
        children={content}
        onAnimationEnd={this.handleAnimationEnd}
      />
    );
  }
}
