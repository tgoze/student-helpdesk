var imgCounter = 1;

$(document).ready(function() {
	$("#button").click(function() {
		if ($("#scaled-text").hasClass("scale-out")) {
			$("#scaled-text").removeClass("scale-out");
		} else {
			$("#scaled-text").addClass("scale-out");
		}
	});
	
	document.getElementById("banner").addEventListener("wheel", function(e) {
		var yPos = e.wheelDeltaY;
		if (yPos <= -120) {
			switch(imgCounter) {
				case 1:
					Materialize.fadeInImage('#image-test1');
					document.getElementById("image-test1").visibility = 'hidden';
					imgCounter++;
					break;
				case 2:
					Materialize.fadeInImage('#image-test2');
					document.getElementById("image-test2").visibility = 'hidden';
					imgCounter++;
					break;
				case 3:
					Materialize.fadeInImage('#image-test3');					
					document.getElementById("image-test3").visibility = 'hidden';
					imgCounter++;
					break;
				default:
					document.body.style.overflow = 'scroll';
			}
		}
		document.getElementById("fixedWindow").innerHTML = yPos;
	});
	
});

function postScroll() {
	document.getElementById("fixedWindow").innerHTML = window.scrollY;
}

function mouseOnBanner() {
	if (imgCounter < 3) {
		document.body.style.overflow = 'hidden';
	}
}

function mouseOffBanner() {
	document.body.style.overflow = 'scroll';
}

/*<div id="banner" onmouseover="mouseOnBanner()" onmouseout="mouseOffBanner()">
	<div class="section row">
		<div class="col s12 center-align">
			<div class="promo-images">
				<img id="image-test1" class="responsive-img" src="pics\promo.png">
				<img id="image-test2" class="responsive-img" src="pics\promo2.png">
				<img id="image-test3" class="responsive-img" src="pics\promo3.png">
			</div>
			<h4 id="scaled-text" class="scale-transition scale-out">Get Started</h4>

			<a class="btn" id="button">Click Me</a>
			<p id="testing"></p>
		</div>
	</div>
</div>*/