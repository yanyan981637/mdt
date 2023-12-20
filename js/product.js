/*
 * @LastEditors    : arvin arvin.duan@mic.com.tw
 * @Date           : 2023-04-21 11:40:27
 * @LastEditTime   : 2023-04-26 14:34:58
 * @FilePath       : \mitacmdt\mitacmdt\js\extra.js
 * @description    : 
 */
$(function(){

 

  // 獲取所有的錨點元素
  var target_el_list = []
  $('.product-nav ul a').each(function(){
     var target_el = $(this).attr('href');
    if (target_el.length > 0 && target_el.indexOf('#') === 0) {
      target_el_list.push({
        el: $(this),
        target_el:target_el
      });
    }
  });

  // 定義錨點事件
  function productNav(target_el_list) {
    var scroll_top = $(this).scrollTop() + $('#menu-wrap').innerHeight() + $('.SecTopNav').height();
    var product_nav_height = $('.product-nav').height();
    // sec top nav fixed
    if ($('.ProdcuctNavPlaceholder').length > 0) {
      product_nav_offset_height = $('.ProdcuctNavPlaceholder').offset().top

      if (scroll_top >= product_nav_offset_height) {
        $('.product-nav').addClass('fixed');
        $('.ProdcuctNavPlaceholder').height(product_nav_height + 'px');
      } else {
        $('.product-nav').removeClass('fixed');
        $('.ProdcuctNavPlaceholder').height(0);
      }
    }

    if(target_el_list.length > 0) {
      $.each(target_el_list, function () {
        if ($(this.target_el).length > 0) {
          var target_el_top = $(this.target_el).offset().top
          var target_el_height = $(this.target_el).innerHeight()
          if (scroll_top + product_nav_height >= target_el_top && scroll_top + product_nav_height < target_el_top + target_el_height) {
            this.el.addClass('active');
          }else {
            this.el.removeClass('active');
          }
        }
      })
    }
  }
  // 初始化 錨點事件
  productNav(target_el_list)

  // 窗口變化， 内容高度變化，故錨點變化
  $(window).on('resize', function(){
    // console.log(1)
    productNav(target_el_list)
    $(".product-nav").removeClass('show')
  })
  
  $(window).on('scroll', function() {
    productNav(target_el_list)
  })

  $('.product-nav .product-nav_title').on('click', function(){
    $(".product-nav").toggleClass('show')
  })

  $('.product-nav .bg').on('click', function(){
    $(".product-nav").removeClass('show')
  })

});