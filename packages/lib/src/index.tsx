// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component, createRef, HTMLAttributes } from 'react';
import VisibleElement from '@jswork/visible-element';
import type { EventMittNamespace } from '@jswork/event-mitt';
import { ReactHarmonyEvents } from '@jswork/harmony-events';

const CLASS_NAME = 'react-toast';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactToastProps = {
  /**
   * The component class identifier.
   */
  name?: string;
  /**
   * Whether to fixed backdrop or not.
   * @default false
   */
  fixed?: boolean;
  /**
   * The z-index of backdrop.
   * @default 1000
   */
  zIndex?: number;
  /**
   * The duration time.
   */
  duration?: number;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactToast extends Component<ReactToastProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static event: EventMittNamespace.EventMitt;
  static events = ['present', 'dismiss'];
  static defaultProps = {
    name: '@',
    fixed: false,
    zIndex: 1000,
    duration: 2000
  };

  private harmonyEvents: ReactHarmonyEvents | null = null;
  private elementRef = createRef<HTMLDivElement>();
  private ve?: VisibleElement;
  private timer = 0;

  state = {
    visible: false
  };

  componentDidMount() {
    this.harmonyEvents = ReactHarmonyEvents.create(this);
    this.ve = new VisibleElement(this.elementRef.current!, {
      onChange: () => this.setState({ visible: this.ve?.visible })
    });
    this.ve.close();
  }

  componentWillUnmount() {
    this.harmonyEvents?.destroy();
  }

  /* ----- public eventBus methods ----- */
  present = () => {
    const { duration } = this.props;
    this.ve?.to(true);
    this.timer = setTimeout(() => {
      this.ve?.to(false);
    }, duration);
  };

  dismiss = () => {
    clearTimeout(this.timer);
    this.ve?.to(false);
  };

  render() {
    const { name, className, children, fixed, zIndex, duration, ...rest } = this.props;
    const { visible } = this.state;
    return (
      <div
        ref={this.elementRef}
        hidden
        data-component={CLASS_NAME}
        data-visible={visible}
        data-fixed={fixed}
        className={cx(CLASS_NAME, className)}
        {...rest}>
        {children}
      </div>
    );
  }
}
