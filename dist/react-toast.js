!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react"),require("react-append-to-document"),require("react-backdrop")):"function"==typeof define&&define.amd?define(["classnames","react","react-append-to-document","react-backdrop"],t):"object"==typeof exports?exports.ReactToast=t(require("classnames"),require("react"),require("react-append-to-document"),require("react-backdrop")):e.ReactToast=t(e.classnames,e.react,e["react-append-to-document"],e["react-backdrop"])}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),i=n(2),s=r(i);e.exports={ReactToast:a.default,ReactToastCtrl:s.default}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6);var c=n(8),u=r(c),l=n(7),f=r(l),p=n(10),d=n(9),v=r(d),h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={visible:e.visible,content:e.content},n}return i(t,e),s(t,null,[{key:"newInstance",value:function(e){return(0,v.default)(t,e,{className:"react-toast-container"})}}]),s(t,[{key:"componentWillMount",value:function(){p.ReactBackdropCtrl.createInstance({visible:!1,style:{opacity:.001}})}},{key:"show",value:function(e){var t=Object.assign({},this.props,e,{visible:!0}),n=t.backdrop;this.setState(t),n&&p.ReactBackdropCtrl.show()}},{key:"hide",value:function(){this.setState({visible:!1}),p.ReactBackdropCtrl.hide()}},{key:"render",value:function(){var e=this.props.className,t=this.state,n=t.content,r=t.visible;return u.default.createElement("div",{"data-visible":r,className:(0,f.default)("react-toast",e)},u.default.createElement("div",{className:"bd",dangerouslySetInnerHTML:{__html:n}}))}}]),t}(c.PureComponent);h.propTypes={className:c.PropTypes.string,backdrop:c.PropTypes.bool,content:c.PropTypes.string},h.defaultProps={className:"",content:"",visible:!1,backdrop:!0},t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),s=r(i),c=void 0,u=void 0,l=function(){function e(){o(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return c=c||s.default.newInstance(e)}},{key:"show",value:function(e){c.component.show(e),clearTimeout(u),u=setTimeout(function(){c.component.hide()},e.interval||2e3)}},{key:"hide",value:function(){c.component.hide()}},{key:"destroy",value:function(){c.destroy(),c=null,u&&clearTimeout(u)}}]),e}();t.default=l},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".react-toast{top:38.2%;left:50%;position:fixed;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:20px;background:rgba(0,0,0,.9);color:#fff;min-width:20%;border-radius:6px;text-align:center;-webkit-transition:opacity .3s linear,z-index .4s linear;transition:opacity .3s linear,z-index .4s linear}.react-toast>.bd{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-toast[data-visible=false]{opacity:0;z-index:-1}.react-toast[data-visible=true]{opacity:1;z-index:1}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(u(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(u(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],s=o[2],c=o[3],u={css:i,media:s,sourceMap:c};n[a]?n[a].parts.push(u):t.push(n[a]={id:a,parts:[u]})}return t}function a(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var a=m++;n=y||(y=s(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],c=d[s.id];c.refs--,a.push(c)}if(e){var u=o(e);r(u,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-toast.js.map