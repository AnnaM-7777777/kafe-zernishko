document.getElementById('btn1').addEventListener('click', function() {
            showSection('section1');
        });

        document.getElementById('btn2').addEventListener('click', function() {
            showSection('section2');
        });

        document.getElementById('btn3').addEventListener('click', function() {
            showSection('section3');
        });

        function showSection(sectionId) {
            // Скрываем все разделы
            var sections = document.getElementsByClassName('hidden');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
            }

            // Показываем выбранный раздел
            document.getElementById(sectionId).style.display = 'grid';

            // Убираем класс active у всех кнопок
            var buttons = document.getElementsByClassName('menu__btn');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }

            // Добавляем класс active текущей кнопке
            document.getElementById('btn' + sectionId.slice(-1)).classList.add('active');
        }

        // При загрузке страницы показываем первый раздел и выделяем первую кнопку
        window.onload = function() {
            showSection('section1');
            document.getElementById('btn1').classList.add('active');
        }