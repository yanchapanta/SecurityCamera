
setTimeout(() => {
	console.log('iniciando set');
	
	(()=>{
		console.log('iniciando dos');
	
		// const quoteSliders=document.querySelectorAll('.quoteSliders .quoteSlider');
		// console.log(quoteSliders.length);
		const moveSlider=document.querySelector('.quote-sliders');
		
		let listaNumeroSlider=0;
		window.addEventListener('load',()=>{
			
		})
		console.log('lista slider hola: '+listaNumeroSlider);
	
		
	
		function elegirSlider(nSlider=1){
			let resultadoMovi='transform: translateX(0%);';
			if (nSlider=== 1) {
				resultadoMovi='transform: translateX(0%);';
				
			}else if (nSlider===2) {
				resultadoMovi='transform: translateX(-25%);';
				
			}else if (nSlider===3) {
				resultadoMovi='transform: translateX(-50%);';
				
			}else if (nSlider===4) {
				resultadoMovi='transform: translateX(-75%);';
				
			}
			return moveSlider.style.cssText=resultadoMovi;
		}
		
	
		
		const botonSiguiente=document.querySelector('.boton-siguiente');
		let aumentarSlider=1;
		console.log('boton---'+botonSiguiente);
		botonSiguiente.addEventListener('click',(e)=>{
			// console.log('Aumentar: '+aumentarSlider)
			
			elegirSlider(aumentarSlider)
	
	
			if (aumentarSlider==4) {
				aumentarSlider = 0;			
			}
	
			aumentarSlider++;
		})
	
	
	
	})();
	
	
	
	
	
	
	
	
	 ((c, d) => {
		 let nSlides = document.getElementById('nSlides');
		 // let less = d.getElementById('less');
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

	 /* ********** ContactForm ********** */
((d) => {
	const $form = d.querySelector(".contact-form"),
	  $loader = d.querySelector(".contact-form-loader"),
	  $response = d.querySelector(".contact-form-response");
  
	$form.addEventListener("submit", (e) => {
	  e.preventDefault();
	  $loader.classList.remove("none");
	  fetch("https://formsubmit.co/ajax/your@email.com", {
		method: "POST",
		body: new FormData(e.target),
	  })
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((json) => {
		  console.log(json);
		  location.hash = "#gracias";
		  $form.reset();
		})
		.catch((err) => {
		  console.log(err);
		  let message =
			err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
		  $response.querySelector(
			"h3"
		  ).innerHTML = `Error ${err.status}: ${message}`;
		})
		.finally(() => {
		  $loader.classList.add("none");
		  setTimeout(() => {
			location.hash = "#close";
		  }, 3000);
		});
	});
  })(document);

}, 3000);
