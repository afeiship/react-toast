import ReactToast from 'components/react-toast';

let instance;
let timer;

export default class ReactToastCtrl {

  static createInstance(inProps) {
    instance = instance || ReactToast.newInstance(inProps);
    return instance;
  }

  static show(inOptions,inCallback){
    instance.component.show(inOptions,inCallback);
    clearTimeout(timer);
    timer=setTimeout(()=>{
      instance.component.hide();
    },inOptions.interval || 200000);
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
