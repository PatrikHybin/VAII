/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./resources/js/darkMode.js ***!
  \**********************************/
eval("var darkMode = localStorage.getItem('darkMode');\nvar darkModeToggle = document.querySelector('#dark-mode-toggle');\n\nvar enableDarkMode = function enableDarkMode() {\n  document.body.classList.add('darkmode');\n  localStorage.setItem('darkMode', 'enabled');\n};\n\nvar disableDarkMode = function disableDarkMode() {\n  document.body.classList.remove('darkmode');\n  localStorage.setItem('darkMode', null);\n};\n\nif (darkMode === 'enabled') {\n  enableDarkMode();\n}\n\ndarkModeToggle.addEventListener('click', function () {\n  darkMode = localStorage.getItem('darkMode');\n\n  if (darkMode !== 'enabled') {\n    enableDarkMode();\n  } else {\n    disableDarkMode();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFya01vZGUuanM/MjA4YSJdLCJuYW1lcyI6WyJkYXJrTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXJrTW9kZVRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVuYWJsZURhcmtNb2RlIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldEl0ZW0iLCJkaXNhYmxlRGFya01vZGUiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFmO0FBRUEsSUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXZCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QkYsRUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQTVCO0FBQ0FSLEVBQUFBLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixVQUFyQixFQUFpQyxTQUFqQztBQUNILENBSEQ7O0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCUCxFQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkksTUFBeEIsQ0FBK0IsVUFBL0I7QUFDQVgsRUFBQUEsWUFBWSxDQUFDUyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLElBQWpDO0FBQ0gsQ0FIRDs7QUFLQSxJQUFJVixRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDeEJNLEVBQUFBLGNBQWM7QUFDakI7O0FBRUdILGNBQWMsQ0FBQ1UsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUMzQ2IsRUFBQUEsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBWDs7QUFFQSxNQUFJRixRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDeEJNLElBQUFBLGNBQWM7QUFDakIsR0FGRCxNQUVPO0FBQ0hLLElBQUFBLGVBQWU7QUFDbEI7QUFDSixDQVJEIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRhcmtNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJyk7XG5cbmNvbnN0IGRhcmtNb2RlVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhcmstbW9kZS10b2dnbGUnKTtcblxuY29uc3QgZW5hYmxlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZScpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsICdlbmFibGVkJyk7XG59XG5cbmNvbnN0IGRpc2FibGVEYXJrTW9kZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgbnVsbCk7XG59XG5cbmlmIChkYXJrTW9kZSA9PT0gJ2VuYWJsZWQnKSB7XG4gICAgZW5hYmxlRGFya01vZGUoKTtcbn1cblxuICAgIGRhcmtNb2RlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkYXJrTW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpO1xuXG4gICAgICAgIGlmIChkYXJrTW9kZSAhPT0gJ2VuYWJsZWQnKSB7XG4gICAgICAgICAgICBlbmFibGVEYXJrTW9kZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzYWJsZURhcmtNb2RlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RhcmtNb2RlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/darkMode.js\n");
/******/ })()
;