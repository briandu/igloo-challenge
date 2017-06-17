document.addEventListener("DOMContentLoaded", function(){

  var $members = $('#members')
  function displayMembers(){

    $.ajax({
      url: 'https://randomuser.me/api/?results=10',
      dataType: 'json',
      success: function(members) {
        $.each(members, function(i, member){
          for (i = 0; i < 5; i++){
            $members.append("<img src='" + member[i].picture.large +"' /><li>"+ member[i].name.first +'</li><li>'+ member[0].name.last +'')
          }
        })
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
