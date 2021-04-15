const toggleButton = document.getElementsByClassName('button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var example = ['APenelope McNiel', 'Yarik Palmisano', 'Morteza Mottershead', 'Bibiana Bauers', 'Estève González' , 'Sibusiso Blackwood', 'Wina Seppä' , 'Cristiana Bleier', 'Borislav Dobos', 'Gunnvor Zupan'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 8000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }
            
          }
          