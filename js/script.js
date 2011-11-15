/* Author: Nico Sevilla

*/


  <!-- jQuery fade in page load -->  
  $(document).ready(function(){

  $('#page_effect').fadeIn(1000);
  
  });<!-- end jQuery fade in page load --> 
/*
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
*/ 

  <!-- My Custom JQuery Theme UI -->
  $(function(){

				// Accordion
				$("#accordion").accordion({ header: "h3" });
	
				// Tabs
				$('#tabs').tabs();
	

				// Dialog			
				$('#dialog').dialog({
					autoOpen: false,
					width: 600,
					buttons: {
						"Ok": function() { 
							$(this).dialog("close"); 
						}, 
						"Cancel": function() { 
							$(this).dialog("close"); 
						} 
					}
				});
				
				// Dialog Link
				$('#dialog_link').click(function(){
					$('#dialog').dialog('open');
					return false;
				});

				// Datepicker
				$('#datepicker').datepicker({
					inline: true
				});
				
				// Slider
				$('#slider').slider({
					range: true,
					values: [17, 67]
				});
				
				// Progressbar
				$("#progressbar").progressbar({
					value: 20 
				});
				
				//hover states on the static widgets
				$('#dialog_link, ul#icons li').hover(
					function() { $(this).addClass('ui-state-hover'); }, 
					function() { $(this).removeClass('ui-state-hover'); }
				);
				
			}); <!-- end My Custom JQuery Theme UI -->
  

  

  
  
























