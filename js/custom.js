$(function(){
	// $(window).load(function(){
	// 	$(".preloder").delay(1500).fadeOut(200)
	// })
	$(".top").click(function(){
     $("html,body").animate({
		scrollTop:0
	 })
	})
     $(window).scroll(function(){
		var scrolling = $(window).scrollTop()
		if(scrolling < 20){
			$(".top").fadeOut(500)
		}else{
			$(".top").fadeIn(500)
		}
	 })
    $(".typed").typed({
		strings: ["Psd to html / Figma to html designer", "Front end developer", "Freelancer", "E-Commers designer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 1500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	$('.counter').counterUp();

	$('.jqueryscript_one').rProgressbar({
		percentage: 95,
		fillBackgroundColor: '#09D880',
		backgroundColor: 'black',
		borderRadius: '5px',
		height: '5px',
		width: '80%',
		duration: 1500
	  });
	  $('.jqueryscript_two').rProgressbar({
		percentage: 85,
		fillBackgroundColor: '#09D880',
		backgroundColor: 'black',
		borderRadius: '5px',
		height: '5px',
		width: '80%',
		duration: 1500
	  });
	  $('.jqueryscript_three').rProgressbar({
		percentage: 40,
		fillBackgroundColor: '#09D880',
		backgroundColor: 'black',
		borderRadius: '5px',
		height: '5px',
		width: '80%',
		duration: 1500
	  });
	  $('.jqueryscript_four').rProgressbar({
		percentage: 70,
		fillBackgroundColor: '#09D880',
		backgroundColor: 'black',
		borderRadius: '5px',
		height: '5px',
		width: '80%',
		duration: 1500

	  });

	  $('.slider_main').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		speed: 1000,
		slidesToScroll: 1,
		arrows: true,
		nextArrow:".next",
		prevArrow:".prev",
		responsive: [
			{
			  breakpoint: 321,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
				
			  }
			},
			{
				breakpoint: 481,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				  
				}
			  },
			  {
				breakpoint: 576,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				  
				}
			  },
			  {
				breakpoint: 768,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1
				  
				}
			  },
			  {
				breakpoint: 992,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1
				  
				}
			  },
			  {
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1
				  
				}
			  },
			  {
				breakpoint: 1400,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1
				  
				}
			  }
		  ]
	  });
     
	  $(".nav_click").click(function(){
		$(".nav_hidden").toggleClass("submenu")
	  })

	  var mixer = mixitup('.mixmain');

})






