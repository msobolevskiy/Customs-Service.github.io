(function ($) {
	$(document).ready(function () {

		$('.mobile-menu').css('right', -$('.mobile-menu').outerWidth());

		function open_menu() {
			if ($('.mobile-menu').hasClass('opened')) {
				$('.mobile-menu').css('right', -$('.mobile-menu').outerWidth());
				$('.mobile-menu').removeClass('opened');

			} else {
				$('.mobile-menu').addClass('opened');
				$('.mobile-menu').css('right', 0);
			}
		}
		$('.mobile-menu-button').on('click', open_menu);
		$('.mobile-menu i').on('click', open_menu);


		$.fn.lpMapInit = function () {

			var lpMapOptions = {
				center: [53.908910, 27.522861],
				zoom: 15,
				controls: ['fullscreenControl', 'zoomControl']
			}

			if (window.innerWidth < 768) {
				lpMapOptions.behaviors = ['multiTouch'];
			} else {
				lpMapOptions.behaviors = ['drag'];
			}

			var lpMap = new ymaps.Map('map', lpMapOptions);

			var lpPlacemark = new ymaps.Placemark(lpMapOptions.center, {
				hintContent: 'ООО "Кастом-Сервис"',
				balloonContentFooter: 'Улица Скрыганова, 14 г.Минск, Беларусь'
			});

			lpMap.geoObjects.add(lpPlacemark);
		}


	});
})(jQuery);
