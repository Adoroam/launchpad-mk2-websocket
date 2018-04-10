var lib=function(c){var n={};function e(l){if(n[l])return n[l].exports;var t=n[l]={i:l,l:!1,exports:{}};return c[l].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=c,e.c=n,e.d=function(c,n,l){e.o(c,n)||Object.defineProperty(c,n,{configurable:!1,enumerable:!0,get:l})},e.r=function(c){Object.defineProperty(c,"__esModule",{value:!0})},e.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return e.d(n,"a",n),n},e.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},e.p="/dist/",e(e.s=1)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// DEFINE BLACK\nconst black = '#000000';\n\n// CHECK BUTTON COLORS\nconst all_black_check = exports.all_black_check = lp => lp.buttons.every(button => button.color === black);\n\n// COMPARE TWO ARRAYS\nconst arrCompare = exports.arrCompare = (arr1, arr2) => arr1.every((item, ind) => item === arr2[ind]);\n\n// RESET ALL COLORS TO BLACK\nconst reset_lights = exports.reset_lights = lp => {\n  lp.buttons.forEach(btn => btn.color = black);\n};\n\n// FIND BUTTON BY COORD\nconst button_by_coord = exports.button_by_coord = (x, y, lp) => lp.buttons.find(button => button.x === x && button.y === y);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWIvLi9zcmMvZm4uanM/YWU2MiJdLCJuYW1lcyI6WyJibGFjayIsImFsbF9ibGFja19jaGVjayIsImxwIiwiYnV0dG9ucyIsImV2ZXJ5IiwiYnV0dG9uIiwiY29sb3IiLCJhcnJDb21wYXJlIiwiYXJyMSIsImFycjIiLCJpdGVtIiwiaW5kIiwicmVzZXRfbGlnaHRzIiwiZm9yRWFjaCIsImJ0biIsImJ1dHRvbl9ieV9jb29yZCIsIngiLCJ5IiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLE1BQU1BLFFBQVEsU0FBZDs7QUFFQTtBQUNPLE1BQU1DLDRDQUFtQkMsRUFBRCxJQUFRQSxHQUFHQyxPQUFILENBQVdDLEtBQVgsQ0FBaUJDLFVBQVVBLE9BQU9DLEtBQVAsS0FBaUJOLEtBQTVDLENBQWhDOztBQUVQO0FBQ08sTUFBTU8sa0NBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEtBQWdCRCxLQUFLSixLQUFMLENBQVcsQ0FBQ00sSUFBRCxFQUFPQyxHQUFQLEtBQWVELFNBQVNELEtBQUtFLEdBQUwsQ0FBbkMsQ0FBbkM7O0FBRVA7QUFDTyxNQUFNQyxzQ0FBZ0JWLEVBQUQsSUFBUTtBQUFFQSxLQUFHQyxPQUFILENBQVdVLE9BQVgsQ0FBbUJDLE9BQU9BLElBQUlSLEtBQUosR0FBWU4sS0FBdEM7QUFBOEMsQ0FBN0U7O0FBRVA7QUFDTyxNQUFNZSw0Q0FBa0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9mLEVBQVAsS0FBY0EsR0FBR0MsT0FBSCxDQUMxQ2UsSUFEMEMsQ0FDckNiLFVBQVVBLE9BQU9XLENBQVAsS0FBYUEsQ0FBYixJQUFrQlgsT0FBT1ksQ0FBUCxLQUFhQSxDQURKLENBQXRDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBERUZJTkUgQkxBQ0tcclxuY29uc3QgYmxhY2sgPSAnIzAwMDAwMCdcclxuXHJcbi8vIENIRUNLIEJVVFRPTiBDT0xPUlNcclxuZXhwb3J0IGNvbnN0IGFsbF9ibGFja19jaGVjayA9IChscCkgPT4gbHAuYnV0dG9ucy5ldmVyeShidXR0b24gPT4gYnV0dG9uLmNvbG9yID09PSBibGFjaylcclxuXHJcbi8vIENPTVBBUkUgVFdPIEFSUkFZU1xyXG5leHBvcnQgY29uc3QgYXJyQ29tcGFyZSA9IChhcnIxLCBhcnIyKSA9PiBhcnIxLmV2ZXJ5KChpdGVtLCBpbmQpID0+IGl0ZW0gPT09IGFycjJbaW5kXSlcclxuXHJcbi8vIFJFU0VUIEFMTCBDT0xPUlMgVE8gQkxBQ0tcclxuZXhwb3J0IGNvbnN0IHJlc2V0X2xpZ2h0cyA9IChscCkgPT4geyBscC5idXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5jb2xvciA9IGJsYWNrKSB9XHJcblxyXG4vLyBGSU5EIEJVVFRPTiBCWSBDT09SRFxyXG5leHBvcnQgY29uc3QgYnV0dG9uX2J5X2Nvb3JkID0gKHgsIHksIGxwKSA9PiBscC5idXR0b25zXHJcbiAgLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi54ID09PSB4ICYmIGJ1dHRvbi55ID09PSB5KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socket\", function() { return socket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handle_keypress\", function() { return handle_keypress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggle_edit\", function() { return toggle_edit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"save_edit\", function() { return save_edit; });\n/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fn__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/*============================\r\n===========CONSTANTS==========\r\n============================*/\r\n\r\n// START SOCKET\r\nconst socket = io()\r\n\r\n// DEFINE BLACK FOR USE LATER\r\nconst black = '#000000'\r\n\r\n// X/Y ID REGEX\r\nconst id_coord = /^x(\\d)y(\\d)$/i\r\n\r\nconst edit_input = document.getElementById('edit')\r\nconst body_ele = document.getElementById('body')\r\n\r\n// ARRAY OF ALL ELEMENTS MAPPED TO XY\r\nlet element_array\r\n\r\n// DEFINE LAUNCHPAD ELEMENTS IN DOCUMENT\r\nconst lp = {\r\n  regions: [],\r\n  buttons: []\r\n}\r\n\r\nconst multiselect = {\r\n  edit: false,\r\n  color: '',\r\n  coord_list: []\r\n}\r\n\r\n/*============================\r\n===========FUNCTIONS==========\r\n============================*/\r\n\r\n// HANDLE KEYPRESS (BODY)\r\nconst handle_keypress = (ev) => {\r\n  let { code, ctrlKey } = ev\r\n  switch (code) {\r\n    case 'KeyS': \r\n      toggle_edit()\r\n      toggle_edit()\r\n      break\r\n    case 'Space':\r\n      edit_input.click()\r\n      break\r\n    default: \r\n      //\r\n  }\r\n}\r\nbody_ele.onkeypress = handle_keypress\r\n\r\n// FUNCTION FOR ARRAY OF ALL ELEMENTS\r\nconst create_element_array = () => lp.buttons.map(btn => {\r\n  let { x, y } = btn\r\n  return document.getElementById(`x${x}y${y}`)\r\n})\r\n\r\n// UPDATE THE DOM WITH NEW VALUES\r\nconst update_dom = () => {\r\n  lp.buttons.forEach((btn, ind) => {\r\n    let { color } = btn\r\n    let ele = element_array[ind]\r\n    ele.nodeValue = color\r\n    ele.style.backgroundColor = color\r\n  })\r\n}\r\n\r\n// get x y id\r\nconst get_id_xy = (ele) => {\r\n  let matches = ele.id.match(id_coord)\r\n  return {\r\n    x: parseInt(matches[1]),\r\n    y: parseInt(matches[2])\r\n  }\r\n}\r\n\r\n// SET ON CHANGE FOR MAIN LAUNCHPAD\r\nconst element_onchange = () => {\r\n  // SET ONCHANGE FOR INDIVIDUAL INPUTS\r\n  element_array.forEach(ele => {\r\n    ele.onchange = () => {\r\n      ele.style.backgroundColor = ele.nodeValue\r\n      let { x, y } = get_id_xy(ele)\r\n      let button = Object(_fn__WEBPACK_IMPORTED_MODULE_0__[\"button_by_coord\"])(x, y, lp)\r\n      button.color = ele.nodeValue\r\n      socket.emit('update', lp)\r\n    }\r\n    ele.onclick = () => {\r\n      if (multiselect.edit) {\r\n        let coords = get_id_xy(ele)\r\n        if (ele.title === '') {\r\n          ele.classList.add('selected')\r\n          ele.title = 'selected'\r\n          multiselect.coord_list.push(coords)\r\n        } else {\r\n          ele.classList.remove('selected')\r\n          ele.title = ''\r\n          let index = multiselect.coord_list.indexOf(coords)\r\n          multiselect.coord_list.splice(index, 1)\r\n        }\r\n      }\r\n    }\r\n  })\r\n  \r\n  edit_input.onchange = () => {\r\n    if (multiselect.edit) {\r\n      multiselect.coord_list.forEach(coords => {\r\n        let { x, y } = coords\r\n        Object(_fn__WEBPACK_IMPORTED_MODULE_0__[\"button_by_coord\"])(x, y, lp).color = edit_input.value\r\n      })\r\n      update_dom()\r\n      socket.emit('update', lp)\r\n    }\r\n  }\r\n}\r\n\r\n// TOGGLE EDIT MODE\r\nconst toggle_edit = () => {\r\n  if (multiselect.edit) {\r\n    edit_input.classList.remove('edit')\r\n    edit_input.value = black\r\n    element_array.forEach(ele => {\r\n      ele.classList.remove('selected')\r\n      ele.title = ''\r\n    })\r\n    multiselect.coord_list = []\r\n  } else {\r\n    edit_input.classList.add('edit')\r\n  }\r\n  multiselect.edit = !multiselect.edit\r\n}\r\n\r\n// SAVE NEW REGION\r\nconst save_edit = () => {\r\n  socket.emit('update', lp)\r\n}\r\n\r\n// UPDATE LP OBJECT\r\nconst update_lp = (payload) => {\r\n  let { regions, buttons } = payload\r\n  lp.buttons = buttons\r\n  lp.regions = regions\r\n}\r\n\r\n/*============================\r\n===========WEBSOCKET==========\r\n============================*/\r\n\r\n// WEBSOCKET STARTUP\r\nsocket.on('startup', (payload) => {\r\n  update_lp(payload)\r\n  element_array = create_element_array()\r\n  update_dom()\r\n  element_onchange()\r\n})\r\n\r\nsocket.on('update', (payload) => {\r\n  update_lp(payload)\r\n  update_dom()\r\n})\r\n\r\n// WEBSOCKET RESET\r\nsocket.on('reset', () => {\r\n  if (!Object(_fn__WEBPACK_IMPORTED_MODULE_0__[\"all_black_check\"])(lp)) socket.emit('reset')\r\n  Object(_fn__WEBPACK_IMPORTED_MODULE_0__[\"reset_lights\"])(lp)\r\n  edit_input.value = black\r\n  update_dom()\r\n})\r\n\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWIvLi9zcmMvbWFpbi5qcz9mYzNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZCxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7QUFDNUMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sbUJBQW1CO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxyXG4gIGFsbF9ibGFja19jaGVjayxcclxuICByZXNldF9saWdodHMsXHJcbiAgYnV0dG9uX2J5X2Nvb3JkXHJcbiB9IGZyb20gXCIuL2ZuXCI7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT1DT05TVEFOVFM9PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuLy8gU1RBUlQgU09DS0VUXHJcbmV4cG9ydCBjb25zdCBzb2NrZXQgPSBpbygpXHJcblxyXG4vLyBERUZJTkUgQkxBQ0sgRk9SIFVTRSBMQVRFUlxyXG5jb25zdCBibGFjayA9ICcjMDAwMDAwJ1xyXG5cclxuLy8gWC9ZIElEIFJFR0VYXHJcbmNvbnN0IGlkX2Nvb3JkID0gL154KFxcZCl5KFxcZCkkL2lcclxuXHJcbmNvbnN0IGVkaXRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdCcpXHJcbmNvbnN0IGJvZHlfZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxyXG5cclxuLy8gQVJSQVkgT0YgQUxMIEVMRU1FTlRTIE1BUFBFRCBUTyBYWVxyXG5sZXQgZWxlbWVudF9hcnJheVxyXG5cclxuLy8gREVGSU5FIExBVU5DSFBBRCBFTEVNRU5UUyBJTiBET0NVTUVOVFxyXG5jb25zdCBscCA9IHtcclxuICByZWdpb25zOiBbXSxcclxuICBidXR0b25zOiBbXVxyXG59XHJcblxyXG5jb25zdCBtdWx0aXNlbGVjdCA9IHtcclxuICBlZGl0OiBmYWxzZSxcclxuICBjb2xvcjogJycsXHJcbiAgY29vcmRfbGlzdDogW11cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09RlVOQ1RJT05TPT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi8vIEhBTkRMRSBLRVlQUkVTUyAoQk9EWSlcclxuZXhwb3J0IGNvbnN0IGhhbmRsZV9rZXlwcmVzcyA9IChldikgPT4ge1xyXG4gIGxldCB7IGNvZGUsIGN0cmxLZXkgfSA9IGV2XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlICdLZXlTJzogXHJcbiAgICAgIHRvZ2dsZV9lZGl0KClcclxuICAgICAgdG9nZ2xlX2VkaXQoKVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnU3BhY2UnOlxyXG4gICAgICBlZGl0X2lucHV0LmNsaWNrKClcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6IFxyXG4gICAgICAvL1xyXG4gIH1cclxufVxyXG5ib2R5X2VsZS5vbmtleXByZXNzID0gaGFuZGxlX2tleXByZXNzXHJcblxyXG4vLyBGVU5DVElPTiBGT1IgQVJSQVkgT0YgQUxMIEVMRU1FTlRTXHJcbmNvbnN0IGNyZWF0ZV9lbGVtZW50X2FycmF5ID0gKCkgPT4gbHAuYnV0dG9ucy5tYXAoYnRuID0+IHtcclxuICBsZXQgeyB4LCB5IH0gPSBidG5cclxuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHgke3h9eSR7eX1gKVxyXG59KVxyXG5cclxuLy8gVVBEQVRFIFRIRSBET00gV0lUSCBORVcgVkFMVUVTXHJcbmNvbnN0IHVwZGF0ZV9kb20gPSAoKSA9PiB7XHJcbiAgbHAuYnV0dG9ucy5mb3JFYWNoKChidG4sIGluZCkgPT4ge1xyXG4gICAgbGV0IHsgY29sb3IgfSA9IGJ0blxyXG4gICAgbGV0IGVsZSA9IGVsZW1lbnRfYXJyYXlbaW5kXVxyXG4gICAgZWxlLm5vZGVWYWx1ZSA9IGNvbG9yXHJcbiAgICBlbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcclxuICB9KVxyXG59XHJcblxyXG4vLyBnZXQgeCB5IGlkXHJcbmNvbnN0IGdldF9pZF94eSA9IChlbGUpID0+IHtcclxuICBsZXQgbWF0Y2hlcyA9IGVsZS5pZC5tYXRjaChpZF9jb29yZClcclxuICByZXR1cm4ge1xyXG4gICAgeDogcGFyc2VJbnQobWF0Y2hlc1sxXSksXHJcbiAgICB5OiBwYXJzZUludChtYXRjaGVzWzJdKVxyXG4gIH1cclxufVxyXG5cclxuLy8gU0VUIE9OIENIQU5HRSBGT1IgTUFJTiBMQVVOQ0hQQURcclxuY29uc3QgZWxlbWVudF9vbmNoYW5nZSA9ICgpID0+IHtcclxuICAvLyBTRVQgT05DSEFOR0UgRk9SIElORElWSURVQUwgSU5QVVRTXHJcbiAgZWxlbWVudF9hcnJheS5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICBlbGUub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGVsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbGUubm9kZVZhbHVlXHJcbiAgICAgIGxldCB7IHgsIHkgfSA9IGdldF9pZF94eShlbGUpXHJcbiAgICAgIGxldCBidXR0b24gPSBidXR0b25fYnlfY29vcmQoeCwgeSwgbHApXHJcbiAgICAgIGJ1dHRvbi5jb2xvciA9IGVsZS5ub2RlVmFsdWVcclxuICAgICAgc29ja2V0LmVtaXQoJ3VwZGF0ZScsIGxwKVxyXG4gICAgfVxyXG4gICAgZWxlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChtdWx0aXNlbGVjdC5lZGl0KSB7XHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IGdldF9pZF94eShlbGUpXHJcbiAgICAgICAgaWYgKGVsZS50aXRsZSA9PT0gJycpIHtcclxuICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgICBlbGUudGl0bGUgPSAnc2VsZWN0ZWQnXHJcbiAgICAgICAgICBtdWx0aXNlbGVjdC5jb29yZF9saXN0LnB1c2goY29vcmRzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgZWxlLnRpdGxlID0gJydcclxuICAgICAgICAgIGxldCBpbmRleCA9IG11bHRpc2VsZWN0LmNvb3JkX2xpc3QuaW5kZXhPZihjb29yZHMpXHJcbiAgICAgICAgICBtdWx0aXNlbGVjdC5jb29yZF9saXN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIGVkaXRfaW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAobXVsdGlzZWxlY3QuZWRpdCkge1xyXG4gICAgICBtdWx0aXNlbGVjdC5jb29yZF9saXN0LmZvckVhY2goY29vcmRzID0+IHtcclxuICAgICAgICBsZXQgeyB4LCB5IH0gPSBjb29yZHNcclxuICAgICAgICBidXR0b25fYnlfY29vcmQoeCwgeSwgbHApLmNvbG9yID0gZWRpdF9pbnB1dC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgICB1cGRhdGVfZG9tKClcclxuICAgICAgc29ja2V0LmVtaXQoJ3VwZGF0ZScsIGxwKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVE9HR0xFIEVESVQgTU9ERVxyXG5leHBvcnQgY29uc3QgdG9nZ2xlX2VkaXQgPSAoKSA9PiB7XHJcbiAgaWYgKG11bHRpc2VsZWN0LmVkaXQpIHtcclxuICAgIGVkaXRfaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdCcpXHJcbiAgICBlZGl0X2lucHV0LnZhbHVlID0gYmxhY2tcclxuICAgIGVsZW1lbnRfYXJyYXkuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICBlbGUudGl0bGUgPSAnJ1xyXG4gICAgfSlcclxuICAgIG11bHRpc2VsZWN0LmNvb3JkX2xpc3QgPSBbXVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlZGl0X2lucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxyXG4gIH1cclxuICBtdWx0aXNlbGVjdC5lZGl0ID0gIW11bHRpc2VsZWN0LmVkaXRcclxufVxyXG5cclxuLy8gU0FWRSBORVcgUkVHSU9OXHJcbmV4cG9ydCBjb25zdCBzYXZlX2VkaXQgPSAoKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoJ3VwZGF0ZScsIGxwKVxyXG59XHJcblxyXG4vLyBVUERBVEUgTFAgT0JKRUNUXHJcbmNvbnN0IHVwZGF0ZV9scCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgbGV0IHsgcmVnaW9ucywgYnV0dG9ucyB9ID0gcGF5bG9hZFxyXG4gIGxwLmJ1dHRvbnMgPSBidXR0b25zXHJcbiAgbHAucmVnaW9ucyA9IHJlZ2lvbnNcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09V0VCU09DS0VUPT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi8vIFdFQlNPQ0tFVCBTVEFSVFVQXHJcbnNvY2tldC5vbignc3RhcnR1cCcsIChwYXlsb2FkKSA9PiB7XHJcbiAgdXBkYXRlX2xwKHBheWxvYWQpXHJcbiAgZWxlbWVudF9hcnJheSA9IGNyZWF0ZV9lbGVtZW50X2FycmF5KClcclxuICB1cGRhdGVfZG9tKClcclxuICBlbGVtZW50X29uY2hhbmdlKClcclxufSlcclxuXHJcbnNvY2tldC5vbigndXBkYXRlJywgKHBheWxvYWQpID0+IHtcclxuICB1cGRhdGVfbHAocGF5bG9hZClcclxuICB1cGRhdGVfZG9tKClcclxufSlcclxuXHJcbi8vIFdFQlNPQ0tFVCBSRVNFVFxyXG5zb2NrZXQub24oJ3Jlc2V0JywgKCkgPT4ge1xyXG4gIGlmICghYWxsX2JsYWNrX2NoZWNrKGxwKSkgc29ja2V0LmVtaXQoJ3Jlc2V0JylcclxuICByZXNldF9saWdodHMobHApXHJcbiAgZWRpdF9pbnB1dC52YWx1ZSA9IGJsYWNrXHJcbiAgdXBkYXRlX2RvbSgpXHJcbn0pXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")}]);