
      //这是关于title的中央部分 布局动画设定
      $('.tlebox').eq(0).find('.tlediv1').fadeTo(800,0.5);
      $('.tlebox').eq(1).find('.tlediv1').delay(500).fadeTo(800,0.5);
      $('.tlebox').eq(2).find('.tlediv1').delay(1000).fadeTo(800,0.5);
      $('.tlebox').eq(3).find('.tlediv1').delay(1500).fadeTo(800,0.5);
      //这是关于title的中央部分 移入移出动画设定
      $('.tlebox').mouseover(function(){
        $(this).find('.tlediv1').css({"z-index":2,transform:"scale(1.15)",opacity:1});
        $(this).find('.tlediv1').addClass('border');
        $(this).next().find('.tlediv1').css({transform:"rotate("+90+"deg)"},1000);
        $(this).prev().find('.tlediv1').css({transform:"rotateY("+180+"deg)"},1000);
        $(this).find('#tlespan').css({display:"block"});
        $(this).find('.tlespan1').css({display:"block"});
        $(this).find('#audio').css({display:"block"});
      })
      $('.tlebox').mouseout(function(){
        $('.tlebox div').css({"z-index":1,transform:"scale(1)",opacity:0.5});
        $('.tlebox div').removeClass('border');
        $('.tlebox div').css({transform:"rotateY("+0+"deg) rotateY("+0+"deg)"});
        $('.tlebox div').find('#tlespan').css({display:"none"});
        $('.tlebox div').find('.tlespan1').css({display:"none"});
        $('#audio').css({display:"none"});
      })
      