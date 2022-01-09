((c, d) => {
	let nSlides = document.getElementById('nSlides');

	let less = d.getElementById('less');

	less.addEventListener('click', (e) => {
		let radio2 = document.querySelectorAll(
			'input[type="radio"][name="slides"]:checked'
		);
		
		c.log(radio2);
		radio2.forEach((element) => {
			if (element.id == 'slide-1') {
				c.log('slide/1');
				element.id = 'slide-4';
			} else if (element.id == 'slide-2') {
				element.id = 'slide-1';
				c.log('slide/1');
			} else if (element.id == 'slide-3') {
				element.id = 'slide-2';
				c.log('slide/2');
			} else if (element.id == 'slide-4') {
				element.id = 'slide-3';
				c.log('slide/3');
			}
		});
	});

	let must = d.getElementById('must');

    must.addEventListener('click', (e) => {
		let radio2 = document.querySelectorAll(
			'input[type="radio"][name="slides"]:checked'
		);
		
		c.log(radio2);
		radio2.forEach((element) => {
			if (element.id == 'slide-1') {
				c.log('slide/2');
				element.id = 'slide-2';
			} else if (element.id == 'slide-2') {
				element.id = 'slide-3';
				c.log('slide/3');
			} else if (element.id == 'slide-3') {
				element.id = 'slide-4';
				c.log('slide/4');
			} else if (element.id == 'slide-4') {
				element.id = 'slide-1';
				c.log('slide/1');
			}
		});
	});



	nSlides.addEventListener('click', function (event) {
		if (event.target && event.target.matches("input[type='radio']")) {
			// do something here ...
			c.log(event.target.id);
		}
	});
})(console, document);
