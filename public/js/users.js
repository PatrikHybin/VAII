/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./resources/js/users.js ***!
  \*******************************/
eval("$(document).ready(function () {\n  list();\n  $.ajaxSetup({\n    headers: {\n      'X-CSRF-TOKEN': $(\"meta[name='csrf-token']\").attr('content')\n    }\n  });\n  $(document).on('click', '.buttonRole', function () {\n    var thisRef = $(this);\n    thisRef.text('processing');\n    $.ajax({\n      type: 'POST',\n      url: 'ajaxChangeRole',\n      data: {\n        role: $('.buttonRole').val(),\n        userID: $('.userID').val()\n      },\n      success: function success(response) {\n        console.log(response);\n        list();\n        showAlert(200, 'Role changed successfully');\n      }\n    });\n  });\n});\n\nfunction list() {\n  $.ajax({\n    type: 'GET',\n    url: 'usersList',\n    success: function success(response) {\n      //var response = JSON.parse(response);\n      $('#get_users').empty();\n      $('#get_users').append(\"\\n            <table class=\\\"table table-bordered nowrap userList\\\" id=\\\"example\\\" style=\\\"width:100%\\\">\\n                            <thead>\\n                            <tr>\\n                                <th>#</th>\\n                                <th>Name</th>\\n                                <th>Action</th>\\n                            </tr>\\n                            </thead>\\n            <tbody>\\n        </tbody>\\n    </table>\");\n      response.forEach(function (element) {\n        $('.userList tbody').append(\"<tr>\\n                        <th scope=\\\"row\\\" class=\\\"counterCell\\\"></th>\\n                        <td>\".concat(element.name, \"</td>\\n                        <td>\\n                        <a href=\\\"user/\").concat(element.id, \"/edit\\\" title=\\\"Edit\\\" class=\\\"btn btn-sm btn-primary\\\">Edit</a>\\n                        <a href=\\\"user/\").concat(element.id, \"/delete\\\" title=\\\"Delete\\\" data-method=\\\"DELETE\\\" class=\\\"btn btn-sm btn-danger\\\" data-confrim=\\\"Are you sure?\\\">Delete</a>\\n                        <div class=\\\"btn-group\\\">\\n                        <button class=\\\"btn btn-sm btn-secondary dropdown-toggle userID\\\" name=\\\"valueButton\\\"  type=\\\"button\\\" value=\\\"\\\" id=\\\"dropdownMenuButton\\\" onclick=\\\"setUserID(\").concat(element.id, \")\\\" data-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">\\n                        \").concat(element.role, \"\\n                        </button>\\n                        <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"dropdownMenuButton\\\">\\n                        <button class=\\\"dropdown-item buttonRole\\\" value=\\\"admin\\\" onclick=\\\"setAdmin();\\\">admin</button>\\n                        <button class=\\\"dropdown-item buttonRole\\\" value=\\\"user\\\" onclick=\\\"setUser();\\\">user</button>\\n                        </div>\\n                        <script>\\n                        function setAdmin() {\\n                             $('.buttonRole').val('admin');\\n                        }\\n                        function setUser() {\\n                             $('.buttonRole').val('user');\\n                        }\\n                        function setUserID(element) {\\n                             $('.userID').val(element);\\n                        }\\n                        </script>\\n                        </div>\\n                        </td>\\n                </tr>\"));\n      });\n    }\n  });\n}\n\nfunction showAlert(code, message) {\n  $('#notifDiv').css('background', code === 200 ? 'green' : 'red');\n  $('#notifDiv').fadeIn();\n  $('#notifDiv').text(message);\n  setTimeout(function () {\n    $('#notifDiv').fadeOut();\n  }, 3000);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMuanM/ZWJjZSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxpc3QiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsIm9uIiwidGhpc1JlZiIsInRleHQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJyb2xlIiwidmFsIiwidXNlcklEIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNob3dBbGVydCIsImVtcHR5IiwiYXBwZW5kIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuYW1lIiwiaWQiLCJjb2RlIiwibWVzc2FnZSIsImNzcyIsImZhZGVJbiIsInNldFRpbWVvdXQiLCJmYWRlT3V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCQyxFQUFBQSxJQUFJO0FBRUpILEVBQUFBLENBQUMsQ0FBQ0ksU0FBRixDQUFZO0FBQ1JDLElBQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFnQkwsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJNLElBQTdCLENBQWtDLFNBQWxDO0FBRFg7QUFERCxHQUFaO0FBTUFOLEVBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlNLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGFBQXhCLEVBQXVDLFlBQVc7QUFDOUMsUUFBTUMsT0FBTyxHQUFHUixDQUFDLENBQUMsSUFBRCxDQUFqQjtBQUNBUSxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxZQUFiO0FBQ0FULElBQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0hDLE1BQUFBLElBQUksRUFBRSxNQURIO0FBRUhDLE1BQUFBLEdBQUcsRUFBRSxnQkFGRjtBQUdIQyxNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsSUFBSSxFQUFFZCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCZSxHQUFqQixFQURKO0FBRUZDLFFBQUFBLE1BQU0sRUFBRWhCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWUsR0FBYjtBQUZOLE9BSEg7QUFPSEUsTUFBQUEsT0FBTyxFQUFDLGlCQUFTQyxRQUFULEVBQW1CO0FBQ3ZCQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBZixRQUFBQSxJQUFJO0FBQ0prQixRQUFBQSxTQUFTLENBQUMsR0FBRCxFQUFNLDJCQUFOLENBQVQ7QUFFSDtBQVpFLEtBQVA7QUFjSCxHQWpCRDtBQWtCSCxDQTNCRDs7QUErQkEsU0FBU2xCLElBQVQsR0FBZ0I7QUFFWkgsRUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLEtBREg7QUFFSEMsSUFBQUEsR0FBRyxFQUFFLFdBRkY7QUFHSEssSUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQ3pCO0FBQ0FsQixNQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCc0IsS0FBaEI7QUFDQXRCLE1BQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1QixNQUFoQjtBQWFBTCxNQUFBQSxRQUFRLENBQUNNLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCekIsUUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJ1QixNQUFyQixvSEFFY0UsT0FBTyxDQUFDQyxJQUZ0Qix5RkFJd0JELE9BQU8sQ0FBQ0UsRUFKaEMsc0hBS3dCRixPQUFPLENBQUNFLEVBTGhDLHNYQU9nS0YsT0FBTyxDQUFDRSxFQVB4SyxtSEFRVUYsT0FBTyxDQUFDWCxJQVJsQjtBQTRCSCxPQTdCRDtBQThCSDtBQWpERSxHQUFQO0FBbURIOztBQUdELFNBQVNPLFNBQVQsQ0FBbUJPLElBQW5CLEVBQXlCQyxPQUF6QixFQUFrQztBQUM5QjdCLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZThCLEdBQWYsQ0FBbUIsWUFBbkIsRUFBa0NGLElBQUksS0FBSyxHQUFULEdBQWUsT0FBZixHQUF3QixLQUExRDtBQUNBNUIsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlK0IsTUFBZjtBQUNBL0IsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlUyxJQUFmLENBQW9Cb0IsT0FBcEI7QUFDQUcsRUFBQUEsVUFBVSxDQUFDLFlBQUs7QUFDWmhDLElBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWlDLE9BQWY7QUFDSCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0giLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBsaXN0KCk7XG5cbiAgICAkLmFqYXhTZXR1cCh7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKFwibWV0YVtuYW1lPSdjc3JmLXRva2VuJ11cIikuYXR0cignY29udGVudCcpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnV0dG9uUm9sZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0aGlzUmVmID0gJCh0aGlzKTtcbiAgICAgICAgdGhpc1JlZi50ZXh0KCdwcm9jZXNzaW5nJyk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICdhamF4Q2hhbmdlUm9sZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcm9sZTogJCgnLmJ1dHRvblJvbGUnKS52YWwoKSxcbiAgICAgICAgICAgICAgICB1c2VySUQ6ICQoJy51c2VySUQnKS52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgbGlzdCgpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydCgyMDAsICdSb2xlIGNoYW5nZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cbmZ1bmN0aW9uIGxpc3QoKSB7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgdXJsOiAndXNlcnNMaXN0JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL3ZhciByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgJCgnI2dldF91c2VycycpLmVtcHR5KCk7XG4gICAgICAgICAgICAkKCcjZ2V0X3VzZXJzJykuYXBwZW5kKGBcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIG5vd3JhcCB1c2VyTGlzdFwiIGlkPVwiZXhhbXBsZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5gKTtcblxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAkKCcudXNlckxpc3QgdGJvZHknKS5hcHBlbmQoYDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzPVwiY291bnRlckNlbGxcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7ZWxlbWVudC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidXNlci8ke2VsZW1lbnQuaWR9L2VkaXRcIiB0aXRsZT1cIkVkaXRcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVzZXIvJHtlbGVtZW50LmlkfS9kZWxldGVcIiB0aXRsZT1cIkRlbGV0ZVwiIGRhdGEtbWV0aG9kPVwiREVMRVRFXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBkYXRhLWNvbmZyaW09XCJBcmUgeW91IHN1cmU/XCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgdXNlcklEXCIgbmFtZT1cInZhbHVlQnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgb25jbGljaz1cInNldFVzZXJJRCgke2VsZW1lbnQuaWR9KVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtlbGVtZW50LnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24taXRlbSBidXR0b25Sb2xlXCIgdmFsdWU9XCJhZG1pblwiIG9uY2xpY2s9XCJzZXRBZG1pbigpO1wiPmFkbWluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24taXRlbSBidXR0b25Sb2xlXCIgdmFsdWU9XCJ1c2VyXCIgb25jbGljaz1cInNldFVzZXIoKTtcIj51c2VyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRBZG1pbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJ1dHRvblJvbGUnKS52YWwoJ2FkbWluJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRVc2VyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuYnV0dG9uUm9sZScpLnZhbCgndXNlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0VXNlcklEKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVzZXJJRCcpLnZhbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gc2hvd0FsZXJ0KGNvZGUsIG1lc3NhZ2UpIHtcbiAgICAkKCcjbm90aWZEaXYnKS5jc3MoJ2JhY2tncm91bmQnLCAoY29kZSA9PT0gMjAwID8gJ2dyZWVuJzogJ3JlZCcpKTtcbiAgICAkKCcjbm90aWZEaXYnKS5mYWRlSW4oKTtcbiAgICAkKCcjbm90aWZEaXYnKS50ZXh0KG1lc3NhZ2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICQoJyNub3RpZkRpdicpLmZhZGVPdXQoKTtcbiAgICB9LCAzMDAwKVxufVxuXG5cbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/users.js\n");
/******/ })()
;