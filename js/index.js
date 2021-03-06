$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素
      swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
  })
  $('.musicControl').click(function(){
    if(audio.paused){
      audio.play();
      $(this).find(".musicBtn").addClass("btnAni");
      $(this).find(".music_gif").css('background',"url(./img/music_c.gif) no-repeat center center");
    }else{
      audio.pause();
      $(this).find(".musicBtn").removeClass("btnAni");
      $(this).find(".music_gif").css('background',"0");
    }
  })
})
