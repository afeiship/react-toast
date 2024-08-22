import RcComponent, { PresentCallback } from '.';


const useCommand = (inName?: string) => {
  const name = inName || '@';
  const execute = (command: string, ...args: any[]) =>
    RcComponent.event.emit(`${name}:${command}`, ...args);

  // the command repository:
  const present: PresentCallback = (text?, options?) => execute('present', text, options);
  const dismiss = () => execute('dismiss');

  return {
    present,
    dismiss,
  };
};

export default useCommand;
