import Toast from 'components/react-toast';

let instance;

export default class ToastCtrl {
  static getInstance(inProps) {
    instance = instance || Toast.newInstance(inProps);
    return instance;
  }
  static show(inOptions){
    instance.component.show(inOptions.msg);
    setTimeout(function(){
      instance.component.hide();
    },inOptions.interval || 2000);
  }
}
