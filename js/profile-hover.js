function mouseOnCard(e) {        
    $('.profile-pic').transition({ marginRight: "-7%" }, 500, 'ease');   
}

function mouseOffCard(e) {    
    $('.profile-pic').transition({ marginRight: "-12%" }, 500, 'ease');           
}

function mouseOnPics(e) {
    if (e.target !== e.currentTarget) {
        var pics = document.getElementsByClassName('profile-pic');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.zIndex = 0;
        }
        e.target.style.zIndex = 1;
    } 
    e.stopPropagation();
}

var picsParent = document.getElementById('profile-pics');
picsParent.addEventListener('mouseenter', function (e) { mouseOnCard(e) });
picsParent.addEventListener('mouseleave', function (e) { mouseOffCard(e) });
picsParent.addEventListener('mouseover', function (e) { mouseOnPics(e) });