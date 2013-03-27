var $menuPadre = $('nav li');
var start = function () {
	$menuPadre.hover(
		function () {
			$(this).find('ul').slideDown('fast');
		},
		function () {
			$(this).find('ul').slideUp('fast');
		}
	);
};
$(document).on('ready', start);