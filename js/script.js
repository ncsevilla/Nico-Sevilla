/* Author: Nico Sevilla

*/


  <!-- jQuery fade in page load -->  
  $(document).ready(function(){
  $('#page_effect').fadeIn(2000);
  });<!-- end jQuery fade in page load --> 

  <!-- jQuery animate #nav opacity -->
  $(function() {

	  $(window).scroll(function(){

		  var scrollTop = $(window).scrollTop();

		  if(scrollTop != 0)

			  $('#nav').stop().animate({'opacity':'0.2'},400);

		  else	

			  $('#nav').stop().animate({'opacity':'1'},400);

	  });

	  

	  $('#nav').hover(

		  function (e) {

			  var scrollTop = $(window).scrollTop();

			  if(scrollTop != 0){

				  $('#nav').stop().animate({'opacity':'1'},400);

			  }

		  },

		  function (e) {

			  var scrollTop = $(window).scrollTop();

			  if(scrollTop != 0){

				  $('#nav').stop().animate({'opacity':'0.2'},400);

			  }

		  }

	  );

  }); <!-- end jQuery animate #nav opacity -->
  
  
























