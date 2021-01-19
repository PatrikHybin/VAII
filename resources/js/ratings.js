$(document).ready(function() {


    if (user === 0) {
        renderAll(0);

    } else {
        stars();


        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $("meta[name='csrf-token']").attr('content')
            }
        });

        $(document).on('mouseenter', '.rating', function() {

            removeBackground(book);
            var index = $(this).val();
            for(var count = 0; count < index; count++)
            {
                var id = book.id+'-'+(count+1);
                $('#'+id).css('color', '#ffcc00');
            }
        });

        function removeBackground(book) {
            for(var count = 0; count < 5; count++)
            {
                var id = book.id+'-'+(count+1);
                $('#'+id).css('color', '#ccc');
            }
        }

        $(document).on('mouseleave', '.rating', function() {
            stars();
        });


        $(document).on('click', '.rating', function() {
            var rating = $(this).val();
            $.ajax({
                type: 'POST',
                url: 'ajaxSetRating',
                data: {
                    userID: user.id,
                    bookID: book.id,
                    rating: rating,
                },
                success:function(response) {
                    showAlert(200, 'Book ' + book.name + ' rated '+ rating);
                    stars();
                }
            });
        });
    }
});

function stars() {
    $.ajax({
        type: 'GET',
        url: 'ajaxGetRating',
        data: {
            bookID : book.id,
            userID : user.id,
        },
        success:function (response) {
            var response = JSON.parse(response);
            renderAll(response);
            /*var user_rating = (response.user_rating !== 0) ? response.user_rating : "";
            var rating = (response.average_rating !== 0) ? response.average_rating : "";
            var number_of_ratings = (response.number_of_ratings !== 0) ? response.number_of_ratings : "";*/
            /*var user_rating = response.user_rating;
            var rating = response.average_rating;
            var number_of_ratings = response.number_of_ratings;*/
            /*$('#get_rating').empty();
            $('#get_rating').append(`<p>Rating : `+rating+`</p>
                <ul class="list-inline">
                `+renderStars(rating)+ `

                </ul>
                <p>You rated : `+user_rating+`</p>
                <p>Total number of rates : `+number_of_ratings+`</p>`

            );*/

        }

    })

}

function renderAll(response) {
    var user_rating
    var rating
    var number_of_ratings
    if (response === 'prazdne') {
        user_rating =  " ";
        rating = " ";
        number_of_ratings = " ";
    } else {
        user_rating = response.user_rating;
        rating = response.average_rating;
        number_of_ratings = response.number_of_ratings;
    }
    console.log(user_rating);
    $('#get_rating').empty();
    $('#get_rating').append(`<p>Rating : `+Math.round(rating)+`</p>
                <ul class="list-inline">
                `+renderStars(rating)+ `

                </ul>
                <p>You rated : `+user_rating+`</p>
                <p>Total number of rates : `+number_of_ratings+`</p>`

    );
}

function renderStars(response) {
    var html = '';
    var color = 0;
    for (var count = 0; count < 5; count++) {
        if(count < response) {
            color = '#ffcc00';
        } else {
            color = '#ccc';
        }
        html += `<li title="${count+1}" id="${book.id}-${count+1}" class="rating" value="${count+1}"  style="cursor:pointer; color:${color}; font-size:40px;">&#9733;</li>`
    }

    return html;
}

function showAlert(code, message) {
    $('#notifDiv').css('background', (code === 200 ? 'green': 'red'));
    $('#notifDiv').fadeIn();
    $('#notifDiv').text(message);
    setTimeout(() =>{
        $('#notifDiv').fadeOut();
    }, 3000)
}






