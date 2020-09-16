const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contenido =document.querySelectorAll('.tabs-content-item');

for (let i =0; i<contenido.length; i++){
    contenido[i].classList.add('js_content_hidden');
}

contenido[0].classList.remove('js_content_hidden');

enlaces[0].classList.add('js_active');

for(let i = 0; i<enlaces.length; i++){
    enlaces[i].addEventListener('click', (event)=>{
        event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);

    for (let i= 0; i < contenido.length; i++) {
        contenido[i].classList.add('js_content_hidden');
        if (contenido[i].getAttribute('id')==id) {
            contenido[i].classList.remove('js_content_hidden');
            }
        }
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].classList.remove('js_active');
    }
    event.currentTarget.classList.add('js_active');
    });
}