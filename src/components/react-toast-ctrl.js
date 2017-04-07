import ReactToast from 'components/react-toast';

let instance;
let timer;

export default class ReactToastCtrl {

  static createInstance(inProps) {
    instance = instance || ReactToast.newInstance(inProps);
    return instance;
  }

  static show(inOptions){
    instance.component.show(inOptions);
    clearTimeout(timer);
    timer=setTimeout(()=>{
      instance.component.hide();
    },inOptions.interval || 2000);
  }

  static hide(){
    instance.component.hide();
  }

  static destroy(){
    instance.destroy();
    instance = null;
    timer && clearTimeout(timer);
  }

}
