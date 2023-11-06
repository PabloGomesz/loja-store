const navbar = document.querySelector('.navbar')
const menuButton = document.querySelector('.menu-button')


menuButton.addEventListener('click', () =>{
    navbar.classList.toggle('show-menu')
})


function escrevendoLetra() {
    function ativaletra(seletor) {
        const elementos = document.querySelectorAll(seletor);
        elementos.forEach(elemento => {
            const texto = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            texto.forEach((letra, i) => {
                setTimeout(() => {
                    elemento.innerHTML += letra;
                }, 75 * i);
            });
        });
    }

    const titulos = ['.digitando', '.digitando2'];
    titulos.forEach(seletor => {
        ativaletra(seletor);
    });
}

escrevendoLetra();