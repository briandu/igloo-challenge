document.addEventListener("DOMContentLoaded", function(){
  var page = 1;
  function displayMembers(){

    $.ajax({
      url: 'https://randomuser.me/api/?results=5&page=' + page,
      dataType: 'json',
      success: function(response) {
        $('#members').append("<div class='row'></div>")
        $.each(response.results, function(i, member){
            console.log("member", member.picture)
            $('#members .row:last-child').append("<div class='item'><img src='" + member.picture.large +"' /><h4>"+ member.name.first +' '+ member.name.last + '</h4><h5>'+ member.email +'<h5></div>')
        })
        page++;
      }
    });

  }

  // This displays default 5 members
  displayMembers();

  // This calls for 5 additional members to be loaded
  $('#js-btn-action-more').click(function(){
    displayMembers();
  });

});
