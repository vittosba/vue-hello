/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({
    el: '#app',
    data: {
        title: 'Ciao Vue',
        img: 'https://picsum.photos/200/300',
    }
})