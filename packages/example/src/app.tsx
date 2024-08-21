import ReactToast, { useCommand } from '@jswork/react-toast/src/main';
import '@jswork/react-toast/src/style.scss';

function App() {
  const cmd1 = useCommand('t1');
  const cmd2 = useCommand('t2');
  return (
    <div className="m-10 p-4 shadow bg-gray-100 wp-5 text-gray-800 rel mt-50 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <ReactToast name="t1" className="text-white p-2 rounded">
        Toast content here.
      </ReactToast>
      <ReactToast name="t2" fixed className="p-2 bg-green-500 text-white rounded">
        Toast content here fixed.
      </ReactToast>
      <div className="y-2">
        <nav className="x-2 rel z-10">
          <button className="btn btn-sm btn-primary" onClick={() => cmd1.present()}>ShowToast</button>
          <button className="btn btn-sm btn-secondary ml-2" onClick={() => cmd1.dismiss()}>HideToast</button>
        </nav>
        <nav className="x-2 rel z-10">
          <button className="btn btn-sm btn-primary" onClick={() => cmd2.present({
            children: 'Dynamically set content.'
          })}>Show fixed Toast</button>
          <button className="btn btn-sm btn-secondary ml-2" onClick={() => cmd2.dismiss()}>Hide fixed Toast(optional)</button>
        </nav>
      </div>
    </div>
  );
}

export default App;
