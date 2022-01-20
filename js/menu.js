(()=>{
    const c=document.getElementById('grid-container')


let url1='../components/menu.html';
let url2='../components/carousel.html';
let url3='../components/about.html';
let url4='../components/products.html';
let url5='../components/service.html';
let url6='../components/quote.html';
let url7='../components/footer.html';

window.addEventListener('load',event=>{
    function cargarPage(url){
        const xhttp=new XMLHttpRequest()
        xhttp.open('GET',url,true)
    
        xhttp.addEventListener('load',e=>{
            c.innerHTML += e.target.responseText
        })
        xhttp.send()    
    }

    const ejecutarAsync=async   ()=> {
        console.log('calling');
        const result1 = await cargarPage(url1)
        result1
        const result2= await cargarPage(url2);
        result2
        const result3= await cargarPage(url3);
        result3
        const result4= await cargarPage(url4);
        result4
        const result5= await cargarPage(url5);
        result5
        const result6= await cargarPage(url6);
        result6
        const result7= await cargarPage(url7);
        result7
        // expected output: "resolved"
      }
      
      ejecutarAsync();
    
   
})
})();