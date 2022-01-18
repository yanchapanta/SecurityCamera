((c, d) => {
	let nSlides = document.getElementById('nSlides');

	let less = d.getElementById('less');

	let radio2 = document.querySelectorAll(
		'input[type="radio"][name="slides"]:checked'
	);
	less.addEventListener('click', (e) => {
		
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
	let numero=1;
	setInterval(() => {
		if (numero==5) {
			numero=1;
			return;
		}

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



		console.log('numero'+numero)
		numero++;
	}, 10000);



		




})(console, document);
