import Toast from 'components/react-toast';

let instance;
let timer;

export default class ToastCtrl {

  static createInstance(inProps) {
    instance = instance || Toast.newInstance(inProps);
    return instance;
  }

  static show(inOptions){
    instance.component.show(inOptions);
    // clearTimeout(timer);
    timer=setTimeout(()=>{
      instance.component.hide();
    },inOptions.interval || 2000);
  }

}
