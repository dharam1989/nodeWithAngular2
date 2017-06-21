$(document).ready(function(){
    /*=========== Scroll height count ===========*/
    $(window).resize(function(){
       var height = $(this).height() - $("header").height() - $("footer").height()  
       $('#sc_row').height(height-102);
       $('#sc_row').css('overflow-y','scroll');
    })
    $(window).resize();
    /*=========== Auto content scroll ===========*/
    var div = $('#sc_row');
    setInterval(function(){
        var pos = div.scrollTop();
        div.scrollTop(pos + 1);
    }, 100)
    /*=========== Nice scroller ===========*/
    var nice = $("html").niceScroll();
    $(".cus_scroll").niceScroll({cursorborder:"",cursorcolor:"#301e29"});
    /*=========== Modal in out auto ===========*/
    window.setInterval(function(){
        $('#alert_modal').modal();
    }, 50000);
    window.setInterval(function () {
        $('#alert_modal').modal('hide');
    }, 30000);
    /*=========== Footer ===========*/
});