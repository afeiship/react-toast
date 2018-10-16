import ReactToast from "components/react-toast";

export default class {
  static instance;

  static init(inProps) {
    ReactToast.instance(inProps).then(instance => {
      this.instance = this.instance || instance;
    });
  }

  static present(inOptions, inCallback) {
    if (this.instance) {
      this.instance.component.present(inOptions, inCallback);
    } else {
      setTimeout(() => {
        this.instance.component.present(inOptions, inCallback);
      });
    }
  }

  static destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}
