$(document).ready(function () {

		/*Каталог*/

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


		/*Каталог старый

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

	*/


		/*слайдер цены в sidebar*/

	$("#ex2").slider({});

		/*Выпадающий список сортировки */

	var dropdown = $('.sort_by');

	dropdown.find('li').click(function (event) {
		event = event || window.event;
		var new_text = $(event.currentTarget).html();
		$('.sort_v').html(new_text);
	});

		/*смена отображения товаров*/

	$('.show_view_1').click(function () {
		if ($(this).hasClass('active')) {
			return;
		} else{
			$(this).addClass('active').attr("src", "img/shopwindow/view_img_1_active.png");
			$('.show_view_2').removeClass('active').attr("src", "img/shopwindow/view_img_2_noactive.png");
			$('.view_2').css("display", "none");
			$('.view_1').css("display", "block");
		}
	});

	$('.show_view_2').click(function () {
		if ($(this).hasClass('active')) {
			return;
		} else{
			$(this).addClass('active').attr("src", "img/shopwindow/view_img_2_active.png");
			$('.show_view_1').removeClass('active').attr("src", "img/shopwindow/view_img_1_noactive.png");
			$('.view_1').css("display", "none");
			$('.view_2').css("display", "block");
		}
	});


		/*Выбор количества товаров*/

	$('.btn-number').click(function(e){
	    e.preventDefault();

	    fieldName = $(this).attr('data-field');
	    type      = $(this).attr('data-type');
	    var input = $("input[name='"+fieldName+"']");

	    var currentVal = parseInt(input.val());
	    if (!isNaN(currentVal)) {
	        if(type == 'minus') {

	            if(currentVal > input.attr('min')) {
	                input.val(currentVal - 1).change();
	            }
	            if(parseInt(input.val()) == input.attr('min')) {
	                $(this).attr('disabled', true);
	            }

	        } else if(type == 'plus') {

	            if(currentVal < input.attr('max')) {
	                input.val(currentVal + 1).change();
	            }
	            if(parseInt(input.val()) == input.attr('max')) {
	                $(this).attr('disabled', true);
	            }

	        }
	    } else {
	        input.val(0);
	    }
	});
	$('.input-number').focusin(function(){
	   $(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {

	    minValue =  parseInt($(this).attr('min'));
	    maxValue =  parseInt($(this).attr('max'));
	    valueCurrent = parseInt($(this).val());

	    name = $(this).attr('name');
	    if(valueCurrent >= minValue) {
	        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the minimum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	    if(valueCurrent <= maxValue) {
	        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the maximum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }

	});
	$(".input-number").keydown(function (e) {
	    // Allow: backspace, delete, tab, escape, enter and .
	    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
	         // Allow: Ctrl+A
	        (e.keyCode == 65 && e.ctrlKey === true) ||
	         // Allow: home, end, left, right
	        (e.keyCode >= 35 && e.keyCode <= 39)) {
	             // let it happen, don't do anything
	             return;
	    }
	    // Ensure that it is a number and stop the keypress
	    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	        e.preventDefault();
	    }
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




});