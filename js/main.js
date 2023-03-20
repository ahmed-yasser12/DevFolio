//
$(window).scroll(function(){
  let scrollUser=$(window).scrollTop();
  let about =$("#about").offset().top;
  if (scrollUser > about) {
    $(".navbar ").css('backgroundColor','rgba(0,0,0,0.4)')
    }
    else{
        $(".navbar ").css('backgroundColor','transparent')
    }
});

$('a').click(function (e) {
    let href=$(e.target).attr('href');
    let hrefTop=$(href).offset().top;
    $('html,body').animate({scrollTop:hrefTop},2000);
})

