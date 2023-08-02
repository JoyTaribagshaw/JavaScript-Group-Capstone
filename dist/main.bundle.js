/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/Api.js":
/*!***********************!*\
  !*** ./module/Api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var _src_Apicomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Apicomment.js */ \"./src/Apicomment.js\");\n/* harmony import */ var _src_Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Likes.js */ \"./src/Likes.js\");\n// import LikesApi from '../src/Likes.js';\r\n\r\n// export default class Movies {\r\n//   static url = 'https://api.tvmaze.com/search/shows?q=the';\r\n\r\n//     static counterMovies = async () => {\r\n//       const response = await fetch(this.url);\r\n//       const data = await response.json();\r\n//       let count = 0;\r\n//       data.forEach((item) => {\r\n//         if (item.show.image !== null) {\r\n//           count += 1;\r\n//         }\r\n//         const title = document.querySelector('.title');\r\n//         if (title) title.textContent = `MovieHub (${count}) Movies `;\r\n//       });\r\n\r\n//       return count;\r\n//     };\r\n\r\n//     static displayMovies = async () => {\r\n//       const response = await fetch(this.url);\r\n//       const data = await response.json();\r\n//       const movieContainer = document.querySelector('.movie-container');\r\n\r\n//       data.forEach((item) => {\r\n//         if (item.show.image !== null) {\r\n//           const div = document.createElement('div');\r\n//           div.classList.add('each-movie');\r\n//           div.innerHTML = `\r\n//           <img src=\"${item.show.image.medium}\" alt=\"movie-image\">\r\n//         <div class=\"each\">\r\n//           <li>${item.show.name}</li>\r\n//           <div class=\"likes\">\r\n//            <i class=\"fa-regular fa-thumbs-up\" id=\"${item.show.id}\"></i>\r\n//             <p>0 Likes</p>\r\n//           </div>\r\n//         </div>      \r\n//         <button id=\"${item.show.id}\" class=\"button\">Comments</button>`;\r\n//           movieContainer.appendChild(div);\r\n//         }\r\n//         this.likes();\r\n//         this.addLikes();\r\n//       });\r\n//     }\r\n\r\n//     static addLikes = () => {\r\n//       const icons = document.querySelectorAll(' .fa-thumbs-up');\r\n//       icons.forEach((icon) => {\r\n//         icon.addEventListener('click', () => {\r\n//           LikesApi.setLikes(parseInt(icon.id, 10)).then(() => {\r\n//             this.likes();\r\n//           });\r\n//         });\r\n//       });\r\n//     };\r\n\r\n//     static likes = () => {\r\n//       LikesApi.getLikes().then((data) => {\r\n//         data.forEach((item) => {\r\n//           const icon = document.getElementById(`${item.item_id}`);\r\n//           if (icon) {\r\n//             icon.nextElementSibling.innerHTML = `${item.likes} likes`;\r\n//           }\r\n//         });\r\n//       });\r\n//     };\r\n// }\r\n\r\n\r\n\r\n\r\nclass Movies {\r\n  // static url = 'https://api.tvmaze.com/search/shows?q=the';\r\n  static url = 'https://api.tvmaze.com/shows';\r\n\r\n  static counterMovies = async () => {\r\n    const response = await fetch(this.url);\r\n    const data = await response.json();\r\n    let count = 0;\r\n    data.forEach((item) => {\r\n      if (item.show.image !== null) {\r\n        count += 1;\r\n      }\r\n      const title = document.querySelector('.title');\r\n      if (title) title.textContent = `At The Movies (${count}) Movies `;\r\n    });\r\n\r\n    return count;\r\n  };\r\n\r\n  static displayMovies = async () => {\r\n    const response = await fetch(this.url);\r\n    const data = await response.json();\r\n    const movieContainer = document.querySelector('.movie-container');\r\n\r\n    data.forEach((item) => {\r\n      if (item.show.image !== null) {\r\n        const div = document.createElement('div');\r\n        div.classList.add('each-movie');\r\n        div.innerHTML = `\r\n        <img src=\"${item.show.image.medium}\" alt=\"movie-image\">\r\n      <div class=\"each\">\r\n        <li>${item.show.name}</li>\r\n        <div class=\"likes\">\r\n         <i class=\"fa-regular fa-thumbs-up\" id=\"${item.show.id}\"></i>\r\n          <p>1 Likes</p>\r\n        </div>\r\n      </div>      \r\n      <button id=\"${item.show.id}\" class=\"button\">Comments</button>`;\r\n        movieContainer.appendChild(div);\r\n      }\r\n      //   this.likes();\r\n      this.addLikes();\r\n    });\r\n    const commentBtns = document.querySelectorAll('.button');\r\n    commentBtns.forEach((btn) => {\r\n      btn.addEventListener('click', (e) => {\r\n        const id = e.target.getAttribute('id');\r\n        const popup = data.filter(\r\n          (elem) => elem.show.id === parseInt(id, 10),\r\n        )[0].show;\r\n        const popupDiv = `<div class=\"show-popup\">\r\n        <div class= \"popups\">\r\n        <div class=\"closebtn\" id=\"delete\">\r\n        <i class=\"fas fa-times\"></i>\r\n        </div>  \r\n           <div class=\"firstPopUpDetails\">\r\n           <div class=\"popup-image\">\r\n           <img src=\"${popup.image.medium}\" alt=\"character\">\r\n               </div>\r\n               <div class=\"title\">\r\n                 <h1>${popup.name}</h1>\r\n                   </div> \r\n           </div>\r\n            \r\n           <div class=\"contents\">\r\n           <div class=\"card\">\r\n             \r\n             <ul class=\"details\">\r\n               <li><p>Genre:</p> <span>${\r\n                 popup.genres.toString() || 'Not Available'\r\n               }</span></li>\r\n               <li><p>Language:</p> <span>${popup.language}</span></li>\r\n               <li> <p>Premiered:</p> <span>${popup.premiered}</span></li>\r\n               <li> <p>Rating:</p> <span>${popup.rating.average}</span></li>\r\n               <li> <p>Official site:</p> <span><a class=\"link\" href=\"${\r\n                 popup.officialSite\r\n               }\">Watch</a></span></li>\r\n             </ul>  \r\n           </div>\r\n\r\n\r\n           <div class=\"summary\">\r\n           <h5 class=\"center\">Summary</h5>\r\n           <p>${popup.summary}</p>\r\n         </div>\r\n         <div class=\"d-comments\">\r\n         <h5 class=\"comment-count center\">Comments 0</h5>\r\n         <ul class=\"display-comments\"></ul>\r\n       </div>\r\n         \r\n           <div class=\"form-div\">\r\n           <h5 class=\"center\">Add a comment</h5>\r\n           <form class = \"form\" action=\"\">\r\n             <input class=\"username\" type=\"text\" placeholder=\"Your name ...\">\r\n             <input class=\"comment\" type=\"text\" placeholder=\"Your comment ...\">\r\n             <button class=\"add-comment button\" type=\"submit\">comment</button>\r\n           </form>\r\n           </div>\r\n\r\n\r\n\r\n        </div>\r\n        </div>`;\r\n\r\n        document.body.insertAdjacentHTML('beforeend', popupDiv);\r\n        const closeBtn = document.querySelector('#delete');\r\n        closeBtn.addEventListener('click', () => {\r\n          document.querySelector('.show-popup').remove();\r\n        });\r\n        this.commentCounter(id);\r\n        this.displayComment(id);\r\n      });\r\n    });\r\n  };\r\n\r\n  // comment section\r\n  static displayComment = (id) => {\r\n    const username = document.querySelector('.username');\r\n    const comment = document.querySelector('.comment');\r\n    const addCommentBtn = document.querySelector('.add-comment');\r\n    addCommentBtn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      _src_Apicomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setComments(id, username.value, comment.value).then((data) => {\r\n        if (data === 'Created') {\r\n          this.commentCounter(id);\r\n          username.value = '';\r\n          comment.value = '';\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  static commentCounter = (id) => {\r\n    _src_Apicomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(id).then((data) => {\r\n      const display = document.querySelector('.display-comments');\r\n      const count = document.querySelector('.comment-count');\r\n      count.textContent = `Comments (${_src_Apicomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].counterComments(data)})`;\r\n      display.innerHTML = '';\r\n      data.forEach((item) => {\r\n        const commentList = document.createElement('li');\r\n\r\n        commentList.textContent = `${item.creation_date} ${item.username} : ${item.comment}`;\r\n        display.appendChild(commentList);\r\n      });\r\n    });\r\n  };\r\n\r\n  // likes-section\r\n  static addLikes = () => {\r\n    const icons = document.querySelectorAll(' .fa-thumbs-up');\r\n    icons.forEach((icon) => {\r\n      icon.addEventListener('click', () => {\r\n        _src_Likes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLikes(parseInt(icon.id, 10)).then(() => {\r\n          this.likes();\r\n        });\r\n      });\r\n    });\r\n  };\r\n\r\n  static likes = () => {\r\n    _src_Likes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes().then((data) => {\r\n      data.forEach((item) => {\r\n        const icon = document.getElementById(`${item.item_id}`);\r\n        if (icon) {\r\n          icon.nextElementSibling.innerHTML = `${item.likes} likes`;\r\n        }\r\n      });\r\n    });\r\n  };\r\n}\n\n//# sourceURL=webpack://javascript-group-capstone/./module/Api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --primary: #0e0e0e;\r\n  --secondary: #e5d4d4;\r\n}\r\n\r\nbody {\r\n  background-color: var(--primary);\r\n  color: var(--secondary);\r\n}\r\n\r\n.logo {\r\n  height: 76px;\r\n  border-radius: 30px;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  padding: 50px 20px;\r\n  color: var(--primary);\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.head-list {\r\n  display: flex;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  gap: 90px;\r\n}\r\n\r\nli a {\r\n  display: flex;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  font-size: 28px;\r\n  font-family: 'Patrick Hand', cursive;\r\n  color: var(--secondary);\r\n}\r\n\r\n#main-title {\r\n  color: var(--secondary);\r\n  font-size: 35px;\r\n  font-family: 'Patrick Hand', cursive;\r\n}\r\n\r\n/* h2 {\r\n  text-align: center;\r\n} */\r\n\r\n.movie-container {\r\n  --gap: 30px;\r\n  --num-cols: 5;\r\n  --row-height: 200px;\r\n\r\n  display: grid;\r\n  grid-template-columns: repeat(var(--num-cols), 1fr);\r\n  grid-auto-rows: 1fr 1fr 1fr;\r\n  gap: var(--gap);\r\n  padding: var(--gap);\r\n}\r\n\r\n.movie-container img {\r\n  width: 100%;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.movie-container li {\r\n  list-style-type: none;\r\n  font-size: 18px;\r\n  font-family: 'Patrick Hand', cursive;\r\n}\r\n\r\nfooter p {\r\n  font-weight: 600;\r\n  margin: 0;\r\n  font-size: 20px;\r\n  font-family: 'Patrick Hand', cursive;\r\n}\r\n\r\n.likes p {\r\n  width: 100%;\r\n  padding-top: 12px;\r\n  font-size: 15px;\r\n  font-family: 'Patrick Hand', cursive;\r\n}\r\n\r\n.fa-thumbs-up::before {\r\n  font-size: 20px;\r\n}\r\n\r\n.button {\r\n  border: 3px solid black;\r\n  padding: 10px;\r\n  margin: 20px auto;\r\n  font-size: 18px;\r\n  font-family: 'Patrick Hand', cursive;\r\n  box-shadow: 6px 3px 4px;\r\n  width: 80%;\r\n  justify-content: center;\r\n  display: flex;\r\n  background-color: var(--secondary);\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  color: var(--primary);\r\n  background-color: darkgrey;\r\n  padding: 40px;\r\n  text-align: left;\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.each li {\r\n  font-family: cursive, sans-serif;\r\n  font-size: 25px;\r\n}\r\n\r\n.details li {\r\n  list-style: none;\r\n  padding: 5px;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  box-shadow: 2px 5px 7px 5px rgba(29, 26, 26, 0.75);\r\n}\r\n\r\n.display-comments li {\r\n  list-style-type: none;\r\n  text-align: center;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.details li:hover {\r\n  background-color: rgb(93, 12, 12);\r\n  transition: 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-image img {\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n\r\n.each-movie img {\r\n  border-radius: 12px;\r\n}\r\n\r\n.popup {\r\n  background-color: red;\r\n  position: relative;\r\n  height: 90vh;\r\n  width: 60vw;\r\n  color: red;\r\n}\r\n\r\n.show-popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  position: fixed;\r\n  -webkit-backdrop-filter: blur(5px);\r\n  -moz-backdrop-filter: blur(5px);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.popups {\r\n  position: absolute;\r\n  width: 81%;\r\n  margin: 0 auto;\r\n  top: 51%;\r\n  padding: 21px;\r\n  max-width: 51%;\r\n  left: 51%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  overflow-y: auto;\r\n  height: 91vh;\r\n  background-color: black;\r\n  background-size: cover;\r\n}\r\n\r\n.firstPopUpDetails {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.closebtn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.contents {\r\n  border-radius: 12px;\r\n  padding-top: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: space-around;\r\n  padding-top: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  padding: 4px;\r\n}\r\n\r\n.form-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  padding: 5px;\r\n}\r\n\r\n.summary p {\r\n  text-align: center;\r\n  width: 25rem;\r\n  color: rgb(232, 128, 128);\r\n  margin: 0 auto;\r\n}\r\n\r\n.comment {\r\n  padding: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Apicomment.js":
/*!***************************!*\
  !*** ./src/Apicomment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentApi)\n/* harmony export */ });\nclass commentApi {\r\n    static commentId =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcfL4bzfqSk0ihg1PeIe/comments';\r\n\r\n    static getComments = async (id) => {\r\n        const response = await fetch (`${this.commentId}?item_id=${id}`);\r\n\r\n        const data = await response.json();\r\n        return data;\r\n    };\r\n\r\n    static setComments = async (id, username, comment) => {\r\n        const response = await fetch(this.commentId, {\r\n          method: 'post',\r\n          body: JSON.stringify({\r\n            item_id: id,\r\n            username,\r\n            comment,\r\n          }),\r\n          headers: {\r\n            'Content-type': 'application/JSON',\r\n          },\r\n        });\r\n\r\n        const data = await response.text();\r\n        return data;\r\n      };\r\n    \r\n      static counterComments = (data) => {\r\n        let count = 0;\r\n        for (let i = 0; i < data.length; i += 1) {\r\n          count += 1;\r\n        }\r\n        return count;\r\n      };  \r\n}\n\n//# sourceURL=webpack://javascript-group-capstone/./src/Apicomment.js?");

/***/ }),

/***/ "./src/Likes.js":
/*!**********************!*\
  !*** ./src/Likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LikesApi)\n/* harmony export */ });\nclass LikesApi {\r\n    static url =\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcfL4bzfqSk0ihg1PeIe/likes';\r\n\r\n    static getLikes = async () => {\r\n      const res = await fetch(this.url);\r\n      const data = await res.json();\r\n      return data;\r\n    };\r\n\r\n    static setLikes = async (id) => {\r\n      const res = await fetch(this.url, {\r\n        method: 'post',\r\n        headers: { 'content-type': 'application/json' },\r\n        body: JSON.stringify({ item_id: id }),\r\n      });\r\n      const data = await res.text();\r\n      return data;\r\n    };\r\n}\n\n//# sourceURL=webpack://javascript-group-capstone/./src/Likes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _module_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/Api.js */ \"./module/Api.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Likes.js */ \"./src/Likes.js\");\n\r\n\r\n\r\n\r\n_module_Api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMovies();\r\n_Likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLikes();\r\n_module_Api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].counterMovies();\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;