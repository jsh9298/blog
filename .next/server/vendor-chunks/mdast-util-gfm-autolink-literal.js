"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-autolink-literal";
exports.ids = ["vendor-chunks/mdast-util-gfm-autolink-literal"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/lib/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmAutolinkLiteralFromMarkdown: () => (/* binding */ gfmAutolinkLiteralFromMarkdown),\n/* harmony export */   gfmAutolinkLiteralToMarkdown: () => (/* binding */ gfmAutolinkLiteralToMarkdown)\n/* harmony export */ });\n/* harmony import */ var ccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ccount */ \"(ssr)/./node_modules/ccount/index.js\");\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-find-and-replace */ \"(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\");\n/**\n * @import {RegExpMatchObject, ReplaceFunction} from 'mdast-util-find-and-replace'\n * @import {CompileContext, Extension as FromMarkdownExtension, Handle as FromMarkdownHandle, Transform as FromMarkdownTransform} from 'mdast-util-from-markdown'\n * @import {ConstructName, Options as ToMarkdownExtension} from 'mdast-util-to-markdown'\n * @import {Link, PhrasingContent} from 'mdast'\n */\n\n\n\n\n\n\n/** @type {ConstructName} */\nconst inConstruct = 'phrasing'\n/** @type {Array<ConstructName>} */\nconst notInConstruct = ['autolink', 'link', 'image', 'label']\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM autolink\n * literals in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM autolink literals.\n */\nfunction gfmAutolinkLiteralFromMarkdown() {\n  return {\n    transforms: [transformGfmAutolinkLiterals],\n    enter: {\n      literalAutolink: enterLiteralAutolink,\n      literalAutolinkEmail: enterLiteralAutolinkValue,\n      literalAutolinkHttp: enterLiteralAutolinkValue,\n      literalAutolinkWww: enterLiteralAutolinkValue\n    },\n    exit: {\n      literalAutolink: exitLiteralAutolink,\n      literalAutolinkEmail: exitLiteralAutolinkEmail,\n      literalAutolinkHttp: exitLiteralAutolinkHttp,\n      literalAutolinkWww: exitLiteralAutolinkWww\n    }\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM autolink\n * literals in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM autolink literals.\n */\nfunction gfmAutolinkLiteralToMarkdown() {\n  return {\n    unsafe: [\n      {\n        character: '@',\n        before: '[+\\\\-.\\\\w]',\n        after: '[\\\\-.\\\\w]',\n        inConstruct,\n        notInConstruct\n      },\n      {\n        character: '.',\n        before: '[Ww]',\n        after: '[\\\\-.\\\\w]',\n        inConstruct,\n        notInConstruct\n      },\n      {\n        character: ':',\n        before: '[ps]',\n        after: '\\\\/',\n        inConstruct,\n        notInConstruct\n      }\n    ]\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterLiteralAutolink(token) {\n  this.enter({type: 'link', title: null, url: '', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterLiteralAutolinkValue(token) {\n  this.config.enter.autolinkProtocol.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkHttp(token) {\n  this.config.exit.autolinkProtocol.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkWww(token) {\n  this.config.exit.data.call(this, token)\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'link')\n  node.url = 'http://' + this.sliceSerialize(token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkEmail(token) {\n  this.config.exit.autolinkEmail.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolink(token) {\n  this.exit(token)\n}\n\n/** @type {FromMarkdownTransform} */\nfunction transformGfmAutolinkLiterals(tree) {\n  (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_1__.findAndReplace)(\n    tree,\n    [\n      [/(https?:\\/\\/|www(?=\\.))([-.\\w]+)([^ \\t\\r\\n]*)/gi, findUrl],\n      [/(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)/gu, findEmail]\n    ],\n    {ignore: ['link', 'linkReference']}\n  )\n}\n\n/**\n * @type {ReplaceFunction}\n * @param {string} _\n * @param {string} protocol\n * @param {string} domain\n * @param {string} path\n * @param {RegExpMatchObject} match\n * @returns {Array<PhrasingContent> | Link | false}\n */\n// eslint-disable-next-line max-params\nfunction findUrl(_, protocol, domain, path, match) {\n  let prefix = ''\n\n  // Not an expected previous character.\n  if (!previous(match)) {\n    return false\n  }\n\n  // Treat `www` as part of the domain.\n  if (/^w/i.test(protocol)) {\n    domain = protocol + domain\n    protocol = ''\n    prefix = 'http://'\n  }\n\n  if (!isCorrectDomain(domain)) {\n    return false\n  }\n\n  const parts = splitUrl(domain + path)\n\n  if (!parts[0]) return false\n\n  /** @type {Link} */\n  const result = {\n    type: 'link',\n    title: null,\n    url: prefix + protocol + parts[0],\n    children: [{type: 'text', value: protocol + parts[0]}]\n  }\n\n  if (parts[1]) {\n    return [result, {type: 'text', value: parts[1]}]\n  }\n\n  return result\n}\n\n/**\n * @type {ReplaceFunction}\n * @param {string} _\n * @param {string} atext\n * @param {string} label\n * @param {RegExpMatchObject} match\n * @returns {Link | false}\n */\nfunction findEmail(_, atext, label, match) {\n  if (\n    // Not an expected previous character.\n    !previous(match, true) ||\n    // Label ends in not allowed character.\n    /[-\\d_]$/.test(label)\n  ) {\n    return false\n  }\n\n  return {\n    type: 'link',\n    title: null,\n    url: 'mailto:' + atext + '@' + label,\n    children: [{type: 'text', value: atext + '@' + label}]\n  }\n}\n\n/**\n * @param {string} domain\n * @returns {boolean}\n */\nfunction isCorrectDomain(domain) {\n  const parts = domain.split('.')\n\n  if (\n    parts.length < 2 ||\n    (parts[parts.length - 1] &&\n      (/_/.test(parts[parts.length - 1]) ||\n        !/[a-zA-Z\\d]/.test(parts[parts.length - 1]))) ||\n    (parts[parts.length - 2] &&\n      (/_/.test(parts[parts.length - 2]) ||\n        !/[a-zA-Z\\d]/.test(parts[parts.length - 2])))\n  ) {\n    return false\n  }\n\n  return true\n}\n\n/**\n * @param {string} url\n * @returns {[string, string | undefined]}\n */\nfunction splitUrl(url) {\n  const trailExec = /[!\"&'),.:;<>?\\]}]+$/.exec(url)\n\n  if (!trailExec) {\n    return [url, undefined]\n  }\n\n  url = url.slice(0, trailExec.index)\n\n  let trail = trailExec[0]\n  let closingParenIndex = trail.indexOf(')')\n  const openingParens = (0,ccount__WEBPACK_IMPORTED_MODULE_2__.ccount)(url, '(')\n  let closingParens = (0,ccount__WEBPACK_IMPORTED_MODULE_2__.ccount)(url, ')')\n\n  while (closingParenIndex !== -1 && openingParens > closingParens) {\n    url += trail.slice(0, closingParenIndex + 1)\n    trail = trail.slice(closingParenIndex + 1)\n    closingParenIndex = trail.indexOf(')')\n    closingParens++\n  }\n\n  return [url, trail]\n}\n\n/**\n * @param {RegExpMatchObject} match\n * @param {boolean | null | undefined} [email=false]\n * @returns {boolean}\n */\nfunction previous(match, email) {\n  const code = match.input.charCodeAt(match.index - 1)\n\n  return (\n    (match.index === 0 ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.unicodeWhitespace)(code) ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.unicodePunctuation)(code)) &&\n    // If it’s an email, the previous character should not be a slash.\n    (!email || code !== 47)\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tYXV0b2xpbmstbGl0ZXJhbC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLG9DQUFvQztBQUNoRCxZQUFZLHNIQUFzSDtBQUNsSSxZQUFZLCtDQUErQztBQUMzRCxZQUFZLHVCQUF1QjtBQUNuQzs7QUFFNkI7QUFDTTtBQUMyQztBQUNwQjs7QUFFMUQsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWMsaURBQWlEO0FBQy9EOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBTTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHVCQUF1QjtBQUNsQztBQUNBLEVBQUUsMkVBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEVBQUUsSUFBSSxFQUFFO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5Q0FBeUM7QUFDekQ7O0FBRUE7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlDQUF5QztBQUN6RDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCLE1BQU07O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFNO0FBQzlCLHNCQUFzQiw4Q0FBTTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLDRCQUE0QjtBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDJFQUFpQjtBQUN2QixNQUFNLDRFQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxKZWFuQWhTZW9wXFxtZWhcXGJsb2dcXG5vZGVfbW9kdWxlc1xcbWRhc3QtdXRpbC1nZm0tYXV0b2xpbmstbGl0ZXJhbFxcbGliXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge1JlZ0V4cE1hdGNoT2JqZWN0LCBSZXBsYWNlRnVuY3Rpb259IGZyb20gJ21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZSdcbiAqIEBpbXBvcnQge0NvbXBpbGVDb250ZXh0LCBFeHRlbnNpb24gYXMgRnJvbU1hcmtkb3duRXh0ZW5zaW9uLCBIYW5kbGUgYXMgRnJvbU1hcmtkb3duSGFuZGxlLCBUcmFuc2Zvcm0gYXMgRnJvbU1hcmtkb3duVHJhbnNmb3JtfSBmcm9tICdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nXG4gKiBAaW1wb3J0IHtDb25zdHJ1Y3ROYW1lLCBPcHRpb25zIGFzIFRvTWFya2Rvd25FeHRlbnNpb259IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nXG4gKiBAaW1wb3J0IHtMaW5rLCBQaHJhc2luZ0NvbnRlbnR9IGZyb20gJ21kYXN0J1xuICovXG5cbmltcG9ydCB7Y2NvdW50fSBmcm9tICdjY291bnQnXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHt1bmljb2RlUHVuY3R1YXRpb24sIHVuaWNvZGVXaGl0ZXNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2ZpbmRBbmRSZXBsYWNlfSBmcm9tICdtZGFzdC11dGlsLWZpbmQtYW5kLXJlcGxhY2UnXG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0TmFtZX0gKi9cbmNvbnN0IGluQ29uc3RydWN0ID0gJ3BocmFzaW5nJ1xuLyoqIEB0eXBlIHtBcnJheTxDb25zdHJ1Y3ROYW1lPn0gKi9cbmNvbnN0IG5vdEluQ29uc3RydWN0ID0gWydhdXRvbGluaycsICdsaW5rJywgJ2ltYWdlJywgJ2xhYmVsJ11cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIGF1dG9saW5rXG4gKiBsaXRlcmFscyBpbiBtYXJrZG93bi5cbiAqXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIGF1dG9saW5rIGxpdGVyYWxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtQXV0b2xpbmtMaXRlcmFsRnJvbU1hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIHRyYW5zZm9ybXM6IFt0cmFuc2Zvcm1HZm1BdXRvbGlua0xpdGVyYWxzXSxcbiAgICBlbnRlcjoge1xuICAgICAgbGl0ZXJhbEF1dG9saW5rOiBlbnRlckxpdGVyYWxBdXRvbGluayxcbiAgICAgIGxpdGVyYWxBdXRvbGlua0VtYWlsOiBlbnRlckxpdGVyYWxBdXRvbGlua1ZhbHVlLFxuICAgICAgbGl0ZXJhbEF1dG9saW5rSHR0cDogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSxcbiAgICAgIGxpdGVyYWxBdXRvbGlua1d3dzogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZVxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgbGl0ZXJhbEF1dG9saW5rOiBleGl0TGl0ZXJhbEF1dG9saW5rLFxuICAgICAgbGl0ZXJhbEF1dG9saW5rRW1haWw6IGV4aXRMaXRlcmFsQXV0b2xpbmtFbWFpbCxcbiAgICAgIGxpdGVyYWxBdXRvbGlua0h0dHA6IGV4aXRMaXRlcmFsQXV0b2xpbmtIdHRwLFxuICAgICAgbGl0ZXJhbEF1dG9saW5rV3d3OiBleGl0TGl0ZXJhbEF1dG9saW5rV3d3XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gYXV0b2xpbmtcbiAqIGxpdGVyYWxzIGluIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtUb01hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIGF1dG9saW5rIGxpdGVyYWxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtQXV0b2xpbmtMaXRlcmFsVG9NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICB1bnNhZmU6IFtcbiAgICAgIHtcbiAgICAgICAgY2hhcmFjdGVyOiAnQCcsXG4gICAgICAgIGJlZm9yZTogJ1srXFxcXC0uXFxcXHddJyxcbiAgICAgICAgYWZ0ZXI6ICdbXFxcXC0uXFxcXHddJyxcbiAgICAgICAgaW5Db25zdHJ1Y3QsXG4gICAgICAgIG5vdEluQ29uc3RydWN0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjaGFyYWN0ZXI6ICcuJyxcbiAgICAgICAgYmVmb3JlOiAnW1d3XScsXG4gICAgICAgIGFmdGVyOiAnW1xcXFwtLlxcXFx3XScsXG4gICAgICAgIGluQ29uc3RydWN0LFxuICAgICAgICBub3RJbkNvbnN0cnVjdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2hhcmFjdGVyOiAnOicsXG4gICAgICAgIGJlZm9yZTogJ1twc10nLFxuICAgICAgICBhZnRlcjogJ1xcXFwvJyxcbiAgICAgICAgaW5Db25zdHJ1Y3QsXG4gICAgICAgIG5vdEluQ29uc3RydWN0XG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJMaXRlcmFsQXV0b2xpbmsodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ2xpbmsnLCB0aXRsZTogbnVsbCwgdXJsOiAnJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5lbnRlci5hdXRvbGlua1Byb3RvY29sLmNhbGwodGhpcywgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGlua0h0dHAodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZXhpdC5hdXRvbGlua1Byb3RvY29sLmNhbGwodGhpcywgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGlua1d3dyh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICBhc3NlcnQobm9kZS50eXBlID09PSAnbGluaycpXG4gIG5vZGUudXJsID0gJ2h0dHA6Ly8nICsgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rRW1haWwodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZXhpdC5hdXRvbGlua0VtYWlsLmNhbGwodGhpcywgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGluayh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbi8qKiBAdHlwZSB7RnJvbU1hcmtkb3duVHJhbnNmb3JtfSAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtR2ZtQXV0b2xpbmtMaXRlcmFscyh0cmVlKSB7XG4gIGZpbmRBbmRSZXBsYWNlKFxuICAgIHRyZWUsXG4gICAgW1xuICAgICAgWy8oaHR0cHM/OlxcL1xcL3x3d3coPz1cXC4pKShbLS5cXHddKykoW14gXFx0XFxyXFxuXSopL2dpLCBmaW5kVXJsXSxcbiAgICAgIFsvKD88PV58XFxzfFxccHtQfXxcXHB7U30pKFstLlxcdytdKylAKFstXFx3XSsoPzpcXC5bLVxcd10rKSspL2d1LCBmaW5kRW1haWxdXG4gICAgXSxcbiAgICB7aWdub3JlOiBbJ2xpbmsnLCAnbGlua1JlZmVyZW5jZSddfVxuICApXG59XG5cbi8qKlxuICogQHR5cGUge1JlcGxhY2VGdW5jdGlvbn1cbiAqIEBwYXJhbSB7c3RyaW5nfSBfXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvdG9jb2xcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb21haW5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge1JlZ0V4cE1hdGNoT2JqZWN0fSBtYXRjaFxuICogQHJldHVybnMge0FycmF5PFBocmFzaW5nQ29udGVudD4gfCBMaW5rIHwgZmFsc2V9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBmaW5kVXJsKF8sIHByb3RvY29sLCBkb21haW4sIHBhdGgsIG1hdGNoKSB7XG4gIGxldCBwcmVmaXggPSAnJ1xuXG4gIC8vIE5vdCBhbiBleHBlY3RlZCBwcmV2aW91cyBjaGFyYWN0ZXIuXG4gIGlmICghcHJldmlvdXMobWF0Y2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUcmVhdCBgd3d3YCBhcyBwYXJ0IG9mIHRoZSBkb21haW4uXG4gIGlmICgvXncvaS50ZXN0KHByb3RvY29sKSkge1xuICAgIGRvbWFpbiA9IHByb3RvY29sICsgZG9tYWluXG4gICAgcHJvdG9jb2wgPSAnJ1xuICAgIHByZWZpeCA9ICdodHRwOi8vJ1xuICB9XG5cbiAgaWYgKCFpc0NvcnJlY3REb21haW4oZG9tYWluKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgcGFydHMgPSBzcGxpdFVybChkb21haW4gKyBwYXRoKVxuXG4gIGlmICghcGFydHNbMF0pIHJldHVybiBmYWxzZVxuXG4gIC8qKiBAdHlwZSB7TGlua30gKi9cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6IHByZWZpeCArIHByb3RvY29sICsgcGFydHNbMF0sXG4gICAgY2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogcHJvdG9jb2wgKyBwYXJ0c1swXX1dXG4gIH1cblxuICBpZiAocGFydHNbMV0pIHtcbiAgICByZXR1cm4gW3Jlc3VsdCwge3R5cGU6ICd0ZXh0JywgdmFsdWU6IHBhcnRzWzFdfV1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAdHlwZSB7UmVwbGFjZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtzdHJpbmd9IF9cbiAqIEBwYXJhbSB7c3RyaW5nfSBhdGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gKiBAcGFyYW0ge1JlZ0V4cE1hdGNoT2JqZWN0fSBtYXRjaFxuICogQHJldHVybnMge0xpbmsgfCBmYWxzZX1cbiAqL1xuZnVuY3Rpb24gZmluZEVtYWlsKF8sIGF0ZXh0LCBsYWJlbCwgbWF0Y2gpIHtcbiAgaWYgKFxuICAgIC8vIE5vdCBhbiBleHBlY3RlZCBwcmV2aW91cyBjaGFyYWN0ZXIuXG4gICAgIXByZXZpb3VzKG1hdGNoLCB0cnVlKSB8fFxuICAgIC8vIExhYmVsIGVuZHMgaW4gbm90IGFsbG93ZWQgY2hhcmFjdGVyLlxuICAgIC9bLVxcZF9dJC8udGVzdChsYWJlbClcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6ICdtYWlsdG86JyArIGF0ZXh0ICsgJ0AnICsgbGFiZWwsXG4gICAgY2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogYXRleHQgKyAnQCcgKyBsYWJlbH1dXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZG9tYWluXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDb3JyZWN0RG9tYWluKGRvbWFpbikge1xuICBjb25zdCBwYXJ0cyA9IGRvbWFpbi5zcGxpdCgnLicpXG5cbiAgaWYgKFxuICAgIHBhcnRzLmxlbmd0aCA8IDIgfHxcbiAgICAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0gJiZcbiAgICAgICgvXy8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSkgfHxcbiAgICAgICAgIS9bYS16QS1aXFxkXS8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSkpKSB8fFxuICAgIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSAmJlxuICAgICAgKC9fLy50ZXN0KHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdKSB8fFxuICAgICAgICAhL1thLXpBLVpcXGRdLy50ZXN0KHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdKSkpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7W3N0cmluZywgc3RyaW5nIHwgdW5kZWZpbmVkXX1cbiAqL1xuZnVuY3Rpb24gc3BsaXRVcmwodXJsKSB7XG4gIGNvbnN0IHRyYWlsRXhlYyA9IC9bIVwiJicpLC46Ozw+P1xcXX1dKyQvLmV4ZWModXJsKVxuXG4gIGlmICghdHJhaWxFeGVjKSB7XG4gICAgcmV0dXJuIFt1cmwsIHVuZGVmaW5lZF1cbiAgfVxuXG4gIHVybCA9IHVybC5zbGljZSgwLCB0cmFpbEV4ZWMuaW5kZXgpXG5cbiAgbGV0IHRyYWlsID0gdHJhaWxFeGVjWzBdXG4gIGxldCBjbG9zaW5nUGFyZW5JbmRleCA9IHRyYWlsLmluZGV4T2YoJyknKVxuICBjb25zdCBvcGVuaW5nUGFyZW5zID0gY2NvdW50KHVybCwgJygnKVxuICBsZXQgY2xvc2luZ1BhcmVucyA9IGNjb3VudCh1cmwsICcpJylcblxuICB3aGlsZSAoY2xvc2luZ1BhcmVuSW5kZXggIT09IC0xICYmIG9wZW5pbmdQYXJlbnMgPiBjbG9zaW5nUGFyZW5zKSB7XG4gICAgdXJsICs9IHRyYWlsLnNsaWNlKDAsIGNsb3NpbmdQYXJlbkluZGV4ICsgMSlcbiAgICB0cmFpbCA9IHRyYWlsLnNsaWNlKGNsb3NpbmdQYXJlbkluZGV4ICsgMSlcbiAgICBjbG9zaW5nUGFyZW5JbmRleCA9IHRyYWlsLmluZGV4T2YoJyknKVxuICAgIGNsb3NpbmdQYXJlbnMrK1xuICB9XG5cbiAgcmV0dXJuIFt1cmwsIHRyYWlsXVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hPYmplY3R9IG1hdGNoXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZW1haWw9ZmFsc2VdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcHJldmlvdXMobWF0Y2gsIGVtYWlsKSB7XG4gIGNvbnN0IGNvZGUgPSBtYXRjaC5pbnB1dC5jaGFyQ29kZUF0KG1hdGNoLmluZGV4IC0gMSlcblxuICByZXR1cm4gKFxuICAgIChtYXRjaC5pbmRleCA9PT0gMCB8fFxuICAgICAgdW5pY29kZVdoaXRlc3BhY2UoY29kZSkgfHxcbiAgICAgIHVuaWNvZGVQdW5jdHVhdGlvbihjb2RlKSkgJiZcbiAgICAvLyBJZiBpdOKAmXMgYW4gZW1haWwsIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgc2hvdWxkIG5vdCBiZSBhIHNsYXNoLlxuICAgICghZW1haWwgfHwgY29kZSAhPT0gNDcpXG4gIClcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js\n");

/***/ })

};
;