
	$(document).ready( function () {

		var textSelectables = document.getElementsByClassName("icon");
		$(".icon").mouseenter(function() {
			for (var i = 0; i < textSelectables.length; i++) {
				var target = textSelectables[i];
				
				if ((target.id).localeCompare(this.id)) {
					console.log(target.id);
					$(target).addClass("negative-grid");
				}
				/*
				if((target.innerText).localeCompare(this.innerText)) {
					//console.log("not alike");
					$(target).addClass("negative-grid");
					//target.dispatchEvent(selectEvent)
				}*/
			}
				
		});

		$(".icon").mouseleave(function() {
			for (var i = 0; i < textSelectables.length; i++) {
				var target = textSelectables[i];
				
				if ((target.id).localeCompare(this.id)) {
					console.log(target.id);
					$(target).removeClass("negative-grid");
				}
				/*
				if((target.innerText).localeCompare(this.innerText)) {
					//console.log("not alike");
					$(target).addClass("negative-grid");
					//target.dispatchEvent(selectEvent)
				}*/
			}
				
		});
		/*
		$(".icon").mouseleave(function() {
			for (var i = 0; i < textSelectables.length; i++) {
				var target = textSelectables[i];
				console.log(target.idTag);
				
				if((target.innerText).localeCompare(this.innerText)) {
					//console.log("not alike");
					$(target).removeClass("negative-grid");
					//target.dispatchEvent(selectEvent)
				}
			}
		})*/

		var menu = false;
		var mySVG = $('svg').drawsvg({ duration: 1200, callback: function () {
			console.log('Done drawing');
			if (!menu) {
				$('#welcome-hello').removeClass('hidden');
				$('#welcome-hello').addClass('animated fadeIn');
			} else {
			}
		}});
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

				console.log('icons clicked');
				$('#welcome-hello').addClass('hidden');

				//$('#about').removeClass('hidden');
				//$('#about').addClass('animated fadeIn');

				menu = !menu;

			} else {



				name = '#' + $(this).attr('id') + '-box';
				console.log('icon ' + name + ' clicked');

				$('.text-box').addClass('shown');
				$('.text-box').removeClass('hidden');


				$(name).addClass('shown');
				$(name).removeClass('hidden');

			}
		});


		$('.x').click( function () {
			$('.text-box').addClass('hidden');
			$('.text-box').removeClass('shown');

			$(name).addClass('hidden');
			$(name).removeClass('shown');

			console.log('x clicked!');
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
