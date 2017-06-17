document.addEventListener("DOMContentLoaded", function(){

  $('#js-btn-action-more').click(function(){

    var $members = $('#members')
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(members) {
        $.each(members, function(i, member){
          // console.log(member[0].id.name)
          // $members.append("<img src='" + member[0].picture.large +"' />")
          $members.append("<img src='" + member[0].picture.large +"' /><li>"+ member[0].name.first +'</li><li>'+ member[0].name.last +'')
        })
      }
    });
  });

});

// document.addEventListener("DOMContentLoaded", function() {
//
//   document.querySelector('#js-btn-action-more').onclick = function(){
//
//     o = {};
//     o.apibaseurl = "https://randomuser.me";
//     o.apipath = "/api";
//     a = new ApiGetClient(o);
//     // debugger
//     t = JSON.parse(a.response.text);
//     console.log(t)
//
//   };
//
// });

// var DONE = 4; // readyState 4 means the request is done.
// var OK = 200; // status 200 is a successful return.
// if (xhr.readyState === DONE) {
//   if (xhr.status === OK)
//     console.log(xhr.responseText); // 'This is the returned text.'
//   } else {
//     console.log('Error: ' + xhr.status); // An error occurred during the request.
//   }
// }
//
// t = JSON.parse(a.response.text);
// console.log(t)
