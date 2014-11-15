var app = angular.module("personalSite", ["ngAnimate"]);

app.controller("MainCtrl", ["$scope", function($scope){

	$scope.letters = ["X","C","B","H","D","W","Q","E","C","O","N","L","H","O","S","A","N","N","A","O","J","O","D","E","L","L","H","O","B","S","A","R","K","P","O","L","K","I","N","D","M","Q","C","P","N","I","C","O","L","E","C","F","R","X","L","I","A","M","N","E","L","U","L","E","C","F","S","E","P","Z","V","P","K","M","B","P","B","A","R","R","Y","X","C","B","I","D","W","B","A","T","M","A","N","T","A","T","C","S","T","H","R","T","A","L","T","I","E","S","K","E","L","C","I","E","P","O","L","K","I","N","A","M","T","A","B","K","W","R","E","L","A","U","R","E","N","C","P","I","T","C","F","O","X","L","I","O","M","N","E","L","U","O","E","F","F","J","O","R","K","Y","I","L","O","V","E","T","O","O","O","T","A","P","P","L","E","S","A","N","D","B","A","N","N","A","S"];

	$scope.aboutlets = ["A","B","O","U","T"];
	$scope.worklets = ["P","O","R","T","F","O","L","I","O"];
	$scope.contactlets = ["C","O","N","T","A","C","T"];

// PORTFOLIO OBJECTS
	$scope.portfolioobjs = [
		{
			name: "UPLY",
			image: "images/uplytall.png",
			description: "Website ranking web app",
			frontend: "AngularJS, JavaScript, jQuery, HTML5, CSS3, SASS, D3, Zurb Foundation",
			backend: "Ruby on Rails",
			database: "PostgreSQL",
			url: 'http://up-ly.herokuapp.com/#/'
		},
		{
			name: "BRETT & NICOLE WEDDING SITE",
			image: "images/weddingtall.png",
			description: "My personal wedding site",
			frontend: "JavaScript, jQuery, HTML5, CSS3, Twitter Bootstrap",
			backend: "Ruby on Rails",
			database: "MongoDB",
			url: 'http://kadowakiwedding.herokuapp.com/'
		},
		{
			name: "SWAPPAHOLIC",
			image: "images/swappaholictall.png",
			description: "Bartering platform",
			frontend: "JavaScript, jQuery, HTML5, CSS3, SASS, D3, Twitter Bootstrap",
			backend: "Ruby on Rails",
			database: "PostgreSQL",
			url: 'http://swappaholic.herokuapp.com/'
		},
		{
			name: "WDI9 DIGITAL YEARBOOK",
			image: "images/yearbooktall.png",
			description: "WDI9's digital yearbook",
			frontend: "AngularJS, JavaScript, jQuery, HTML5, CSS3, Twitter Bootstrap",
			url: ''
		}
	];

// RETURNS WINDOW WIDTH 
	var setWinWidth = $(window).width();
	console.log(setWinWidth);

// RETURNS LIMIT TO NUMBER FUNCTION
	$scope.setLimitToNum = function(){
		if (setWinWidth >= 1354) {
			$scope.limitNum = 156;
		} else	if (setWinWidth >= 1399) {
			$scope.limitNum = 150;
		} else if (setWinWidth >= 1344) {
			$scope.limitNum = 144;
		} else if (setWinWidth >= 1289){
			$scope.limitNum = 138;
		} else if (setWinWidth >= 1220){
			$scope.limitNum = 132;
		} else if (setWinWidth >= 1165){
			$scope.limitNum = 126;
		} else if (setWinWidth >= 1109) {
			$scope.limitNum = 120;
		} else if (setWinWidth >= 1054) {
			$scope.limitNum = 114;
		} else if (setWinWidth >= 1000) {
			$scope.limitNum = 108;
		} else if (setWinWidth >= 943) {
			$scope.limitNum = 102;
		} else if (setWinWidth >= 888) {
			$scope.limitNum = 96;
		} else if (setWinWidth >= 832) {
			$scope.limitNum = 90;
		} else if (setWinWidth >= 777) {
			$scope.limitNum = 84;
		} else if (setWinWidth >= 721) {
			$scope.limitNum = 78;
		} else if (setWinWidth >= 666) {
			$scope.limitNum = 72;
		} else if (setWinWidth >= 610) {
			$scope.limitNum = 66;
		} else if (setWinWidth >= 555) {
			$scope.limitNum = 60;
		} else if (setWinWidth >= 499) {
			$scope.limitNum = 54;
		} else if (setWinWidth >= 444) {
			$scope.limitNum = 48;
		} else {
			$scope.limitNum = 42;
		}
		console.log($scope.limitNum);
	};
	$scope.setLimitToNum();

// FALLING LETTERS ANIMATE FUNCTION

	$(document).ready(function(){
		$('.first').delay(1100).animate({top:'+=1000px'},3800)
		$('.second').delay(1000).animate({top:'+=1000px'},4000)
		$('.third').delay(1200).animate({top:'+=1000px'},3800)		
		$('.fourth').delay(1300).animate({top:'+=1000px'},3000)
		$('.fifth').delay(1200).animate({top:'+=1000px'},3500)
		$('.sixth').delay(1200).animate({top:'+=1000px'},2800)		
		$('.seventh').delay(1300).animate({top:'+=1000px'},3300)		
		$('.eighth').delay(1000).animate({top:'+=1000px'},2700)		
		$('.ninth').delay(1300).animate({top:'+=1000px'},3800)		
		$('.tenth').delay(1200).animate({top:'+=1000px'},3000)		
		$('.eleventh').delay(1000).animate({top:'+=1000px'},3700)
		$('.twelfth').delay(1200).animate({top:'+=1000px'},3900)
	});

// FADE IN HELLO WORLD
	$(document).ready(function(){
		$('.welcome').delay(1800).fadeIn(800);
	});	
// INTERCHANGE HELLO WORLDS
	(function(){
	            var marquee = [
                'Hola Mundo',
                'Ciao Mondo',
                'Nǐ Hǎo Shìjiè',
                'Hallo Welt',
                'Kamusta sa Lahat',
                'Konichiwa Sekai',
                'HELLO WORLD'
                ], m = 0;

            setInterval(function(){
                $('.welcome').fadeOut(function(){
                    $(this).html(marquee[m=(m+1)%marquee.length]).fadeIn();
                });
            }, 6000);
  })();

// FADE IN .ME
	$(document).ready(function(){
		$('.me').delay(2500).fadeIn(800);
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
	      }, 2000);
	   });
	  $('#portfolio-link').click(function(){
	    $('html, body').animate({
	    	scrollTop: $("#portfolio-container").offset().top
	      }, 2000);
	   });
	  $('#contact-link').click(function(){
	    $('html, body').animate({
	      scrollTop: $("#contact-container").offset().top
	      }, 2000);
	   });
	  $('#back-to-top').click(function(){
	    $('html, body').animate({
	      scrollTop: $("#cover").offset().top
	      }, 2000);
	   });
	});

	// WORDS ROTATION
	(function(){

						var noun1 = [
								'BULLDOG OWNING',
								'TREE LOVING',
								'LIFE APPRECIATING',
								'FRIENDSHIP CHERISHING',
								'HARD WORKING',
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
                'CHRONIC LAUGHER',
                'FREQUENT REDDITOR',
                'DIGITAL ADVERTISING PROFESSIONAL',
                'WISDOM SEEKER',
                'CREATURE OF HABIT',
                'INSOMNIAC',
								'LAKER LOYALIST',
                'FRONT-END DEVELOPER',
                'HOMEBODY'
                ], j = 0;

            setInterval(function(){
                $('#noun2').fadeOut(function(){
                    $(this).html(noun2[j=(j+1)%noun2.length]).fadeIn();
                });
            }, 4000);
  })();

  $scope.setInfo = function(){
  	$scope.showInfo = 1;
  }

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
	 			offset: '70px',
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


