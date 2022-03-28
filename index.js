//Para Cuando termine de cargar el HTML completo
const btnMenu = document.getElementById('boton')    //Agarro el menu hamburguesa;
const menuItems = document.getElementById('menu');

if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        menuItems.classList.toggle('show');
        // console.log(window.innerWidth);
    });
}

window.onresize = () =>{
    if(window.innerWidth > 764)
    {
        menuItems.classList.remove('show');
        // console.log("ADS");
    }
}
