$(document).ready(function () {

	function getTree() {
		var tree = [
  			{
    			text: "Цемент",
  				href: "#"
  			},
  			{
      			text: "Добавки в бетон",
  				href: "#"
  			},
  			{
      			text: "Трубы асбестоцементные",
  				href: "#"
  			},
  			{
    			text: "Минеральные вяжущие",
  				href: "#",
    			nodes: [
      				{
        				text: "Продукт 1",
  						href: "#"
        			},
        			{
        				text: "Продукт 2",
  						href: "#"
        			},
        			{
        				text: "Продукт 3",
  						href: "#"
      				}
      			]
      		},
      		{
        		text: "Сыпучие материалы",
  				href: "#"
      		},
      		{
      			text: "Гипсокартонные системы",
  				href: "#"
  			},
  			{
    			text: "Строительные смеси",
  				href: "#",
    			nodes: [
      				{
        				text: "Продукт 1",
  						href: "#"
        			},
        			{
        				text: "Продукт 2",
  						href: "#"
        			}
      			]
  			},
  			{
  				text: "Утеплители",
  				href: "#"
  			},
  			{
  				text: "Линии раздач",
  				href: "#"
  			},
  			{
  				text: "Инструменты",
  				href: "#",
  				nodes: [
        			{
        				text: "Измерительные",
  						href: "#"
        			},
        			{
        				text: "Малярные",
  						href: "#"
        			},
        			{
        				text: "Бензоинструмент",
  						href: "#"
        			},
        			{
        				text: "Аксессуары",
  						href: "#"
        			}
      			]
  			},
  			{
  				text: "Сантехника",
  				href: "#"
  			}
		];
  		return tree;
	}

	$('#tree').treeview({
		data: getTree(),
		showBorder: false,
		enableLinks: true,
		selectedBackColor: "#ffc633"
	});

	$("#ex2").slider({});

		/*Каталог*/

	var array_li = $('.layout1 li');

	for (var i = 0; i <= array_li.length - 1; i++) {
		var child_li = $(array_li[i]).children('ul');
		if (child_li.length > 0) {
			$(array_li[i]).prepend('<div class="catalog_img"><img class="catalog_list_off" src="img/catalog_list_off.png" alt="!"></div>');
			$(array_li[i]).addClass('with_dropdown_list');
		} else{
			$(array_li[i]).addClass('without_dropdown_list');
		}
	}

	$('.with_dropdown_list>a').click(function (event) {
		var parent_li = $(this).parent();
		if ($(parent_li).hasClass('open_list')) {
			$(parent_li).removeClass('open_list');
			$(parent_li).addClass('close_list');
			$(parent_li).children('img').attr('src', 'img/catalog_list_off.png');
			$(parent_li).children('ul').hide();
		} else {
			$(parent_li).addClass('open_list');
			$(parent_li).children('img').attr('src', 'img/catalog_list_on.png');
			$(parent_li).children('ul').show();
		}
	});


		/*Выпадающий список сортировки*/
	
	var dropdown = $('.sort_dropdown');

	$('.sort_by').click(function () {
		dropdown.slideDown();
		$('.sort_list img').attr('src', 'img/sort_by_list_up.png');
	});
		
	dropdown.mouseleave(function () {
		dropdown.slideUp();
		$('.sort_list img').attr('src', 'img/sort_by_list_down.png');
	});

	dropdown.find('li').click(function (event) {
		event = event || window.event;
		var new_text = $(event.currentTarget).html();
		$('.sort_by span').html(new_text);
		dropdown.slideUp();
		$('.sort_list img').attr('src', 'img/sort_by_list_down.png');
	});


		/*Выбор количества товаров*/

	$('.button_group input').keydown(function(e){
        var key = e.charCode || e.keyCode || 0;
        /*Разрешаем: Backspace, Tab, Home, End, Insert, Delete, Ctrl+A,
        Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z, Стрелки, Цифры, NumPad
         */
        return (
            key == 8
                || key == 9
                || key == 35
                || key == 36
                || key == 45
                || key == 46
                || (key == 65 && e.ctrlKey)
                || (key == 67 && e.ctrlKey)
                || (key == 86 && e.ctrlKey)
                || (key == 88 && e.ctrlKey)
                || (key == 90 && e.ctrlKey)
                || (key >= 37 && key <= 40)
                || (key >= 48 && key <= 57 && !e.shiftKey)
                || (key >= 96 && key <= 105)
            );
    });

	$(".plus").click(function () {
		var el_input = $(this).prev();
			val = parseFloat($(el_input).val());

		if (isNaN(val)) {
			val = 0;
		}
		var	new_val = val + 1;

		$(el_input).val(new_val);
	});

	$(".minus").click(function () {
		var el_input = $(this).next();
			val = parseFloat($(el_input).val());
			console.log(val);
		if (val === 1 || isNaN(val)) {
			val = 2;
		}

		var new_val = val - 1;

		$(el_input).val(new_val);
	});

	
		/*Похожие товары*/

	$(".similar_products .goods_view_1").mouseover(function (event) {
		event = event || window.event;
		$(event.currentTarget).addClass('goods_view_1_link');
	});
	$(".similar_products .goods_view_1").mouseleave(function (event) {
		event = event || window.event;
		$(event.currentTarget).removeClass('goods_view_1_link');
	});
	$(".similar_products .goods_view_1").click(function (event) {
		event = event || window.event;
		var url = "http://worktemplate.ua/#";
		$(location).attr('href',url);
	});


		/*смена отображения товаров*/

	$('.show_view_1').click(function () {
		if ($(this).hasClass('active')) {
			return;
		} else{
			$(this).addClass('active').attr("src", "img/view_img_1_active.png");
			$('.show_view_2').removeClass('active').attr("src", "img/view_img_2_noactive.png");
			$('.view_2').css("display", "none");
			$('.view_1').css("display", "block");
		}
	});

	$('.show_view_2').click(function () {
		if ($(this).hasClass('active')) {
			return;
		} else{
			$(this).addClass('active').attr("src", "img/view_img_2_active.png");
			$('.show_view_1').removeClass('active').attr("src", "img/view_img_1_noactive.png");
			$('.view_1').css("display", "none");
			$('.view_2').css("display", "block");
		}
	});

});