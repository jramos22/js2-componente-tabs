function evento1(event) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);

    for (let i= 0; i < contenido.length; i++) {
        contenido[i].style.display='none';
        enlaces[i].style.backgroundColor ='#eee';
        enlaces[i].style.borderBottomColor ='#999';

        if (contenido[i].getAttribute('id')==id) {
            contenido[i].style.display ='block';
            enlaces[i].style.backgroundColor ='white';
            enlaces[i].style.borderBottomColor ='white';
        }
        
    }
}
const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contenido =document.querySelectorAll('.tabs-content-item');

for (let i =0; i<contenido.length; i++){
    contenido[i].style.display= 'none';
}

contenido[0].style.display='block';

for(let i = 0; i<enlaces.length; i++){
    enlaces[i].addEventListener('click', evento1);
}