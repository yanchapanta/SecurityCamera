const c=document.getElementById('miContent')
const b=document.getElementById('btnLoad')
alert('aler')
console.log(c)
console.log(b)
b.addEventListener('click',event=>{
    const xhttp=new XMLHttpRequest()
    console.log(xhttp.readyState);
    xhttp.open('GET','./data.html',true)

    xhttp.addEventListener('load',e=>{
        console.log(e.target);
        c.innerHTML = e.target.responseText
    })
//realize la peticion
    xhttp.send()

})