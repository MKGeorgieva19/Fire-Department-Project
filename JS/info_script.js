const toggleButton = document.getElementsByClassName('button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

var example = ['Красимир Стоянов', 'Иван Костадинов', 'Юлиян Филипов', 'Андрей Лилов', 'Христо Колев', 'Чавдар Тръстиков', 'Джон Маклейн'];

textSequence(0);

function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
        }, 8000); // 8 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }
}