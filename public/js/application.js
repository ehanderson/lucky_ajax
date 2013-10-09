$(document).ready(function () {
    $("input#roll").click(function(event){
      event.preventDefault(); 
     
      $.post('/rolls', function(response) {
        $('#die').html(response);
      });
  // PSEUDO-CODE:
  //   ***intercept the form submission event using jQuery
  //   ***prevent the default action for that event from happening
  //   ***generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the 
  //      "#die" DIV in the DOM using jQuery
    });
  });
 // var the_roll = Math.floor(Math.random()*6)+1;
