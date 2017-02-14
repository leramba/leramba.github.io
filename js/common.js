$(document).ready(function(){

    var tl = new TimelineMax();
    
    TweenMax.to('.envelope__button', 3, {scale: .9, repeat: -1, yoyo: true});

    $('.envelope__button').on('click', function(){
        tl  
            .to($(this), 1, {rotationY:180, zIndex:-1, transformOrigin:"left 40% -170"})
            .to('.envelope__left', 4, {transformOrigin: "left", rotationY: '-46deg'})
            .to('.envelope__left', .8, {boxShadow: 'none'}, 1)
            .to('.envelope__left, .envelope__right', 1, {opacity: 0}, 4)
            .to('.envelope__right', 3.4, {transformOrigin: "right", rotationY: '+46deg'}, 1.4)
            .to('.envelope__left, .envelope__right', .1 , {display: 'none'})
            .to('.picture', 0, {zIndex: 3})
            contentAnimation();
    });
    function contentAnimation(){
            var tlDelay = new TimelineMax({repeat: -1, repeatDelay: 4, delay: 4});

            TweenMax.to('.picture__cloud-1', 2, {x: +10, repeat: -1, yoyo: true})
            TweenMax.to('.picture__cloud-2', 2, {x: -10, repeat: -1, yoyo: true})
            TweenMax.to('.picture__cloud-3', 2, {x: +10, repeat: -1, yoyo: true})
            TweenMax.to('.picture__cloud-4', 2, {x: +30, repeat: -1, yoyo: true})
            TweenMax.to('.picture__happy-valentine-day', 1, {scale: 0.9, repeat: -1, yoyo: true})
            TweenMax.to('.picture__cloud-small', 4, {bezier:[{x:4, y:4}, {x:0, y:4}, {x:-4, y:4}, {x:0, y:0}], ease:Linear.easeNone , repeat: -1})
            TweenMax.to('.picture__cupidon', 5, {bezier:[{x:-4, y:-4}, {x:0, y:-4}, {x:4, y:-4}, {x:0, y:0}], ease:Linear.easeNone , repeat: -1})
            TweenMax.to('.picture__bird-blue', 11, {bezier:[{x: -300, y:20}, {x:-600, y:-20}, {x: -900, y:20}, {x:-1200, y:-20}, {x:-1560, y:20}], ease:Linear.easeNone , repeat: -1})
            TweenMax.to('.picture__bird-yellow', 13, {bezier:[{x: -300, y:20}, {x:-600, y:-20}, {x: -900, y:20}, {x:-1200, y:-20}, {x:-1560, y:20}], ease:Linear.easeNone , repeat: -1})
            TweenMax.to('.picture__bird-red', 12, {bezier:[{x: 300, y:15}, {x:600, y:-15}, {x: 900, y:15}, {x:1200, y:-15}, {x:1560, y:15}], ease:Linear.easeNone , repeat: -1})
            TweenMax.to('.picture__arrow', 4, {x: -330, y: 310, ease:Linear.easeNone , repeat: -1, repeatDelay: 2})
            TweenMax.to('.picture__flowers, .picture__cat, .picture__heart-eye-2, .picture__heart-eye-3, .picture__heart-eye-4, .picture__bang, .picture__crash, .picture__zyat', 0, {opacity: 0})
            tlDelay
                .to('.picture__hit-img-1', .15, {x:-50})
                .to('.picture__hit-img-2', .15, {x:-90, y: -50})
                .to('.picture__hit-img-3', .15, {x:-130, y: -100})
                .to('.picture__hit-img-4', .15, {x:-100, y: -150})
                .to('.picture__hit-img-5', .15, {x:-50, y: -180})
                .to('.picture__hit-img-6', .15, {y:-140})
                .to('.picture__hit-img-7', .15, {x:50, y: -180})
                .to('.picture__hit-img-8', .15, {x:100, y: -150})
                .to('.picture__hit-img-9', .15, {x:130, y: -100})
                .to('.picture__hit-img-10', .15, {x:90, y: -50})
                .to('.picture__hit-img-11', .15, {x:50})
                .to('.picture__hit-img', .35, {opacity: 0})
           
            var tlSing = new TimelineMax({repeat: -1, delay: 2.5});
           
            tlSing
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-1', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-1', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-1', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-1', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-1', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-1', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-2', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-2', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-2', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-2', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-2', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-2', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-3', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-3', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-3', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-3', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-3', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-3', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-4', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-4', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-4', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-4', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-4', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-4', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-5', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-5', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-5', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-5', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-5', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-5', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-6', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-6', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-6', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-6', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-6', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-6', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-7', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-7', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-7', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-7', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-7', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-7', .6, {opacity: 0, delay: 1.8})

                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-8', .6, {opacity: 1})
                .to('.picture__bird-sing-blue, .picture__bird-sing-text-blue-8', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-8', .6, {opacity: 1})
                .to('.picture__bird-sing-red, .picture__bird-sing-text-red-8', .6, {opacity: 0, delay: 1.8})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-8', .6, {opacity: 1})
                .to('.picture__bird-sing-yellow, .picture__bird-sing-text-yellow-8', .6, {opacity: 0, delay: 1.8})
            
            $('.picture__cloud-4').on('click', function(){
                tl
                    .to('.picture__flowers', 0, {opacity: 1})
                    .from('.picture__flowers', .5, {scale: 6, opacity: 0, ease: Bounce.easeOut})
            });

            $('.picture__cloud-1').on('click', function(){
                tl
                    .to('.picture__cat', 0, {opacity: 1})
                    .staggerFrom('.picture__cat', .3, {height: 0, opacity:0, ease: Back.easeOut}, 0.15)
            });

            $('.picture__cloud-2').on('click', function(){
                tl
                    .staggerTo('.picture__beer', 4.3, {ease: Power0.easeNone, bezier: [{x:395, y:-415}, {x:100, y:-550}, {x:3, y:-460}, {x:-100, y: -550}, {x:-395, y:-415}, {x:0, y:0}]}, -0.2)
            });



            var tl2 = new TimelineMax({paused:true});

                tl2

                    .to('.picture__heart-eye-1', 0, {opacity: 1})
                    .to('.picture__heart-eye-2, .picture__heart-eye-3, .picture__heart-eye-4, .picture__bang, .picture__crash, .picture__zyat', 0, {opacity: 0})
                    .to('.picture__heart', 4, {ease: SlowMo.ease.config(0.5, 0.7, false), rotation: '+=360', bezier: {curviness:0, values: [{x:-460, y:93}, {x:-740, y: 0}, {x:-1010, y:93}, {x:-1300, y:110},
                    {x:-1080, y:420}, {x:-960, y:420}]}})
                     .to('.picture__crash', 0.36, {opacity: 1, scale:1.4}, '-=3.8')
                     .to('.picture__crash', 0.2, {opacity: 0, scale: 0.85}, '-=3.6')
                     .to('.picture__bang', 1, {opacity: 1, scale:1.4}, '-=1.2')
                     .to('.picture__bang', 0.3, {opacity: 0, scale: 0.75}, '-=0.9')
                     .to('.picture__heart-eye-2', 0.3, {opacity: 1}, 'changeFace1')
                     .to('.picture__heart-eye-1', 0.3, {opacity: 0}, 'changeFace1')
                     .to('.picture__heart-eye-3', 0.3, {opacity: 1, delay: .9}, 'changeFace2')
                     .to('.picture__heart-eye-2', 0.3, {opacity: 0, delay: .9}, 'changeFace2')
                     .to('.picture__heart-eye-4', 0.3, {opacity: 1, delay: .9}, 'changeFace3')
                     .to('.picture__heart-eye-3', 0.3, {opacity: 0, delay: .9}, 'changeFace3')
                     .to('.picture__heart-eye-3', 0.3, {opacity: 1, delay: .9}, 'changeFace4')
                     .to('.picture__heart-eye-4', 0.3, {opacity: 0, delay: .9}, 'changeFace4')
                     .to('.picture__zyat', 0.3, {opacity: 1, delay: .9}, 'changeFace4')
                     

            $('.picture__cloud-3').on('click', function(){
                tl2.restart();
            });
    };

})
