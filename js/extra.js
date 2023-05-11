/*
 * @LastEditors    : arvin arvin.duan@mic.com.tw
 * @Date           : 2023-04-21 11:40:27
 * @LastEditTime   : 2023-04-26 14:34:58
 * @FilePath       : \mitacmdt\mitacmdt\js\extra.js
 * @description    : 
 */
	$(function(){

		function scrollToEl(el){

			var header_height = $('#menu-wrap').innerHeight(); // meau 的高度

			var submenu_height = 0; // submenu 的高度

			if ($('.SecTopNav').length > 0) {

				submenu_height = $('.SecTopNav').innerHeight()
			}

			if ($(el).length > 0) {
				var target_top = $(el).offset().top - header_height - submenu_height + 1;

				$('html,body').animate({
					scrollTop:target_top
				}, 300);
			}

		}
		

		//滑動錨點
		$("a[href^='#']:not(a[href='#'])").click(function(e){
			const targetId = $(this).attr('href');
			if($(targetId).length > 0) {
				scrollToEl(targetId)
				window.location.hash = targetId
				return false;
			}
		});

		$("area[href^='#']:not(area[href='#'])").on("click",function(){
			const targetId = $(this).attr('href');
			if($(targetId).length > 0) {
				scrollToEl(targetId)
				window.location.hash = targetId
				return false;
			}
		})
		// 加載頁面後滑動到錨點位置
		if (window.location.hash){
			scrollToEl(window.location.hash)
		}

		// 獲取所有的錨點元素
		var target_el_list = []
		$('.SecTopNav a').each(function(){
     	var target_el = $(this).attr('href');
			if (target_el.length > 0 && target_el.indexOf('#') === 0) {
				target_el_list.push({
					el: $(this),
					target_el:target_el
				});
			}
    });

		// 定義錨點事件
		function SecTopNav(target_el_list) {
			var scroll_top = $(this).scrollTop() + $('#menu-wrap').innerHeight();
			var sec_top_nav_height = $('.SecTopNav').height();
			// sec top nav fixed
			if ($('.SecTopNavPlaceholder').length > 0) {
				sec_top_nav_offset_height = $('.SecTopNavPlaceholder').offset().top

				if (scroll_top >= sec_top_nav_offset_height) {
					$('.SecTopNav').addClass('fixed');
					$('.SecTopNavPlaceholder').height(sec_top_nav_height + 'px');
				} else {
					$('.SecTopNav').removeClass('fixed');
					$('.SecTopNavPlaceholder').height(0);
				}
			}

			if(target_el_list.length > 0) {
				$.each(target_el_list, function () {
					if ($(this.target_el).length > 0) {
						var target_el_top = $(this.target_el).offset().top
						var target_el_height = $(this.target_el).innerHeight()
						if (scroll_top + sec_top_nav_height >= target_el_top && scroll_top + sec_top_nav_height < target_el_top + target_el_height) {
							this.el.addClass('active');
						}else {
							this.el.removeClass('active');
						}
					}
				})
			}
		}
		// 初始化 錨點事件
		SecTopNav(target_el_list)

		// 窗口變化， 内容高度變化，故錨點變化
		$(window).on('resize', function(){
			// console.log(1)
			SecTopNav(target_el_list)
		})
		
		$(window).on('scroll', function() {
			SecTopNav(target_el_list)
		})

	});