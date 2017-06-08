$(function () {

    nav();  //导航栏(筋斗云)

    banner();   //轮播图




























    function banner() { //轮播图
        bannerSize();
        var angle = -90;
        setInterval(function () {
            $('.banner>ul>li').css('transform', 'rotateX(' + angle + 'deg)');
            angle -= 90;
        }, 5000)
        window.onresize = function () {
            bannerSize();
        }
        function bannerSize() { //偏移量计算
            var lis = $('.banner>ul>li');
            var liWidth = parseInt($('.banner>ul>li').css('width'));
            var imgHidden = 1920 / 2 - (liWidth * 2 + liWidth / 2);
            for (var i = 0; i < lis.length; i++) {
                var bs = lis[i].children;
                for (var j = 0; j < bs.length; j++) {
                    bs[j].style.backgroundPosition = -(imgHidden + i * liWidth) + 'px';
                }
            }
        }
    }

    function nav() { //筋斗云
        //$('.cloud').animate({left:'140px'});
        var posi = 0;
        $('.navBar > li').each(function (i, e) {
            var left = null;
            $('.navBar > li')[0].style.color = '#fff';
            e.onmouseover = function () {
                if (i * $('.navBar > li').width() + 'px' === $('.cloud').css('left')) {
                    return;
                }
                $('.navBar > li').css({
                    color: '#000'
                });
                left = i * $('.navBar > li').width();
                $('.cloud').stop();
                $('.cloud').animate({
                    left: left
                }, 100, function () {
                    e.style.color = '#fff';
                });
            }
            e.onmouseout = function () {
                if (i * $('.navBar > li').width() === posi) {
                    return;
                }
                e.style.color = '#000';
                $('.cloud').stop();
                $('.cloud').animate({
                    left: posi + 'px'
                }, 100, function () {
                    for (var i = 0; i < $('.navBar > li').length; i++) {
                        if (i * $('.navBar > li').width() + 'px' === $('.cloud').css('left')) {
                            $('.navBar > li')[i].style.color = '#fff';
                        }
                    }
                });
            }
            e.onclick = function () {
                posi = i * $('.navBar > li').width();
            }
        })
    }









})