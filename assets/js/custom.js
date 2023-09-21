(function ($) {
  // Получаем ссылки на элементы страницы по их id
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  // Добавляем слушатель события "click" для открытия и закрытия меню
  toggle.addEventListener("click", function (e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open"); // Убираем класс "open", чтобы закрыть меню
    } else {
      menu.classList.add("open"); // Добавляем класс "open", чтобы открыть меню
    }
  });
  // Добавляем слушатель события "click" для закрытия меню
  close.addEventListener("click", function (e) {
    menu.classList.remove("open"); // Убираем класс "open", чтобы закрыть меню
  });

  // Закрытие меню после клика на маленьких экранах
  $(window).on("resize", function () {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function () {
        menu.classList.remove("open"); // Убираем класс "open", чтобы закрыть меню
      });
    }
  });

  // Инициализация Isotope для фильтрации элементов
  /*
  $(".isotope-wrapper").each(function () {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function () {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });
  // Инициализация Lightbox для просмотра изображений
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
*/
  // Инициализация карусели Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  // Удаление класса "hover" при уходе мыши с элемента
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

})(jQuery);