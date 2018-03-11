$(document).ready(function () {
    var eleToAnimate = document.getElementById("load-animation");
    var messages = ["Need help with your computer?",
                    "Fix it with the student's helpdesk!"];

    /* A recursive IIFE that executes for each message
    and then executes a final function that will "minimize"
    the animation pane. */
    var counter = 0;
    (function panMessages() {
        if (counter < messages.length) {
            $(eleToAnimate).text(messages[counter]);                        
            eleToAnimate.style.marginRight = ($('#banner').width() - eleToAnimate.offsetWidth) + 'px';
            counter++;                     
        
            var posEnd = -($('#banner').width() - eleToAnimate.offsetWidth);
            var styleBeg = { marginRight: 0, fontSize: "24px", opacity: 1 };
            var styleEnd = { marginRight: posEnd, fontSize: "16px", opacity: 0 };

            $(eleToAnimate).transition(styleBeg, 1000);
            $(eleToAnimate).delay(2000);
            $(eleToAnimate).transition(styleEnd, 1000, function () { panMessages() });
        } else if (counter == messages.length) {
            $(eleToAnimate).text("Have us take care of it!");
            eleToAnimate.style.marginRight = ($('#banner').width() - eleToAnimate.offsetWidth) + 'px';
            $('.opening-msg').transition({ opacity: 1 }, 1000);
            $(eleToAnimate).transition({ marginRight: 0, fontSize: "30px", opacity: 1 }, 1000);
        }
    })();

    $('.modal').modal();
    $('.tooltipped').tooltip();
});

//GreenSock animation...
//$(eletoanimate).text(messages[0]);
//var posbeg = ($('header').width() / 2) - eletoanimate.offsetwidth;
//tweenmax.to(eletoanimate, 2, { left: posbeg, opacity: 1, ease:elastic.easeout });

// Pure JavaScript animation...
/*
var elem = document.getElementById("animate");
//var pos = 0;
var id = setInterval(frame, 5);
function frame() {
    if (pos == (window.innerWidth / 2) - (elem.offsetWidth / 2)) {
        clearInterval(id);
    } else {
        pos+=20;
        //elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}*/
