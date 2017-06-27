import ReactToast from 'components/react-toast';

let instance;

export default class ReactToastCtrl {

  static createInstance(inProps) {
    instance = instance || ReactToast.newInstance(inProps);
    return instance;
  }

  static show(inOptions){
    const self = instance.component.show(inOptions);
    const timer=setTimeout(()=>{
      instance.component.hide();
      clearTimeout(timer);
    },inOptions.interval || 2000);
    return self;
  }

  static hide(){
    return instance.component.hide();
  }

  static destroy(){
    instance.destroy();
    instance = null;
  }

}
