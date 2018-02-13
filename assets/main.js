$(function() {

  $.ajax({
     url: 'https://www.codeschool.com/users/ashvill.json',
     dataType: 'jsonp',
     success: function(response) {
       $(response.courses.completed).each(function(i, obj){
         var obj = response.courses.completed;
        $('#badges').append('<div class="course"><h3>' + obj[i].title + '</h3><img src="' + obj[i].badge + '"><a href="' + obj[i].url + '" class="btn btn-primary" target="_blank">See Course</a></div>')
      });
     }
   });
});
