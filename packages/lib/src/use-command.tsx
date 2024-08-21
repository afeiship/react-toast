import RcComponent, { ReactToastProps } from '.';

const useCommand = (inName?: string) => {
  const name = inName || '@';
  const execute = (command: string, ...args: any[]) =>
    RcComponent.event.emit(`${name}:${command}`, ...args);

  // the command repository:
  const present = (opts?: ReactToastProps) => execute('present', opts);
  const dismiss = () => execute('dismiss');

  return {
    present,
    dismiss
  };
};

export default useCommand;
