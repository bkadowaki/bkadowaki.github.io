(function(){
	var app = angular.module("personalSite", []);

	app.controller("MainCtrl", ["$scope","$http", function($scope, $http){

		$scope.letters = ["X","C","B","H","D","W","Q","E","C","O","N","L","H","O","S","A","N","N","A","O","J","O","D","E","L","L","H","O","B","S","A","R","K","P","O","L","K","I","N","D","M","Q","C","P","N","I","C","O","L","E","C","F","R","X","L","I","A","M","N","E","L","U","L","E","C","F","S","E","P","Z","V","P","K","M","B","P","B","A","R","R","Y","X","C","B","I","D","W","B","A","T","M","A","N","T","A","T","C","S","T","H","R","T","A","L","T","I","E","S","K","E","L","C","I","E","P","O","L","K","I","N","A","M","T","A","B","K","W","R","E","L","A","U","R","E","N","C","P","I","T","C","F","O","X","L","I","O","M","N","E","L","U","O","E","F","F","J","O","R","K","Y","I","L","O","V","E","T","O","O","O","T","A","P","P","L","E","S","A","N","D","B","A","N","N","R","S","S","A","V","I","O","R","L","A","A","L","L","D","A","Y","S","L","E","E","P","Y"];

		$scope.aboutlets = ["A","B","O","U","T"];
		$scope.worklets = ["P","O","R","T","F","O","L","I","O"];
		$scope.contactlets = ["C","O","N","T","A","C","T"];


		window.setTimeout(function(){
			orderOfFunctions();
		}, 1000);
		// order of functions

		function orderOfFunctions(){
			checkView();
			generateStyles();
			imageModifications();
		}

		// checkView
	  function checkView(){
	    if (window.matchMedia('(max-width: 540px)').matches){
	      widgetSize = 'small';
	    } else if (window.matchMedia('(max-width: 800px)').matches) {
	      widgetSize = 'medium';
	    } else {
	      widgetSize = 'large';
	    }

	    console.log('Device type: ' + widgetSize + '.');
	  } 

		// responsive styles
		function generateStyles(){
			// console.log('Generated styles.');
		}

		function imageModifications(){			
	    $('.projects').hover(function(){
        $(this).addClass('transition');
    	}, function() {
        $(this).removeClass('transition');
    	});
		}

		// $scope.hoverImageIn = function(){
		// 	console.log("did thisssss");
		// }

		// get skills objects
		$http.get('api/skills.json')
			.success(function(data, status){
				$scope.skills = data;
		});

		// get portfolio objects
		$http.get('api/projects.json')
			.success(function (data, status){
				$scope.projects = data;
		});

	// FALLING LETTERS ANIMATE FUNCTION

		$(document).ready(function(){
			$('.first').delay(1100).animate({top:'+=1000px'},3800)
			$('.second').delay(1000).animate({top:'+=1000px'},4000)
			$('.third').delay(1500).animate({top:'+=1000px'},3800)		
			$('.fourth').delay(1400).animate({top:'+=1000px'},3000)
			$('.fifth').delay(1200).animate({top:'+=1000px'},3500)
			$('.sixth').delay(1200).animate({top:'+=1000px'},2800)		
			$('.seventh').delay(1400).animate({top:'+=1000px'},3300)		
			$('.eighth').delay(1000).animate({top:'+=1000px'},2700)		
			$('.ninth').delay(1300).animate({top:'+=1000px'},3800)		
			$('.tenth').delay(1200).animate({top:'+=1000px'},3000)		
			$('.eleventh').delay(1600).animate({top:'+=1000px'},3700)
			$('.twelfth').delay(1200).animate({top:'+=1000px'},3900)
		});

	// FADE IN HELLO WORLD
		$(document).ready(function(){
			$('.welcome').delay(2000).fadeIn(800);
		});	
	// INTERCHANGE HELLO WORLDS
		(function(){
		  var marquee = [
        'Hola Mundo',
        'Ciao Mondo',
        'Hallo Welt',
        'Kamusta sa Lahat',
        'Konichiwa Sekai',
        'Hello World'
        ], m = 0;

    setInterval(function(){
        $('.welcome').fadeOut(function(){
            $(this).html(marquee[m=(m+1)%marquee.length]).fadeIn();
        });
    }, 6000);
	  })();

	// FADE IN .cover-info
		$(document).ready(function(){
			$('.cover-info').delay(2700).fadeIn(800);
		});	

	// FALLING NAV LINKS

		$(document).ready(function(){

			$('.about1').delay(900).animate({top:'+=300px'},1300)			
			$('.about2').delay(1000).animate({top:'+=300px'},1500)			
			$('.about3').delay(800).animate({top:'+=300px'},1700)			
			$('.about4').delay(900).animate({top:'+=300px'},1600)		
			$('.about5').delay(700).animate({top:'+=300px'},2100)	
			$('.work1').delay(900).animate({top:'+=300px'},1300)			
			$('.work2').delay(800).animate({top:'+=300px'},2000)			
			$('.work3').delay(800).animate({top:'+=300px'},1700)			
			$('.work4').delay(900).animate({top:'+=300px'},1400)			
			$('.work5').delay(700).animate({top:'+=300px'},1900)			
			$('.work6').delay(800).animate({top:'+=300px'},1500)			
			$('.work7').delay(700).animate({top:'+=300px'},1400)			
			$('.work8').delay(900).animate({top:'+=300px'},1700)			
			$('.work9').delay(1000).animate({top:'+=300px'},1400)	
			$('.contact1').delay(900).animate({top:'+=300px'},1400)			
			$('.contact2').delay(1000).animate({top:'+=300px'},1900)			
			$('.contact3').delay(600).animate({top:'+=300px'},1500)			
			$('.contact4').delay(600).animate({top:'+=300px'},2000)		
			$('.contact5').delay(800).animate({top:'+=300px'},1400)	
			$('.contact6').delay(700).animate({top:'+=300px'},1400)	
			$('.contact7').delay(900).animate({top:'+=300px'},1500)	
		});

		// SMOOTH SCROLLING WHEN CLICKING ON NAV LINKS
		$(document).ready(function() {
		  $('#about-link').click(function(){
		    $('html, body').animate({
		    	scrollTop: $("#about-container").offset().top
		      }, 1000);
		   });
		  $('#portfolio-link').click(function(){
		    $('html, body').animate({
		    	scrollTop: $("#portfolio-container").offset().top
		      }, 1000);
		   });
		  $('#contact-link').click(function(){
		    $('html, body').animate({
		      scrollTop: $("#contact-container").offset().top
		      }, 1000);
		   });
		  $('#back-to-top').click(function(){
		    $('html, body').animate({
		      scrollTop: $("#cover").offset().top
		      }, 1000);
		   });
		});

		// WORDS ROTATION
		(function(){

			var noun1 = [
					'BULLDOG OWNING',
					'TREE LOVING',
					'FRIENDSHIP CHERISHING',
					'HARD WORKING',
					'DONUT ANNIHILATING',
					'PERPETUALLY LEARNING',
					'GOD FEARING'
			], i = 0;
			
			setInterval(function(){
          $('#noun1').fadeOut(function(){
              $(this).html(noun1[i=(i+1)%noun1.length]).fadeIn();
          });
      }, 3000);

      var noun2 = [
          'HUSBAND-TO-BE',
          'FREQUENT REDDITOR',
          'DIGITAL ADVERTISING PROFESSIONAL',
          'WISDOM SEEKER',
          'CHRONIC LAUGHER',
          'CREATURE OF HABIT',
          'INSOMNIAC',
					'LAKER LOYALIST',
					'GREENDALE HUMAN BEING',
          'FRONT-END DEVELOPER',
          'HOMEBODY'
          ], j = 0;

      setInterval(function(){
          $('#noun2').fadeOut(function(){
              $(this).html(noun2[j=(j+1)%noun2.length]).fadeIn();
          });
      }, 4000);
	  })();

	  // $scope.setInfo = function(){
	  // 	$scope.showInfo = 1;
	  // }

	  $(document).ready(function(){
			$('nav').waypoint(function() {
				// $scope.setNav = true;
		  	$(this).toggleClass('sticky');
			})
		})

	// SCROLLSPY-LIKE FUNCTIONALITY, AND CLASS ADJUSMENTS BASED ON ELEMENT'S SCROLL POSITION
		// ADD ABOUT LINK HIGHLIGHT, AND ABOUT CONTAINER HIGHLIGHT ON DOWN
		$('#about-container')
		  .waypoint(function(direction){
		    if (direction === 'down') {
		      $(this).addClass('about-container-active');
					$('#about-box').addClass('about-active');
					$('.about-first-let').addClass('about-first-let-active');
		    }
		  	},{
		        offset: '50px',
		        continuous: false
				}
			)
			// REMOVE ABOUT LINK HIGHLIGHT, AND ABOUT CONTAINER HIGHLIGHT ON UP
			.waypoint(function(direction){
	 		if (direction === 'up') {
	 			$(this).removeClass('about-container-active');
	 			$('#about-box').removeClass('about-active');
	 			$('.about-first-let').removeClass('about-first-let-active');
	 		}
	 		},{
	 			offset: '200px',
	 			continuous: false
		    }
			);  

		// ADD PORTFOLIO LINK HIGHLIGHT + PORTFOLIO CONTAINER HIGHLIGHT, AND REMOVE ABOUT LINK HIGHLIGHT + ABOUT CONTAINER HIGHLIGHT ON DOWN
	 	$('#portfolio-container')
	 		.waypoint(function(direction){
	 			if (direction === 'down') {
	 				$(this).addClass('portfolio-container-active');
	 				$('#portfolio-box').addClass('portfolio-active');
	 				$('.portfolio-first-let').addClass('portfolio-first-let-active');
	 				$('#about-container').removeClass('about-container-active');
	 				$('#about-box').removeClass('about-active');
	 				$('.about-first-let').removeClass('about-first-let-active');
	 			}
	 			},{
	 				offset: '70px',
	 				continuous: false
	 			}
	 		)
	 		// REMOVE PORTFOLIO LINK HIGHLIGHT + PORTFOLIO CONTAINER HIGHLIGHT, AND ADD ABOUT LINK HIGHLIGHT + ABOUT CONTAINER HIGHLIGHT ON DOWN
	 		.waypoint(function(direction){
	 		if (direction === 'up') {
	 			$(this).removeClass('portfolio-container-active');
	 			$('#portfolio-box').removeClass('portfolio-active');
	 			$('.portfolio-first-let').removeClass('portfolio-first-let-active');
	 			$('#about-container').addClass('about-container-active');
	 			$('#about-box').addClass('about-active');
	 			$('.about-first-let').addClass('about-first-let-active');
	 		}
	 		},{
	 			offset: '200px',
	 			continuous: false
		    }
			);   

	 	$('#contact-container')
	 		.waypoint(function(direction){
	 			if (direction === 'down') {
	 				$(this).addClass('contact-container-active');
	 				$('#contact-box').addClass('contact-active');
	 				$('.contact-first-let').addClass('contact-first-let-active');
	 				$('#portfolio-container').removeClass('portfolio-container-active');
	 				$('#portfolio-box').removeClass('portfolio-active');
	 				$('.portfolio-first-let').removeClass('portfolio-first-let-active');
	 			}
		 		},{
		 			offset: '120px',
		 			continuous: false
		 		}
		 	)
	 		.waypoint(function(direction){
	 		if (direction === 'up') {
	 			$(this).removeClass('contact-container-active');
	 			$('#contact-box').removeClass('contact-active');
	 			$('.contact-first-let').removeClass('contact-first-let-active');
	 			$('#portfolio-container').addClass('portfolio-container-active');
	 			$('#portfolio-box').addClass('portfolio-active');
	 			$('.portfolio-first-let').addClass('portfolio-first-let-active');
	 		}
	 		},{
	 			offset: '200px',
	 			continuous: false
		    }
			);   

	}]);
})();

