"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{2449:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var y=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,o,a=d(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById(u.COMMENT_COUNT_SCRIPT_ID)?y():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),u.COMMENT_COUNT_SCRIPT_ID,t.body)}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID,t.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config),n=t.children,o=t.className,i=l(t,["shortname","config","children","className"]),a=o?" ".concat(o):"";return r.default.createElement("span",s({},i,{className:"".concat(u.COMMENT_COUNT_CLASS).concat(a),"data-disqus-identifier":e.identifier,"data-disqus-url":e.url}),n)}}])&&f(e.prototype,n),o&&f(e,o),c}(r.default.Component);e.CommentCount=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=u(n(7294)),o=u(n(5697)),i=n(7990);function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,o,i=p(u);function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,o=(t.commentId,t.showMedia,t.showParentComment,s(t,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:e,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&l(e.prototype,n),o&&l(e,o),u}(r.default.Component);e.CommentEmbed=m,m.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},m.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,o,a=d(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById(u.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),u.EMBED_SCRIPT_ID,t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.EMBED_SCRIPT_ID,t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById(u.THREAD_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.sso&&(this.sso=t.sso),t.language&&(this.language=t.language),u.CALLBACKS.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,l(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:u.THREAD_ID}))}}])&&f(e.prototype,n),o&&f(e,o),c}(r.default.Component);e.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func,sso:o.default.shape({name:o.default.string,button:o.default.string,icon:o.default.string,url:o.default.string,logout:o.default.string,profile_url:o.default.string,width:o.default.string,height:o.default.string})}).isRequired}},4573:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Recommendations=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,o,a=d(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.language=t.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),u.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(u.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(e){window.DISQUS_RECOMMENDATIONS=void 0}var t=window.document.getElementById(u.RECOMMENDATIONS_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,l(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:u.RECOMMENDATIONS_ID}))}}])&&f(e.prototype,n),o&&f(e,o),c}(r.default.Component);e.Recommendations=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.CALLBACKS=e.RECOMMENDATIONS_SCRIPT_ID=e.RECOMMENDATIONS_ID=e.COMMENT_EMBED_HEIGHT=e.COMMENT_EMBED_WIDTH=e.COMMENT_COUNT_SCRIPT_ID=e.COMMENT_COUNT_CLASS=e.EMBED_SCRIPT_ID=e.THREAD_ID=void 0;e.THREAD_ID="disqus_thread";e.EMBED_SCRIPT_ID="dsq-embed-scr";e.COMMENT_COUNT_CLASS="disqus-comment-count";e.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";e.COMMENT_EMBED_WIDTH=420;e.COMMENT_EMBED_HEIGHT=320;e.RECOMMENDATIONS_ID="disqus_recommendations";e.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";e.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(t,e,n){Object.defineProperty(e,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(2449),o=n(5890),i=n(4811),u=n(4573);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,u.Recommendations},6674:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(t){return t.remove()}))},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,u=n&&!r;window.clearTimeout(r),r=setTimeout((function(){r=null,n||t.apply(o,i)}),e),u&&t.apply(o,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var r,o=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===i(e[c])){if(t(e[c],n[c]))return!0}else if(e[c]!==n[c]&&!a(e[c]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},4982:function(t,e,n){n.r(e),n.d(e,{disqusConfig:function(){return p}});var r=n(1721),o=n(7294),i=n(1082),u=n(3944),a=n(8771),c=n(8678),s=n(5390),l=n(9357),f=n(9175);const p=t=>{let{slug:e,title:n}=t;return{shortname:"zeoneo",config:{identifier:e,title:n}}};let d=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){const t=this.props.data.markdownRemark,e=this.props.data.markdownRemark.timeToRead,n=this.props.data.site.siteMetadata.title,{previous:r,next:d,slug:m}=this.props.pageContext,y=p({slug:m,title:t.frontmatter.title});return o.createElement(c.Z,{location:this.props.location,title:n},o.createElement(l.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.createElement("h1",null,t.frontmatter.title),o.createElement("p",{style:{...(0,f.bA)(-.2),display:"block",marginBottom:(0,f.qZ)(1),marginTop:(0,f.qZ)(-1)}},t.frontmatter.date,o.createElement("span",{style:{marginLeft:(0,f.qZ)(1)}},"Time to read: ",e," minute(s)")),o.createElement("div",null,t.frontmatter.tags.length?"Tags: ":"",o.createElement(s.Z,null,t.frontmatter.tags)),o.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.createElement("hr",{style:{marginBottom:(0,f.qZ)(1)}}),o.createElement(a.Z,null),o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,r&&o.createElement(i.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.createElement("li",null,d&&o.createElement(i.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →"))),o.createElement(u.qw,y))},e}(o.Component);e.default=d}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6802fc03607eb8fe4d20.js.map