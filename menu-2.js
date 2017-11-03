
    jQuery(document).ready(function(){

    $(document).on("click touchstart", "html", function () {
    li = $("div.right-bg")['find']('li.level0');
    li['children']('ul.chield, div.nav_block').removeClass("shown-sub");
    i = 0;
    });

       
        
        
        
        
    //run navigation without delays and with default id="#nav"
    //mainNav();

    //run navigation with delays
 //   mainNav("nav", {"show_delay":"200","hide_delay":"200"});
   /* Mobile navigation
    -------------------------------------------------------------- */
    
    menuTitle = "Menu";
    
    var navList = jQuery('ul#nav').clone();
    var etOpener = '<span class="open-child">(open)</span>';
    navList.removeAttr('id').removeClass('menu').addClass('et-mobile-menu');
    navList.find('.static-nav').remove();
    
    navList.before('<span class="et-menu-title">' + menuTitle + '</span>');
    
    
    navList.find('li:has(ul)',this).each(function() {
        jQuery(this).prepend(etOpener);
    })
 
 
    
    navList.find('.open-child').toggle(function(){
         jQuery(this).parent().addClass('over').children('ul').slideDown(10);
//   jQuery(this).parent().addClass('over').next('div').find('div ul').slideDown(200);
//                jQuery(this).parent().addClass('over').find('.fullwidth').find('div ul').slideDown(100);
    },function(){
         jQuery(this).parent().removeClass('over').children('ul').slideUp(10);
//            jQuery(this).parent().removeClass('over').find('.fullwidth').find('div ul').slideUp(100);
 
    });
    
    
    
    jQuery('ul#nav').after(navList).after('<span class="et-menu-title">' + menuTitle + '</span>');

//    jQuery('ul#nav').after(navList).after('<span class="et-menu-title">' + menuTitle + '</span>');
  
//    jQuery('ul#nav').after(navList);
    
    jQuery('.et-menu-title').toggle(function(){
        jQuery(this).next().slideDown(10);
    },function(){
        jQuery(this).next().slideUp(10);
    });
    
});
