var funcoes = {
	init: function(){
		this.sliderHome();
	},

    sliderHome: function(){
        // SLIDER > OWL CAROUSEL
        jQuery("#owl-single").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            autoPlay : true
        });
    }
}

jQuery(function(){
	funcoes.init();
});