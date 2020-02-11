function windowSize(){
    if ($(window).width() <= '560'){
        $('.services__container').addClass('slider');
        $('.slider').slick({
			centerMode: true,
			centerPadding: '80px',
			autoplay: true,
			autoplaySpeed: 2500,
			pauseOnHover: false,
			dots: false,
			arrows: false,
			responsive: [
		    {
		      breakpoint: 400,
		      settings: {
		        centerPadding: '60px',
		      }
		    },
		    {
		      breakpoint: 360,
		      settings: {
		        centerPadding: '40px',
		      }
		    }
		  ]
		});
    }
}
$(window).on('load',windowSize);