window.modal = false // $.fancybox.getInstance();

const gallery = document.querySelector('section.gallery');
let gallery_status = false;
if (gallery) {
	let gallery__col = gallery.querySelectorAll('.gallery__col[data-scroll]');
	let ga = [];
	gallery__col.forEach((item, index) => {
		ga.push(animateGallery());
	});
	let currentScroll = window.pageYOffset;
	window.addEventListener('scroll', (e) => {
		if (gallery_status) {
			gallery__col.forEach((item, index) => {
				let even = index % 2 === 0 ? true : false;
				if (window.pageYOffset < currentScroll) {
					even = !even;
				}
				ga[index](item, even);
			});
		} else {
			ga = [];
			gallery__col.forEach((item, index) => {
				ga.push(animateGallery());
			});
		}
		currentScroll = window.pageYOffset;
	});

	const observer = new IntersectionObserver(entries => {
		if (entries[0].isIntersecting) {
			gallery_status = true;
		} else {
			gallery_status = false;
			gallery__col.forEach((item, index) => {
				item.style.transform = `none`;
			});
		}
	});
	observer.observe(gallery);


	function animateGallery() {
		let position = 0;
		function animate(element, even) {
			position = even ? position + 2 : position - 2;
			if (element) {
				element.style.transform = `translate3d(${position}px, 0, 0)`;
			}
			// requestAnimationFrame(animateGallery);

			return position;
		}

		return animate;
	}
}


// SECTION CARDS
let cards = document.querySelectorAll('.section-cards .title');
cards.forEach(item => {
	item.addEventListener('click', event => {
		if (window.innerWidth < 569) {
			item.closest('.card-item').classList.toggle('show');
		}
	})
});

// BADGE
let badge = document.querySelectorAll('.section-cards .badge');
badge.forEach(item => {
	item.addEventListener('click', event => {
		document.removeEventListener('click', destroyBadge);
		item.classList.toggle('active');

		setTimeout(() => {
			document.addEventListener('click', e => destroyBadge, { once: true });
		}, 500);
	});
});

let destroyBadge = function () {
	let badgeActive = document.querySelector('.badge.active');
	if (badgeActive) badgeActive.classList.remove('active');
}




let lastScrollTop = 0;
let header = document.querySelector('header.header');
window.addEventListener("scroll", function () {
	let st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > lastScrollTop) {
		// downscroll
		header.classList.remove('is-fixed');
		header.classList.add('is-hide');
	} else {
		header.classList.add('is-fixed');
		header.classList.remove('is-hide');
	}
	lastScrollTop = st <= 0 ? 0 : st;
}, false);


// modal
let enumModals = () => {
	[19, 20].forEach((item) => {
		let modalname = 'newsletter-' + item;
		let modalNewsletter = document.getElementById(modalname);
		if (modalNewsletter) {
			let storage = localStorage.getItem(modalname);
			if (window.user) initFBModal(modalname);
			if (storage !== null && +storage > 0) {
				let thisdate = +new Date();
				if (thisdate - storage < 2592000000) return true;
			}

			initFBModal(modalname);
		}
	});
};

let initFBModal = (modalname, time) => {
	time = time || 5000;
	setTimeout(() => {
		$.fancybox.open({
			src: '#' + modalname,
			opts: {
				beforeLoad: (instance, current) => {
					if (window.modal) {
						instance.close();
						window.modal = false;
					}

				},
				afterShow: (instance, current) => {
					initFormSlider();
					window.modal = instance;
				},
				afterClose: () => {
					if (window.modal) {
						localStorage.setItem(modalname, +new Date());
					}
					window.modal = false;
					if (typeof Lscroll !== 'undefined') Lscroll.update();
				}
			}
		});
	}, time);
};

let initFormSlider = () => {
	let slider = $('.fancybox-slide--complete .modal .swiper');
	if (!slider.length) return;
	if (slider.find('.swiper-slide').length == 1) return;
	new Swiper('.fancybox-slide--complete .modal .swiper', {
		loop: true,
		slidesPerView: 'auto',
		loopedSlides: 4,
		spaceBetween: 16,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		autoplay: {
			delay: 2000,
			pauseOnMouseEnter: true
		},
		breakpoints: {
			320: {
				spaceBetween: 16,
			},
			768: {
				spaceBetween: 40,
			},
		}
	});
};

$(function () {

	$(document).on('click', '.seminars .load-more', event => {
		let btn = event.target;
		let parent = btn.closest('.seminars');
		let target = parent.querySelector('.seminars__item.d-none');
		if (target) {
			target.classList.remove('d-none');

			if (!parent.querySelector('.seminars__item.d-none')) {
				btn.remove();
			}
		}
	});

	$(document).on('click', '.price-tabs .tab-item', event => {
		event.preventDefault();
		let target = $(event.target);
		$('.price-tabs .tab-item').removeClass('active');
		target.addClass('active');

		var content = $(target.attr('href'));
		if (content.length) {
			$('.price__items .price__col').hide();
			content.show();
		}
	});

	$(window).on('resize', () => {
		if (window.innerWidth > 992) {
			$('.price__items .price__col').show();
		}
	});

	enumModals();


	// workshops
	if ($('.masterclass .swiper').length) {
		var swiper = new Swiper(".masterclass .swiper", {
			slidesPerView: 'auto',
			spaceBetween: 24,
			centeredSlides: false,
			pagination: {
				el: '.masterclass .slider-dots'
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					centeredSlides: true,
					loop: true,
				},
				768: {
					slidesPerView: 'auto',
					spaceBetween: 24,
					centeredSlides: false,
					loop: false,
				},
			},
			on: {
				slideChange: function (swiper) {
					$('.masterclass .slider-pagination-current').text(numberAppend(++swiper.realIndex));
				}
			}
		});


		//     partiesSlider = new Swiper( '.parties__slider', {
		// 	loop: true,
		// 	slidesPerView: 1,
		// 	spaceBetween: 16,
		// 	observer: true,
		// 	observeParents: true,
		// 	pagination: {
		// 		el: '.parties__dots'
		// 	},
		// 	on: {
		// 		paginationRender: function(){
		// 			totalSlides = $('.parties__dots .swiper-pagination-bullet').length;
		// 			$('.parties__pagination .slider-pagination-total').text(numberAppend(totalSlides));
		// 		},
		// 		slideChange: function(){
		// 			var currentSlide = $('.parties__dots').find('.swiper-pagination-bullet-active').index() + 1;
		// 			if (currentSlide == 0) currentSlide = 1;
		// 			$('.parties__pagination .slider-pagination-current').text(numberAppend(currentSlide));
		// 		}
		// 	},
		// 	breakpoints: {
		// 		320: {
		// 			slidesPerView: 1,
		// 			loopedSlides: 4,
		// 			spaceBetween: 16,
		// 		},
		// 		768: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 40,
		// 		},
		// 		992: {
		// 			slidesPerView: 3,
		// 			spaceBetween: 40,
		// 		},
		// 	},
		// });


	}

	// let modalTabs = $('.modal-sets__tabs');
	// if (modalTabs.length) {
	// 	new Swiper('.modal-sets__tabs', {
	// 		loop: false,
	// 		slidesPerView: 'auto',
	// 		spaceBetween: 16,
	// 	});
	// }

	if ($('.section-workshop__slider').length) {
		var thisSlide = $('.section-workshop .slider-pagination-current');
		new Swiper('.section-workshop__slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 16,
			observer: true,
			observeParents: true,
			// 		effect: 'fade',
			navigation: {
				nextEl: ".section-workshop .swiper-button-next",
				prevEl: ".section-workshop .swiper-button-prev",
			},
			autoplay: {
				delay: 3000,
				pauseOnMouseEnter: true
			},
			pagination: {
				el: '.section-workshop .advantages__dots',
			},
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					effect: 'slide',
					spaceBetween: 16,
					width: 269,
				},
				768: {
					slidesPerView: 1,
					allowTouchMove: true,
					effect: 'fade',
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 40,
					centeredSlides: true,
					allowTouchMove: true
				},
				1200: {
					slidesPerView: 1,
					spaceBetween: 40,
				},
			},
			on: {
				slideChange: function (swiper) {
					thisSlide.text(numberAppend(++swiper.realIndex));
				}
			}
		});

	}

	$(document).on('click', '.btn-quiz', event => {
		let target = $(event.target);

		let section = target.closest('section');
		if (!section.length) return;
		section.toggleClass('active');

		let parent = section.find('.price__help');
		if (!parent.length) return;
		parent.toggleClass('active');

		let quiz = $('.quiz-section');
		if (quiz.length) quiz.toggleClass('show');
		if (typeof Lscroll !== 'undefined') Lscroll.update();
	});



	$('body').addClass('is-ready');

	wow = new WOW(
		{
			offset: 100,
			mobile: false,
		}
	);
	// 	wow.init();

	// mob menu
	$(".menu-toggle").click(function () {
		$('body').toggleClass("menu-expanded");
	});
	$(".menu-list a").click(function () {
		$('body').removeClass("menu-expanded");
	});


	// sticky header
	// if( $(window).scrollTop() > 0 ) {
	// 	$('.header').addClass('is-fixed');
	// }
	// else{
	// 	$('.header').removeClass('is-fixed');
	// }
	//
	// $(window).on('scroll', () => {
	// 	if( $(this).scrollTop() > 0 ) {
	// 		$('.header').addClass('is-fixed');
	// 	}
	// 	else{
	// 		$('.header').removeClass('is-fixed');
	// 	}
	// });

	// page scroll
	$(document).on('click', '.anchor', function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		// var top = $(id).offset().top - $('.header').outerHeight() - 10;
		var top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1000);

		if (typeof Lscroll == 'object') {
			if (id == '#quiz46') {
				$('.btn-quiz').trigger('click');
			}
			setTimeout(() => {
				Lscroll.scrollTo(document.querySelector(id), {
					offset: -$('.header').outerHeight() + 10
				});
			}, 200);
		}
	});

	// jquery tabs
	$(document).on('click', '.js-tab', function (e) {
		e.preventDefault();
		var $target = $('.' + $(this).data('tab'));
		$(this).parent().children('.js-tab').removeClass('is-active');
		$(this).addClass('is-active');
		$target.parent().children('.js-tab-content').hide();
		$target.show();
	});

	// jquery accordion
	$('.js-accordion-btn').click(function () {
		var dropDown = $(this).parent().find('.js-accordion-content');
		$(this).closest('.js-accordion').find('.js-accordion-content').not(dropDown).slideUp();
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
		} else {
			$(this).closest('.js-accordion').find('.js-accordion-btn.is-active').removeClass('is-active');
			$(this).addClass('is-active');
		}
		dropDown.stop(false, true).slideToggle();
	});


	// modals
	let modalTitle = '';
	$(document).on('click', '.js-open-modal', function (e) {
		e.preventDefault();
		var modal = $(this).data('modal');
		$.fancybox.close();
		$.fancybox.open({
			src: modal,
			type: 'inline',
			opts: {
				touch: false,
				buttons: [
					'close'
				],
				arrows: false,
				beforeShow: (instance, curren) => {
					let title = $(this).data('title');
					let elTitle = $(modal).find('.modal__title .title');
					let inputTitle = $(modal).find('input[name="title"]');
					modalTitle = elTitle.text();
					if (title && elTitle.length) {
						elTitle.text(title);
						if (inputTitle.length) inputTitle.val(title);
						let desc = $(modal).find('.modal__title .desc');
						if (desc.length) {
							desc.show();
						}
					}
				},
				afterShow: (instance, current) => {
					window.modal = instance;
					initStories($(this).data('slide'));

					if (modal == '#masterclass') {
						var title = $(this).data('title');
						var input = $(modal).find('input[name="masterclass"]');
						if (input.length) input.val(title);
					}
				},
				afterClose: () => {
					window.modal = false;
					let elTitle = $(modal).find('.modal__title .title');
					if (elTitle.length && modalTitle) {
						elTitle.text(modalTitle);
					}

					let desc = $(modal).find('.modal__title .desc');
					if (desc.length) {
						desc.hide();
					}

					enumModals();
					if (typeof Lscroll !== 'undefined') Lscroll.update();

					let stories = $('#stories');
					if (stories.length) {
						stories.removeClass('paused');
						let video = stories.find('video.show');
						if (video.length) {
							video.removeClass('show');
							video[0].pause();
							video[0].currentTime = 0;
						}
					}
				}
			}
		});
	});

	let swiperStories;
	let initStories = (slide) => {
		let stories = $('#stories');
		if (!stories.length) return;

		// bullets
		let bullets = stories.find('.swiper-pagination-bullet');
		bullets.removeClass('swiper-pagination-bullet-active');
		bullets.eq(slide).addClass('swiper-pagination-bullet-active');

		// video
		stories.find('video').each((index, video) => {
			video.muted = true;
			video.pause();
			// video.currentTime = 0;
			// video.load();
		});

		if (stories.find('.swiper').hasClass('swiper-container-initialized')) {
			swiperStories.slideTo(slide);
			let video = stories.find('.swiper-slide[data-slide="' + slide + '"] video');
			if (video.length) {
				// video[0].defaultMuted = false;
				// video[0].play();
			}
			return false;
		}



		swiperStories = new Swiper('#stories .swiper', {
			loop: false,
			autoplay: false,
			width: 400,
			centeredSlides: true,

			// If we need pagination
			pagination: false,
			// pagination: {
			//     el: '.stories-swiper-pagination',
			// },

			// Navigation arrows
			navigation: {
				nextEl: '.stories-swiper-button-next',
				prevEl: '.stories-swiper-button-prev',
			},
			on: {
				init: function () {
					stories.find('video').each((index, video) => {
						let bullet = bullets.eq(index);
						bullet.find('span').css({
							'animation-duration': video.duration + 's'
						});

						video.onended = (event) => {
							console.log('end video');
							swiperStories.slideNext();
						};
					});
					if (!slide) {
						let video = stories.find('video.show');
						if (video.length) {
							video[0].muted = false;
						}
					}
					this.slideTo(slide, 0);

				},
				slideChange: function (swiper) {
					console.log('slideChange');
					bullets.removeClass('swiper-pagination-bullet-active');
					bullets.eq(swiper.activeIndex).addClass('swiper-pagination-bullet-active');

					let activeVideo = stories.find('video.show');
					if (activeVideo.length) {
						activeVideo.removeClass('show');
						activeVideo[0].pause();
						activeVideo[0].currentTime = 0;
						// video.load();
					}

					let video = stories.find('.swiper-slide[data-slide="' + swiper.activeIndex + '"] video');
					if (video.length) {
						video.addClass('show');
						video[0].muted = false;
						video[0].play();
					}
				}
			},
			breakpoints: {
				320: {
					width: 360,
				},
				578: {
					width: 400,
				},
			},
		});

		$(document).on('click', '.modal-stories .btn-video', function () {
			$('#stories').toggleClass('paused');
			if ($('.modal-stories.paused').length) {
				// swiperStories.autoplay.stop();
				document.querySelector('#stories .swiper-pagination-bullet-active span').style.animationPlayState = 'paused';
				document.querySelector('.modal-stories .swiper-slide-active video').pause();
			} else {
				// swiperStories.autoplay.start();
				document.querySelector('#stories .swiper-pagination-bullet-active span').style.animationPlayState = 'running';
				document.querySelector('.modal-stories .swiper-slide-active video').play();
			}
		});
	};


	// Sliders start

	function numberAppend(d) {
		return (d < 10) ? '0' + d.toString() : d.toString();
	}

	var aboutSlider;
	$(window).on('load resize orientationchange', function () {

		if ($(window).width() > 1200) {
			if ($('.about__slider').hasClass('swiper-container-initialized')) {
				aboutSlider.destroy();
			}
		} else {
			if (!$('.about__slider').hasClass('swiper-container-initialized')) {
				aboutSlider = new Swiper('.about__slider', {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 16,
					observer: true,
					observeParents: true,
					pagination: {
						el: '.about__dots'
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 16,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
					},
					on: {
						paginationRender: function () {
							totalSlides = $('.about__dots .swiper-pagination-bullet').length;
							$('.about__pagination .slider-pagination-total').text(numberAppend(totalSlides));
						},
						slideChange: function () {
							var currentSlide = $('.about__dots').find('.swiper-pagination-bullet-active').index() + 1;
							if (currentSlide == 0) currentSlide = 1;
							$('.about__pagination .slider-pagination-current').text(numberAppend(currentSlide));
						}
					}
				});

			}
		}

	});


	// 	var advantagesImgSliderXL, advantagesImgSliderMD, advantagesImgSlider;

	// 	advantagesImgSliderXL = new Swiper( '.advantages-img__slider', {
	// 		loop: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 		observer: true,
	// 		observeParents: true,
	// 		effect: 'fade',
	// 		navigation: {
	//           nextEl: ".swiper-button-next",
	//           prevEl: ".swiper-button-prev",
	//         },
	// 		autoplay: {
	// 			delay: 3000,
	// 			pauseOnMouseEnter: true
	// 		},
	// 		pagination: {
	// 			el: '.advantages__dots'
	// 		},
	// 		breakpoints: {
	// 			768: {
	// 				slidesPerView: 1,
	// 				allowTouchMove: true,
	// 			},
	// 			992: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 40,
	// 				centeredSlides: true,
	// 				allowTouchMove: true
	// 			},
	// 			1200: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 40,
	// 			},
	// 		},
	// 		on: {
	// 			paginationRender: function(){
	// 				totalSlides = $('.advantages__dots .swiper-pagination-bullet').length;
	// 				console.log(totalSlides);
	// 				$('.advantages__pagination .slider-pagination-total').text(numberAppend(totalSlides));
	// 			},
	// 			slideChange: function(){
	// 				var currentSlide = $('.advantages__dots').find('.swiper-pagination-bullet-active').index() + 1;
	// 				if (currentSlide == 0) currentSlide = 1;
	// 				$('.advantages__pagination .slider-pagination-current').text(numberAppend(currentSlide));
	// 			}
	// 		}
	// 	});


	// 	if ($(window).width() < 768) {
	// 		if ($('.advantages-img__slider').hasClass('swiper-container-initialized')) {
	// 			advantagesImgSliderXL.destroy();
	// 			advantagesImgSliderMD = new Swiper( '.advantages-img__slider', {
	// 				loop: true,
	// 				slidesPerView: 1,
	// 				loopedSlides: 2,
	// 				spaceBetween: 16,
	// 				observer: true,
	// 				observeParents: true,
	// 			});
	// 		}
	// 	}



	let initAdvantageSliders = id => {
		let el = '#' + id;
		new Swiper(el, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 16,
			observer: true,
			observeParents: true,
			effect: 'fade',
			navigation: {
				nextEl: el + " .swiper-button-next",
				prevEl: el + " .swiper-button-prev",
			},
			autoplay: {
				delay: 3000,
				pauseOnMouseEnter: true
			},
			pagination: {
				el: $(el).closest('.advantage-swiper-container').find('.advantages__dots')[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
					allowTouchMove: true,
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 40,
					centeredSlides: true,
					allowTouchMove: true
				},
				1200: {
					slidesPerView: 1,
					spaceBetween: 40,
				},
			},
			on: {
				slideChange: function (swiper) {
					let parent = $(el).parent('div');
					parent.find('.advantages__pagination .slider-pagination-current').text(numberAppend(++swiper.realIndex));
				}
			}
		});
	}

	var advantageSliders = document.querySelectorAll('.advantages-img__slider');
	advantageSliders.forEach(item => {
		initAdvantageSliders(item.id);
	});


	$(window).on('load resize orientationchange', function () {

		if ($(window).width() >= 768) {
			if ($('.advantages__slider').hasClass('swiper-container-initialized')) {
				advantagesSlider.destroy();
			}
		} else {
			if (!$('.advantages__slider').hasClass('swiper-container-initialized')) {
				advantagesSlider = new Swiper('.advantages__slider', {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 16,
					observer: true,
					observeParents: true,
					// thumbs: {
					// 	swiper: advantagesImgSlider,
					// },
					pagination: {
						el: '.advantages-txt__dots'
					},
					on: {
						paginationRender: function () {
							totalSlides = $('.advantages-txt__dots .swiper-pagination-bullet').length;
							$('.advantages-txt__pagination .slider-pagination-total').text(numberAppend(totalSlides));
						},
						slideChange: function () {
							var currentSlide = $('.advantages-txt__dots').find('.swiper-pagination-bullet-active').index() + 1;
							if (currentSlide == 0) currentSlide = 1;
							$('.advantages-txt__pagination .slider-pagination-current').text(numberAppend(currentSlide));
						}
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
							loopedSlides: 4,
							spaceBetween: 16,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
					},
				});

			}
		}

	});

	var eventsSlider, eventsThumbsSlider;
	eventsThumbsSlider = new Swiper('.events__thumbs', {
		slidesPerView: 4,
		observer: true,
		observeParents: true,
		mousewheel: true,
		breakpoints: {
			320: {
				loop: true,
				loopedSlides: 2,
				slidesPerView: 'auto',
				direction: 'horizontal',
				spaceBetween: 12,
				centeredSlides: true
			},
			768: {
				loop: true,
				loopedSlides: 2,
				slidesPerView: 'auto',
				spaceBetween: 24,
				centeredSlides: true
			},
			992: {
				loop: false,
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1200: {
				loop: false,
				slidesPerView: 4,
				direction: 'vertical',
				spaceBetween: 24,
				freemode: true,
				speed: 200
			},
		}
	});
	eventsSlider = new Swiper('.events__slider', {
		observer: true,
		observeParents: true,
		// mousewheel: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: eventsThumbsSlider,
		},
		pagination: {
			el: '.events__dots',
			clickable: false,
		},
		breakpoints: {
			320: {
				loop: true,
				loopedSlides: 2,
				mousewheel: false,
			},
			992: {
				loop: false,
			},
		}
	});

	var partiesSlider;
	$(window).on('load resize orientationchange', function () {

		if ($(window).width() > 1200) {
			if ($('.parties__slider').hasClass('swiper-container-initialized')) {
				partiesSlider.destroy();
			}
		} else {
			if (!$('.parties__slider').hasClass('swiper-container-initialized')) {
				partiesSlider = new Swiper('.parties__slider', {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 16,
					observer: true,
					observeParents: true,
					pagination: {
						el: '.parties__dots'
					},
					on: {
						paginationRender: function () {
							totalSlides = $('.parties__dots .swiper-pagination-bullet').length;
							$('.parties__pagination .slider-pagination-total').text(numberAppend(totalSlides));
						},
						slideChange: function () {
							var currentSlide = $('.parties__dots').find('.swiper-pagination-bullet-active').index() + 1;
							if (currentSlide == 0) currentSlide = 1;
							$('.parties__pagination .slider-pagination-current').text(numberAppend(currentSlide));
						}
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
							loopedSlides: 4,
							spaceBetween: 16,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					},
				});

			}
		}

	});

	// Sliders end


	// quiz start

	var qindex = 1,
		qtotal;

	qtotal = $('.quiz__col .step').length;

	$('.quiz .step input').change(function () {
		$(this).closest('.step').find('input').removeClass('is-error');
		if ($(this).hasClass('input') && $(this).val() != '') {
			$(this).addClass('is-filled');
		} else {
			$(this).removeClass('is-filled');
		}
		// $('.quiz-result-val-' + qindex).text( $(this).val() );
		// qchange('next');
	});

	function quizProgress(step) {
		var percent = (step - 1) / qtotal * 100;
		percent = percent.toFixed(0);
		$('.quiz-progress__title span').text(percent + '%');
		$('.quiz-progress__bar span').css('width', percent + '%');
	}

	function qchange(direction) {

		if (direction == "next") {

			var stepValidation = false;
			$('.step-' + qindex).find('input').each(function (i, el) {
				if ($(this).prop('checked') || ($(this).hasClass('input') && $(this).val() != '')) {
					stepValidation = true;
				}
			});


			if (stepValidation) {
				$('.step-' + qindex).find('input').removeClass('is-error');
				if (qindex !== qtotal) {
					qindex += 1;
					$('.quiz .step').fadeOut(0);
					$('.step-' + qindex).fadeIn(300);
					// $('.quiz .currrent-step').text( numberAppend(qindex) );
				}
			} else {
				$('.step-' + qindex).find('input').addClass('is-error');
			}

		}

		if (direction == "back") {
			if (qindex !== 1) {
				qindex -= 1;
				$('.quiz .step').fadeOut(0);
				$('.step-' + qindex).fadeIn(300);
				// $('.quiz .currrent-step').text(qindex);
			}
		}

		quizProgress(qindex);

		qindex === 1 ? $('.quiz').addClass('quiz-start') : $('.quiz').removeClass('quiz-start');


		if (qindex == qtotal) {
			$('.quiz').addClass('quiz-end');
		} else {
			$('.quiz').removeClass('quiz-end');
		}

	}

	$('.quiz__next').click(function () {
		qchange('next');
	});
	$('.quiz__back').click(function () {
		qchange('back');
	});


	// quiz end


	// mob widget start
	$('.widget-toggle').click(function (e) {
		$('.widget').toggleClass('is-open');
	});
	$(document).mouseup(function (e) {
		if ((!$('.widget').is(e.target) && $('.widget').has(e.target).length === 0)) {
			if ($('.widget').hasClass('is-open')) $('.widget').removeClass('is-open');
		}
	});
	// mob widget end




	// forms start

	// Js select
	$(".my-select__trigger").on("click", function (event) {
		var select = $(this).closest(".my-select");
		$(".my-select").not(select).removeClass("is-opened");
		$('html').one('click', function () {
			$(".my-select").removeClass("is-opened");
		});
		$(this).closest(".my-select").toggleClass("is-opened");
		event.stopPropagation();
	});

	$(".my-select__option").on("click", function () {
		$(this).closest(".my-select").addClass('is-inputed');
		$(this).closest(".my-select").find("input").val($(this).data('value'));
		$(this).closest(".my-select").find(".my-select__trigger").text($(this).text());
		$(this).closest(".my-select__options").find(".my-select__option").removeClass("is-selected");
		$(this).addClass("is-selected");
		$(this).closest(".my-select").removeClass("is-opened");
	});

	// put set's name in modal form hidden input
	$('.set__footer .js-open-modal').click(function (e) {
		$('#set-choose').val($(this).closest('.set').find('.set__title').text());
	});

	// forms end


	let instagram = $('#instagram');
	if (instagram.length) {

		// let formData = new FormData();
		// formData.append('action')

		$.ajax('/assets/templates/action.php', {
			method: 'post',
			data: {
				'action': 'instagram',
				'token': instagram.data('token'),
				'limit': instagram.data('limit'),
			},
			dataType: 'json',
			success: (res) => {
				console.log('success', res);
				if (res.success) {
					instagram.html(res.data);
					instaSlider();
					if (typeof Lscroll !== 'undefined') Lscroll.update();
				}
			},
			error: (res) => {
				console.log('error', res);
			}
		});
	}


	function instaSlider() {
		new Swiper('.insta__slider', {
			loop: true,
			slidesPerView: 'auto',
			loopedSlides: 4,
			spaceBetween: 40,
			observer: true,
			observeParents: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				pauseOnMouseEnter: true
			},
			breakpoints: {
				320: {
					spaceBetween: 16,
				},
				768: {
					spaceBetween: 40,
				},
			}
		});
	}


	var stories = $('.stories__slider');
	if (stories.length) {
		new Swiper('.stories__slider', {
			loop: true,
			slidesPerView: 'auto',
			loopedSlides: 4,
			spaceBetween: 16,
			observer: true,
			observeParents: true,
			centeredSlides: true,
			// 		autoplay: {
			// 			delay: 2000,
			// 			pauseOnMouseEnter: true
			// 		},
			breakpoints: {
				320: {
					spaceBetween: 8,
				},
				768: {
					spaceBetween: 16,
				},
			},
		});
	}
});


$(document).on('af_complete', function (event, response) {
	let form = response.form;
	if (!response.success) return;
	let redirect = form.find('input[name="redirectTo"]');
	if (redirect.length && redirect.val() !== '') {
		window.location.href = redirect.val();
	} else {
		$.fancybox.close();
		if (typeof Lscroll !== 'undefined') Lscroll.update();
	}
});

// selectors
var $window = $(window),
	$body = $('body.bg'),
	$panel = $('section');

if ($body.length) {
	$(window).on('scroll', function () {
		var defaultColor = '#f5f2eb';

		// Change 33% earlier than scroll position so colour is there when you arrive.
		var scroll = $window.scrollTop() + ($window.height() / 3);
		var setColor = false;
		$panel.each(function () {
			var $this = $(this);
			if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

				if (!setColor) {
					$body.css({
						'background-color': $this.data('color') || defaultColor,
					});
					setColor = true;
				}
			}
		});

	}).scroll();
}

$(window).on('load', () => {
	var date = $('input[type="date"]');
	if (date.length) {
		date.pickadate();
	}
	var time = $('input[type="time"]');
	if (time.length) {
		time.pickatime({
			editable: true,
			interval: 60,
			min: [10, 0],
			max: [19, 0]
		});
	}

});



let Hash = {
	get: function () {
		var vars = {}, hash, splitter, hashes;
		if (!this.oldbrowser()) {
			var pos = window.location.href.indexOf('?');
			hashes = (pos != -1) ? decodeURIComponent(window.location.href.substr(pos + 1)).replace('+', ' ') : '';
			splitter = '&';
		}
		else {
			hashes = decodeURIComponent(window.location.hash.substr(1)).replace('+', ' ');
			splitter = '/';
		}

		if (hashes.length == 0) {
			return vars;
		}
		else {
			hashes = hashes.split(splitter);
		}

		var matches, key;
		for (var i in hashes) {
			if (hashes.hasOwnProperty(i)) {
				hash = hashes[i].split('=');
				if (typeof hash[1] == 'undefined') {
					vars['anchor'] = hash[0];
				}
				else {
					matches = hash[0].match(/\[(.*?|)\]$/);
					if (matches) {
						key = hash[0].replace(matches[0], '');
						if (!vars.hasOwnProperty(key)) {
							// Array
							if (matches[1] == '') {
								vars[key] = [];
							}
							// Object
							else {
								vars[key] = {};
							}
						}
						if (vars[key] instanceof Array) {
							vars[key].push(hash[1]);
						}
						else {
							vars[key][matches[1]] = hash[1];
						}
					}
					// String or numeric
					else {
						vars[hash[0]] = hash[1];
					}
				}
			}
		}
		return vars;
	},

	set: function (vars) {
		var hash = '';
		for (var i in vars) {
			if (vars.hasOwnProperty(i)) {
				if (typeof vars[i] == 'object') {
					for (var j in vars[i]) {
						if (vars[i].hasOwnProperty(j)) {
							// Array
							if (vars[i] instanceof Array) {
								hash += '&' + i + '[]=' + vars[i][j];
							}
							// Object
							else {
								hash += '&' + i + '[' + j + ']=' + vars[i][j];
							}
						}
					}
				}
				// String or numeric
				else {
					hash += '&' + i + '=' + vars[i];
				}
			}
		}

		if (!this.oldbrowser()) {
			if (hash.length != 0) {
				hash = '?' + hash.substr(1);
			}
			window.history.pushState({ pdoPage: document.location.pathname + hash }, '', document.location.pathname + hash);
		}
		else {
			window.location.hash = hash.substr(1);
		}
	},

	add: function (key, val) {
		var hash = this.get();
		hash[key] = val;
		this.set(hash);
	},

	remove: function (key) {
		var hash = this.get();
		delete hash[key];
		this.set(hash);
	},

	clear: function () {
		this.set({});
	},

	oldbrowser: function () {
		return !(window.history && history.pushState);
	}
};

$(function () {

	let hash = Hash.get('form');
	if (hash) {

		var $block = $('#page-form' + hash.form);
		if ($block.length) {
			var top = $block.offset().top - $('.header').outerHeight() - 10;
			$('body, html').animate({ scrollTop: top }, 0);
		}

		if (hash.form == 'modal') {
			$.fancybox.open({
				src: '#book',
				type: 'inline',
				opts: {
					touch: false,
					buttons: [
						'close'
					],
					arrows: false,
					afterShow: (instance, current) => {
						window.modal = instance;
					},
					afterClose: () => {
						window.modal = false;
						enumModals();
						if (typeof Lscroll !== 'undefined') Lscroll.update();
					}
				}
			});
		}

		if (hash.form == 'whatsapp') {
			[19, 20].forEach((item) => {
				let modalname = 'newsletter-' + item;
				let modalNewsletter = document.getElementById(modalname);
				if (modalNewsletter) {
					initFBModal(modalname, 10);
				}
			});
		}
	}
});

window.addEventListener('load', () => {
	let phones = document.querySelectorAll('.newsletter input[name="phone"]');
	phones.forEach((elem, idx) => {
		new IMask(elem, {
			mask: '+49(0000)000-00-00',
			lazy: false
		});
	})
});

// SLIDER TAB AWARENESS

function setTranslate(xPos, yPos, el) {
	el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener('load', () => {
	const tabs = document.querySelectorAll(".tabs-slide");
	const scrollBar = document.querySelector(".swiper-scrollbar");
	const scrollBarDrag = document.querySelector(".swiper-scrollbar-drag");

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			let calcScroll = (((parseInt(window.getComputedStyle(scrollBar).getPropertyValue('width')) / tabs.length) * (index + 1)) - (parseInt(window.getComputedStyle(scrollBar).getPropertyValue('width'))) / tabs.length);
			setTranslate(calcScroll, 0, scrollBarDrag);
		})
	})
})