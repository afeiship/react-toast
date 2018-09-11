import ReactToast from 'components/react-toast';

export default class {

  static instance;

  static init(inProps) {
    ReactToast.instance(inProps).then(instance => {
      this.instance = this.instance || instance;
    });
  }

  static present(inOptions, inCallback) {
    this.instance.component.present(inOptions, inCallback);
  }

  static dismiss(inOptions) {
    this.instance.component.dismiss(inOptions);
  }

  static destroy() {
    this.instance.destroy();
    this.instance = null;
  }

}
