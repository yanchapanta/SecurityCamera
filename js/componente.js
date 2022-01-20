(()=>{

	// const quoteSliders=document.querySelectorAll('.quoteSliders .quoteSlider');
	// console.log(quoteSliders.length);
	const moveSlider=document.querySelector('.quoteSliders');
	
	let listaNumeroSlider=0;
	window.addEventListener('load',()=>{
		
	})
	console.log('lista slider: '+listaNumeroSlider);

	

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
	botonSiguiente.addEventListener('click',(e)=>{
		// console.log('Aumentar: '+aumentarSlider)
		
		elegirSlider(aumentarSlider)


		if (aumentarSlider==4) {
			aumentarSlider = 0;			
		}

		aumentarSlider++;
	})



})();
