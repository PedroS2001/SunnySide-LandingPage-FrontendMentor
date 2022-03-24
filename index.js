//Para Cuando termine de cargar el HTML completo
const btnMenu = document.getElementById('boton')    //Agarro el menu hamburguesa;

if (btnMenu) {

    btnMenu.addEventListener('click', () => {
        const menuItems = document.getElementById('menu');
        menuItems.classList.toggle('show');
        console.log("click");
    });
}
else {
    console.log("No EXISte");
}

console.log("Cargo");

