(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(n,s,e){"use strict";e.r(s);var t=e(0),o=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,s=this._self._c||n;return s("div",{staticClass:"content"},[s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install -g vuepress\nmkdir handbook\ncd handbook\nnpm init -y\n\nmkdir handbook/docs\ncd handbook/docs\necho '# Hello VuePress!' > README.md\nvuepress dev .\nvuepress build .\n\nnpm run docs:dev\nnpm run docs:build\n\ncd ~/docs/handbook/docs/.vuepress/dist\n\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\ngit push -f git@github.com:dodosss/handbook.git master:gh-pages\n\n\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);