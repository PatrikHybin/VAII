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
eval("var darkMode = localStorage.getItem('darkMode');\nvar darkModeToggle = document.querySelector('#dark-mode-toggle');\n\nvar enableDarkMode = function enableDarkMode() {\n  document.body.classList.add('darkmode');\n  localStorage.setItem('darkMode', 'enabled');\n};\n\nvar disableDarkMode = function disableDarkMode() {\n  document.body.classList.remove('darkmode');\n  localStorage.setItem('darkMode', null);\n};\n\nif (darkMode === 'enabled') {\n  enableDarkMode();\n}\n\nif (user !== 0) {\n  darkModeToggle.addEventListener('click', function () {\n    darkMode = localStorage.getItem('darkMode');\n\n    if (darkMode !== 'enabled') {\n      enableDarkMode();\n    } else {\n      disableDarkMode();\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFya01vZGUuanM/MjA4YSJdLCJuYW1lcyI6WyJkYXJrTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXJrTW9kZVRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVuYWJsZURhcmtNb2RlIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldEl0ZW0iLCJkaXNhYmxlRGFya01vZGUiLCJyZW1vdmUiLCJ1c2VyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBZjtBQUVBLElBQU1DLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUF2Qjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJGLEVBQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixVQUE1QjtBQUNBUixFQUFBQSxZQUFZLENBQUNTLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsU0FBakM7QUFDSCxDQUhEOztBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQlAsRUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNDLFNBQWQsQ0FBd0JJLE1BQXhCLENBQStCLFVBQS9CO0FBQ0FYLEVBQUFBLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixVQUFyQixFQUFpQyxJQUFqQztBQUNILENBSEQ7O0FBS0EsSUFBSVYsUUFBUSxLQUFLLFNBQWpCLEVBQTRCO0FBQ3hCTSxFQUFBQSxjQUFjO0FBQ2pCOztBQUNELElBQUlPLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ1pWLEVBQUFBLGNBQWMsQ0FBQ1csZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUMzQ2QsSUFBQUEsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBWDs7QUFFQSxRQUFJRixRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDeEJNLE1BQUFBLGNBQWM7QUFDakIsS0FGRCxNQUVPO0FBQ0hLLE1BQUFBLGVBQWU7QUFDbEI7QUFDSixHQVJEO0FBU0giLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGFya01vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcblxuY29uc3QgZGFya01vZGVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFyay1tb2RlLXRvZ2dsZScpO1xuXG5jb25zdCBlbmFibGVEYXJrTW9kZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgJ2VuYWJsZWQnKTtcbn1cblxuY29uc3QgZGlzYWJsZURhcmtNb2RlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCBudWxsKTtcbn1cblxuaWYgKGRhcmtNb2RlID09PSAnZW5hYmxlZCcpIHtcbiAgICBlbmFibGVEYXJrTW9kZSgpO1xufVxuaWYgKHVzZXIgIT09IDApIHtcbiAgICBkYXJrTW9kZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGFya01vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcblxuICAgICAgICBpZiAoZGFya01vZGUgIT09ICdlbmFibGVkJykge1xuICAgICAgICAgICAgZW5hYmxlRGFya01vZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc2FibGVEYXJrTW9kZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGFya01vZGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/darkMode.js\n");
/******/ })()
;