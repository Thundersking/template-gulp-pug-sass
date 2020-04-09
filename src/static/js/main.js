$(document).ready(function () {
	$('.slider').slick({
		dots:true,
		prevArrow:false,
		nextArrow:false,
	});
});


function openbox(blog_button){
	display = document.getElementById('blog-button').style.display;
	
	if(display=='none'){
		document.getElementById('blog-button').style.display='flex';
	} else{
		document.getElementById('blog-button').style.display='none';
	}
}
