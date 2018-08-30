

	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-119526242-1');


	$(document).ready( function () {

		var textSelectables = document.getElementsByClassName("icon");
		$(".icon, #words").mouseenter(function() {
			for (var i = 0; i < textSelectables.length; i++) {
				var target = textSelectables[i];

				if ((target.id).localeCompare(this.id)) {
					$(target).addClass("negative-grid");
				}
			}
		});

		$(".icon, #words").mouseleave(function() {
			for (var i = 0; i < textSelectables.length; i++) {
				var target = textSelectables[i];

				if ((target.id).localeCompare(this.id)) {
					$(target).removeClass("negative-grid");
				}
			}

		});

		var menu = false;
		var mySVG = $('svg').drawsvg({ duration: 1200, callback: function () {
			console.log('Done drawing');
			if (!menu) {
				$('#welcome-hello').removeClass('hidden');
				$('#welcome-hello').addClass('animated fadeIn');
				$('#words').addClass('hidden');
			} else {
			}
		}});

		//$('svg').css({"opacity":"1"});
		$('svg').addClass("grid");
		mySVG.drawsvg('animate');

		var name='';

		$('.icon, #about').click ( function () {

			if (!menu) {


				$('#about').attr("class", "drawsvg-initialized start icon grid col-logo");


				$('#egg').attr("class", "drawsvg-initialized start icon grid col-1");
				$('#co').attr("class", "drawsvg-initialized start icon grid col-2");
				$('#tle').attr("class", "drawsvg-initialized start icon grid col-3");
				$('#vinci').attr("class", "drawsvg-initialized start icon grid col-4");
				$('#bredcrumb').attr("class", "drawsvg-initialized start icon grid col-5");

				$('#windows').attr("class", "drawsvg-initialized start icon grid col-6");
				$('#paint').attr("class", "drawsvg-initialized start icon grid col-7");
				$('#funk').attr("class", "drawsvg-initialized start icon grid col-8");
				$('#code').attr("class", "drawsvg-initialized start icon grid col-9");
				$('#cliq').attr("class", "drawsvg-initialized start icon grid col-10");

				$('#welcome-hello').addClass('hidden');

				$('#words').removeClass('hidden');
				$('#words').addClass('animated fadeIn');

				menu = !menu;

			} else {

				name = '#' + $(this).attr('id') + '-box';

				$('.text-box').addClass('shown');
				$('.text-box').removeClass('hidden');

				$(name).addClass('shown');
				$(name).removeClass('hidden');

				var xS = document.getElementsByClassName('nav-icon4');
				for (var i = 0; i < xS.length; i++) {
					$(xS[i]).removeClass('open');
				}

			}
		});


		$('.x').click( function () {
			$('.text-box').addClass('hidden');
			$('.text-box').removeClass('shown');

			$(name).addClass('hidden');
			$(name).removeClass('shown');

			console.log('x clicked!');
		});

		$('.nav-icon4').click(function(){
			$('.text-box').addClass('hidden');
			$('.text-box').removeClass('shown');

			$(name).addClass('hidden');
			$(name).removeClass('shown');

			$(this).toggleClass('open');
		});

		$('.scroll-hide').click( function() {
			console.log('pull out gallery!');
			var boxName = '.' + $(this).attr('id') + '-gallery';
			console.log('box name is ' + boxName);
			$(this).removeClass('gallery-hidden');
			$(this).removeClass('scroll-inactive');
			$(this).addClass('gallery-shown');
		});


	});
