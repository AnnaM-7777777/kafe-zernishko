
document.getElementById('menuButton1').addEventListener('click', function() {
    showSection('section1');
});

document.getElementById('menuButton2').addEventListener('click', function() {
    showSection('section2');
});

document.getElementById('menuButton3').addEventListener('click', function() {
    showSection('section3');
});

function showSection(sectionId) {
    
    let sections = document.getElementsByClassName('hidden'); // Скрываем все разделы
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    document.getElementById(sectionId).style.display = 'grid'; // Показываем выбранный раздел
    
    let buttons = document.getElementsByClassName('menu__btn'); // Убираем класс active-btn у всех кнопок
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-btn');
    }
    
    document.getElementById('menuButton' + sectionId.slice(-1)).classList.add('active-btn'); // Добавляем класс active-btn текущей кнопке
}

window.onload = function() {
    showSection('section1');
    document.getElementById('menuButton1').classList.add('active-btn'); // При загрузке страницы показываем первый раздел и выделяем первую кнопку
}