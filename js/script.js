// JavaScript Document



$(function(){
	"use strict";
	$('.carousel').carousel({
		interval: false
	});

	$('.search_i').on('click', function(){
		$('.menu_top_02 .navbar-form').slideToggle();
	});
	
	$('#elastislide').elastislide();
	
});


