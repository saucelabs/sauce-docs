(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{223:function(e,t,r){"use strict";var a=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=u,t.default=function(e,t){void 0===t&&(t={});return(0,u().withBaseUrl)(e,t)};var l=a(r(29)),n=r(224);function u(){var e=(0,l.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var l=void 0===a?{}:a,u=l.forcePrependBaseUrl,i=void 0!==u&&u,c=l.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,n.hasProtocol)(r))return r;if(i)return t+r;var o=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+o:o}(a,r,e,t)}}}},224:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=a,t.default=function(e){return void 0!==e&&!a(e)}},35:function(e,t,r){"use strict";var a=r(30),l=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(5)),u=a(r(0)),i=(l(r(223)),function(e){function t(){return e.apply(this,arguments)||this}return(0,n.default)(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"main__container-bg --dev-resources"},u.default.createElement("div",{className:"main__container-inner --no-flex"},u.default.createElement("div",{className:"dev-resources__title"},u.default.createElement("h2",null,"Developer Resources")),u.default.createElement("div",{class:"dev-resources__content-container"},u.default.createElement("div",{className:"dev-resources__image"},u.default.createElement("img",{src:"img/dev-resources-hero.png"})),u.default.createElement("div",{className:"dev-resources__list"},u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:"/testrunner-toolkit"},"Testrunner Toolkit")),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/saucelabs-training"},"Sample Frameworks")),u.default.createElement("li",null,u.default.createElement("a",{href:"https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/"},"Platform Con\ufb01gurator")),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/saucelabs-training"},"Sample Scripts")),u.default.createElement("li",null,u.default.createElement("a",{href:"/dev/api"},"API Reference Guide")),u.default.createElement("li",null,u.default.createElement("a",{href:"/dev/cli"},"CLI Reference Guide")))))))},t}(u.Component));t.default=i}}]);