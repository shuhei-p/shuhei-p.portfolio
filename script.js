$(function() {

    
    
    //Dropmenuのアニメーションのコード開始
    $('#dropdown-item1').click(function(){

        var position = 900;
        var speed = 600;

        $('html,body').animate({scrollTop:position},speed);
    })
    
    $('#dropdown-item2').click(function(){

        var position = 1800;
        var speed = 600;

        $('html,body').animate({scrollTop:position},speed);
    })

    $('#dropdown-item3').click(function(){

        var position = 2700;
        var speed = 600;

        $('html,body').animate({scrollTop:position},speed);
    })

    $('#dropdown-item4').click(function(){

        var position = 4650;
        var speed = 600;

        $('html,body').animate({scrollTop:position},speed);
    })
    //終了

    
    var windowheight=$(window).height();//ウインドウ高さ取得

    //スクロールしてフェードイン
    //$(window).scroll(function(){

        //var scroll=$(window).scrollTop();//スクロール位置の取得

        //$('.page2').each(function(){
            //var elempos = 856;//フェードイン開始位置
            //if(scroll > elempos -windowheight +100){//フェードイン要素の開始位置ーウインドウの高さ＋100
                
                //$('#page2').fadeIn(3000);
            //}
        //})
    //})

    $(window).scroll(function(){

        var scroll=$(window).scrollTop();//スクロール位置の取得

        $('.page3').each(function(){
            var elempos = 1500;//フェードイン開始位置
            if(scroll > elempos - windowheight +100){//フェードイン要素の開始位置ーウインドウの高さ＋100
                $('#page3').fadeIn(3000);
            }
        })
    })

    $(window).scroll(function(){

        var scroll=$(window).scrollTop();//スクロール位置の取得

        $('.page4').each(function(){
            var elempos = 3000;//フェードイン開始位置
            if(scroll > elempos - windowheight +100){//フェードイン要素の開始位置ーウインドウの高さ＋100
                $('#page4').fadeIn(3000);
            }
        })
    })
    
    //page2 切り替え
    var current=1;
    var next=2;

    var max_count=2;

    $(function(){
    var timer;
    timer=window.setInterval(fadeinout,7000);
    });

    function fadeinout(){
    $("#page2-"+next).fadeIn(2000);
    $("#page2-"+current).fadeOut(0);

    current=next;
    next++;
    if(next > max_count){
    next=1;
    }
    }

    var windowweight=$(window).width();
    console.log(windowweight);

    

});