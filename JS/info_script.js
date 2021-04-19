var example = ['Красимир Стоянов', 'Иван Костадинов', 'Юлиян Филипов', 'Андрей Лилов', 'Христо Колев' , 'Чавдар Тръстиков', 'Джон Маклейн'];

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
          