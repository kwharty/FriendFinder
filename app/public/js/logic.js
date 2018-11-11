$(document).ready(() => {
  //grab input values
  $('#submitBTN').on('click', function (event) {
    event.preventDefault();
    var q1 = $('#q1').val()
    var q2 = $('#q2').val()
    var q3 = $('#q3').val()
    var q4 = $('#q4').val()
    var q5 = $('#q5').val()
    var q6 = $('#q6').val()
    var q7 = $('#q7').val()
    var q8 = $('#q8').val()
    var q9 = $('#q9').val()
    var q10 = $('#q10').val()
    // capture form fields
    var friendsData = {
      name: $('#uName').val().trim(),
      photo: $('#uPhoto').val().trim(),
      scores: [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10
      ]
    };
    //post the data...I think I want to post directly into the friends.js model but can't quite figure that out
    $.post('/api/friends', friendsData, function (data, status) {
      //console.log(friendsData);
      console.log(data);
     // console.log(status);
     // console.log(friendsData);
      var img = $('<img>')// not sure why this isn't working well. use vanilla js 
      // var img = document.createElement("img")
      alert({
                title: "Your Match!",
                text: data.matchName,
                content: img
            });
    })
  })
})