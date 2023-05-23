(function($, animate_time = 300){
  
  var window_width = $(window).width();

  $(window).on('resize', function(e){
    if (window_width != $(window).width()) {
      window_width = $(window).width();
      init()
    }
  })

  function init() {
    
    $('#menu-wrap').find('li.open').removeClass('open');
    $('#menu-wrap').find('button.navbar-toggle').removeClass('collapsed');
    $('#menu-wrap').find('div.navbar-collapse').removeClass('collapsed');
  }

  function openAnimation(el) {
    
    var child_menu = $(el).siblings('ul')
    var el_height = child_menu.height();
    var parent_el = $(el).parent();

    var other_open_el = parent_el.siblings('li.open')

    if(other_open_el.length > 0) {
      other_open_el.each(function(){
        closeAnimation($(this).children('a'))
      })
    }

    parent_el.addClass('opening');

    child_menu.height(el_height);

    setTimeout(function(){
      child_menu.attr('style', '');
      parent_el.removeClass('opening').addClass('open');
    }, animate_time)
  }

  function closeAnimation(el) {

    var child_menu = $(el).siblings('ul')
    var el_height = child_menu.height();
    
    var parent_el = $(el).parent();

    child_menu.height(el_height);
    parent_el.addClass('closing');
    child_menu.height(0);


    setTimeout(function(){
      child_menu.attr('style', '');
      parent_el.removeClass('closing').removeClass('open');
      parent_el.find('li.open').removeClass('open');
    }, animate_time)
  }

  var dropdown_menu = $('#menu-wrap').find('.nav-link');
  
  dropdown_menu.each(function(){
    var _that = this;
    $(_that).on('click', function(e){
      
      if(window_width <= 991) {

        if ($(this).siblings('ul').length > 0 && !$(this).siblings('ul').hasClass('fourth_menu')) {
          e.preventDefault();
          if($(this).parent().hasClass('open')) {
            closeAnimation(this);
          } else {
            openAnimation(this);
          }
        }

      }
    })
  })


  $('#menu-wrap').on('click', '.navbar-toggle', function(){
    var menu_el = $('div.navbar-collapse');
    var menu_el_height = menu_el.height();
    var _this = this;
    if(window_width <= 991) {

      if($(_this).hasClass('collapsed')) {

        $(_this).removeClass('collapsed').addClass('ccollapsing');
        
        menu_el.height(menu_el_height).addClass('ccollapsing').height(0);
  
        setTimeout(function(){
          menu_el.attr('style', '');
          menu_el.removeClass('ccollapsing').removeClass('collapsed');
  
          $(_this).removeClass('ccollapsing');
          $('#menu-wrap').find('li.open').removeClass('open');
  
        }, animate_time)
        
      }else {
        $(_this).addClass('collapsed').addClass('ccollapsing');
  
        menu_el.addClass('ccollapsing').height(menu_el_height);
        
        setTimeout(function(){
          menu_el.attr('style', '');
          menu_el.removeClass('ccollapsing').addClass('collapsed');
  
          $(_this).removeClass('ccollapsing');
  
  
        }, animate_time)
  
      }

    }


  })



  // $("#menu-wrap").on("click", '.first_menu .nav-link', function(event){
  //   if (window_width >= 992) {

  //     var parent_el_pc = $(this).parent();
  //     var dropdown_menu_pc = $(this).siblings('ul.second_menu');

  //     if (dropdown_menu_pc.length > 0) {

  //       event.preventDefault();

  //       if (parent_el_pc.find('.fourth_menu').length > 0) {
  //         parent_el_pc.addClass('multilevel');
  //       }

  //       parent_el_pc.toggleClass('open').siblings('li').removeClass('open');

  //     }
      
  //   }
  // })


  $("#menu-wrap .first_menu .nav-link").hover(function(e){
    if (window_width >= 992) {

      var parent_el_pc = $(this).parent();
      var dropdown_menu_pc = parent_el_pc.children('ul.second_menu');

      if (dropdown_menu_pc.length > 0) {

        if (parent_el_pc.find('.fourth_menu').length > 0) {
          parent_el_pc.addClass('multilevel');
        }

        if (e.type === "mouseover" || e.type === "mouseenter") {
          parent_el_pc.addClass('open').siblings('li').removeClass('open');
        } else {
          parent_el_pc.removeClass('open').siblings('li').removeClass('open');
        }

      }
      
    }
  })

  $("#menu-wrap .first_menu .second_menu").hover(function(e) {
    if (window_width >= 992) {
      if (e.type === "mouseover" || e.type === "mouseenter") {
        $(this).parent().addClass('open');
      } else {
        $(this).parent().removeClass('open');
      }
    }

  })

  $('#menu-wrap .navbar-collapse .navbar-nav .first_menu .second_menu > li.close').on('click', function(){
    $(this).parent().parent().removeClass('open');
  })
  
  init();
  

})(jQuery, 300);