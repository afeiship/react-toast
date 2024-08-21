# react-toast
> Toast for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-toast
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-toast/dist/style.css";

  // or use sass
  @import "~@jswork/react-toast/dist/style.scss";
  ```
2. import js
  ```js
  import ReactToast, { useCommand } from '@jswork/react-toast/main';
  import '@jswork/react-toast/dist/style.scss';

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
              children: 'Dynamically set content.',
              duration: 5 * 1000
            })}>Show fixed Toast
            </button>
            <button className="btn btn-sm btn-secondary ml-2" onClick={() => cmd2.dismiss()}>Hide fixed Toast(optional)
            </button>
          </nav>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>methods: preset/dismiss</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-toast/

## license
Code released under [the MIT license](https://github.com/afeiship/react-toast/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-toast
[version-url]: https://npmjs.org/package/@jswork/react-toast

[license-image]: https://img.shields.io/npm/l/@jswork/react-toast
[license-url]: https://github.com/afeiship/react-toast/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-toast
[size-url]: https://github.com/afeiship/react-toast/blob/master/dist/react-toast.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-toast
[download-url]: https://www.npmjs.com/package/@jswork/react-toast
