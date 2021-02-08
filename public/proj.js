$('.carousel.carousel-multi .carousel-item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));

	if (next.next().length > 0) {
		next.next().children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));
	} else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
});


const parentContainer = document.getElementsByClassName('read-more-container');
for (var i = 0; i < parentContainer.length; i++) {
	parentContainer[i].onclick = function () {
		const current = event.target;
		const isReadMoreBtn = current.className.includes('read-more-btn');
		if (!isReadMoreBtn) return;
		const currentText = event.target.parentNode.querySelector('.read-more-text');
		currentText.classList.toggle('read-more-text--show');
		current.textContent = current.textContent.includes('Read More') ?
			"Read Less..." : "Read More...";
	}
}