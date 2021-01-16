$(document).ready(function() {
    list();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $("meta[name='csrf-token']").attr('content')
        }
    });

    $(document).on('click', '.buttonRole', function() {
        $.ajax({
            type: 'POST',
            url: 'ajaxChangeRole',
            data: {
                role: $('.buttonRole').val(),
                userID: $('.userID').val()
            },
            success:function(response) {
                list();
                showAlertUsers(200, 'Role changed successfully');

            }
        });
    });
});



function list() {

    $.ajax({
        type: 'GET',
        url: 'usersList',
        success: function (response) {
            //var response = JSON.parse(response);
            $('#get_users').empty();
            $('#get_users').append(`
            <table class="table table-bordered nowrap userList" id="example" style="width:100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            </table>`);

            response.forEach(element => {
                $('.userList tbody').append(`<tr>
                        <th scope="row" class="counterCell"></th>
                        <td>${element.name}</td>
                        <td>
                        ` + ((user.id == element.id || user.role == 'admin') ? `
                        <a href="user/${element.id}/edit" title="Edit" class="btn btn-sm btn-primary">Edit</a>
                        <a href="user/${element.id}/delete" title="Delete" data-method="DELETE" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure you want to delete user ${element.name}');" data-confrim="Are you sure?">Delete</a>
                        ` : `` ) + `
                        ` + ((user.role == 'admin') ? `
                        <div class="btn-group">
                        <button class="btn btn-sm btn-secondary dropdown-toggle userID" name="valueButton"  type="button" value="" id="dropdownMenuButton" onclick="setUserID(${element.id})" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ${element.role}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item buttonRole" value="admin" onclick="setAdmin();">admin</button>
                        <button class="dropdown-item buttonRole" value="user" onclick="setUser();">user</button>
                        </div>
                        <script>
                        function setAdmin() {
                             $('.buttonRole').val('admin');
                        }
                        function setUser() {
                             $('.buttonRole').val('user');
                        }
                        function setUserID(element) {
                             $('.userID').val(element);
                        }
                        </script>
                        </div>
                        ` : `` ) + `
                        </td>
                </tr>`);
            });
        }
    })
}


function showAlertUsers(code, message) {
    $('#notifDivUsers').css('background', (code === 200 ? 'green': 'red'));
    $('#notifDivUsers').fadeIn();
    $('#notifDivUsers').text(message);
    setTimeout(() =>{
        $('#notifDivUsers').fadeOut();
    }, 3000)
}


