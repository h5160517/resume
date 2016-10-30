		var onloads = document.querySelector('#onload');
		var imgPath = ["img/首页img/title.jpg", "img/首页img/cat.jpg", "img/首页img/mail.jpg", "img/首页img/facebook.jpg", "img/首页img/youtube.jpg", "img/首页img/linkedln.jpg", 
		"img/首页img/twitter.jpg", "img/首页img/mail_h.jpg", "img/首页img/facebook_h.jpg", "img/首页img/youtube_h.jpg", "img/首页img/linkedln_h.jpg", "img/首页img/twitter_h.jpg"];
		$(function(){
			$("div:not(#onload)").css({display: 'none'});
			loadImg();
		});
		

		function loadImg() {
			for(var i = 0; i < imgPath.length; i++) {
				var aImg = new Image();
				aImg.src = imgPath[i];
				var arrImg = [];
				aImg.onload = function() {
					var sliderWidth = document.documentElement.clientWidth + document.body.clientWidth;
					arrImg.push(this);
					var onload = Math.round((arrImg.length / imgPath.length) * 100);
					// onloads.innerHTML = onload + '%';
					$("#onload h1").html(onload + "%");
					$("#onlaod hr").css("width",onload + "%");
					if(arrImg.length == imgPath.length) {
						$("#onload").fadeOut(1000, function() {
							$("div:not(#onload,#fixtitle,#audio)").css({
								display: 'block'
							});
						});

					}
				}
			}
		}