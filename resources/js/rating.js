$(document).ready(function() {
    console.log("ready");
    stars();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $("meta[name='csrf-token']").attr('content')
        }
    });

    $(document).on('click', '.ratingStar', function() {
        $.ajax({
            type: 'POST',
            url: 'ajaxSetRating',
            data: {
                userID: user.id,
                bookID: book.id,
            },
            success:function(response) {
                stars();

            }
        });
    });
});

function stars() {
    console.log("stars");
    $.ajax({
        type: 'GET',
        url: 'ajaxGetRating',
        data: {
          bookID: book.id,
        },
        success:function (response) {
            console.log("dostavbame repsone");
            $('#get_rating').empty();
            var count = 0;
            var color;
            $('#get_rating').append(`<ul class="list-inline" data-rating="${response.rating}" title="Average Rating - ${response.rating}">
                `+ function () {
                for (count = 1; count <= 5; count++) {
                    if(count <= response)
                    {
                        color = 'color:#ffcc00';
                    } else {
                        color = 'color:#ccc';
                    }
                    `<li title="${count}" id="${book.id}'-'${response.rating}" data-index="${count}" data-business_id="${book.id}" data-rating="${response.rating}" class="rating" style="cursor:pointer; color:${color}; font-size:24px;">&#9733;</li>`
                }
            } + `</ul>
            `);
        }
    })
}



