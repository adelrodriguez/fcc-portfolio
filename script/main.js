'use strict';

$('.skill-icon').hover(function() {
	$(this).toggleClass('colored');
}).popover({
	trigger: 'hover'
});