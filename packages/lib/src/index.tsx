import cx from 'classnames';
import React, { Component, createRef, HTMLAttributes } from 'react';
import VisibleElement from '@jswork/visible-element';
import type { EventMittNamespace } from '@jswork/event-mitt';
import { ReactHarmonyEvents } from '@jswork/harmony-events';

const CLASS_NAME = 'react-toast';
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
   * The toast animate offset.
   */
  offset?: number;
  /**
   * The duration time.
   */
  duration?: number;
} & HTMLAttributes<HTMLDivElement>;

interface ReactToastState {
  visible: boolean;
  runtimeProps: ReactToastProps;
}

export default class ReactToast extends Component<ReactToastProps, ReactToastState> {
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
    visible: false,
    runtimeProps: {} as ReactToastProps
  };

  get duration() {
    const { duration } = this.props;
    const { runtimeProps } = this.state;
    return runtimeProps?.duration || duration;
  }

  get style() {
    const { style, zIndex, offset } = { ...this.props, ...this.state.runtimeProps };
    return {
      '--react-toast-z-index': zIndex,
      '--react-toast-offset': offset,
      ...style
    };
  }

  componentDidMount() {
    this.harmonyEvents = ReactHarmonyEvents.create(this);
    this.ve = new VisibleElement(this.elementRef.current!, {
      onChange: () => this.setState({ visible: this.ve?.visible! })
    });
    this.ve.close();
  }

  componentWillUnmount() {
    this.harmonyEvents?.destroy();
  }

  /* ----- public eventBus methods ----- */
  present = (props: ReactToastProps) => {
    this.setState({ runtimeProps: props }, () => {
      this.ve?.to(true);
      this.delayDismiss();
    });
  };

  dismiss = () => {
    clearTimeout(this.timer);
    this.ve?.to(false);
  };

  delayDismiss = () => {
    this.timer = setTimeout(() => {
      this.ve?.to(false);
    }, this.duration);
  };

  render() {
    const { visible, runtimeProps } = this.state;
    const { name, className, fixed, zIndex, duration, offset, ...rest } = { ...this.props, ...runtimeProps };

    return (
      <div
        ref={this.elementRef}
        hidden
        data-component={CLASS_NAME}
        data-visible={visible}
        data-fixed={fixed}
        className={cx(CLASS_NAME, className)}
        {...rest}
      />
    );
  }
}
