const selectThemeMenu = document.querySelector('.selectThemeMenu');
const items = document.querySelectorAll('.selectThemeMenu__item');
const selectThemeMenuBtn = document.querySelector('.selectThemeMenuBtn');
const openSelectThemeBtn = document.querySelector('.openSelectThemeBtn');
let selectTheme = 'patrol';   //Тема по умолчанию

const imagesForTheme = {
    olov: ['image/frozen/7.jpg', 'image/frozen/7.jpg', 'image/frozen/8.gif', 'image/frozen/8.gif',
            'image/frozen/1.png', 'image/frozen/1.png', 'image/frozen/2.jpg', 'image/frozen/2.jpg', 
             'image/frozen/3.jpg', 'image/frozen/3.jpg', 'image/frozen/4.jpg', 'image/frozen/4.jpg',
              'image/frozen/5.jpeg', 'image/frozen/5.jpeg', 'image/frozen/6.jpg', 'image/frozen/6.jpg'],
    mimishki: ['image/mimishki/1.jpg', 'image/mimishki/1.jpg', 'image/mimishki/2.jpg', 'image/mimishki/2.jpg', 
                'image/mimishki/3.jpg', 'image/mimishki/3.jpg', 'image/mimishki/4.jpg', 'image/mimishki/4.jpg',
                  'image/mimishki/5.jpg', 'image/mimishki/5.jpg', 'image/mimishki/6.jpg', 'image/mimishki/6.jpg',
                    'image/mimishki/7.jpg', 'image/mimishki/7.jpg', 'image/mimishki/8.jpg', 'image/mimishki/8.jpg'],
    masha: ['image/masha/1.jpg', 'image/masha/1.jpg', 'image/masha/2.webp', 'image/masha/2.webp', 
             'image/masha/3.jpg', 'image/masha/3.jpg', 'image/masha/4.webp', 'image/masha/4.webp',
              'image/masha/5.jpg', 'image/masha/5.jpg', 'image/masha/6.jpg', 'image/masha/6.jpg',
                'image/masha/7.jpg', 'image/masha/7.jpg', 'image/masha/8.jpg', 'image/masha/8.jpg'],
    patrol: ['image/patrol/1.jpg', 'image/patrol/1.jpg', 'image/patrol/2.jpg', 'image/patrol/2.jpg', 
                'image/patrol/3.jpg', 'image/patrol/3.jpg', 'image/patrol/4.webp', 'image/patrol/4.webp',
                  'image/patrol/5.jpeg', 'image/patrol/5.jpeg', 'image/patrol/6.jpg', 'image/patrol/6.jpg',
                   'image/patrol/7.jpg', 'image/patrol/7.jpg', 'image/patrol/8.png', 'image/patrol/8.png'],
    ladyBag: ['image/ladyBag/1.jpg', 'image/ladyBag/1.jpg', 'image/ladyBag/2.jpg', 'image/ladyBag/2.jpg', 
                'image/ladyBag/3.jpg', 'image/ladyBag/3.jpg', 'image/ladyBag/4.jpg', 'image/ladyBag/4.jpg',
                  'image/ladyBag/5.jpg', 'image/ladyBag/5.jpg', 'image/ladyBag/6.jpg', 'image/ladyBag/6.jpg',
                   'image/ladyBag/7.jpeg', 'image/ladyBag/7.jpeg', 'image/ladyBag/8.jpg', 'image/ladyBag/8.jpg'],
}

for(i=0; i<items.length; i++) {
    items[i].addEventListener('click', function(e) {
        items.forEach( (el) => {    //Добавляем, убираем класс эктив
            el.classList.remove('active');
        });
        e.target.parentNode.classList.add('active');
        selectTheme = e.target.getAttribute('data');
    });
}

selectThemeMenuBtn.onclick = () => {
    selectThemeMenu.style.display = 'none';
    blockMenu.style.display = 'block';
}

checkTheme = () => {    //Вставляет в карточки картинки выбранной темы
    switch (selectTheme) {
        case 'olov':
            for(i=0; i<arrWithItemHtml.length; i++) {
                arrWithItemHtml[i].lastElementChild.src = imagesForTheme.olov[i];
            };
            break;
        case 'mimishki':
            for(i=0; i<arrWithItemHtml.length; i++) {
                arrWithItemHtml[i].lastElementChild.src = imagesForTheme.mimishki[i];
            };
            break; 
        case 'masha':
            for(i=0; i<arrWithItemHtml.length; i++) {
                arrWithItemHtml[i].lastElementChild.src = imagesForTheme.masha[i];
            };
            break;  
        case 'patrol':
            for(i=0; i<arrWithItemHtml.length; i++) {
                arrWithItemHtml[i].lastElementChild.src = imagesForTheme.patrol[i];
            };
            break;
        case 'ladyBag':
            for(i=0; i<arrWithItemHtml.length; i++) {
                arrWithItemHtml[i].lastElementChild.src = imagesForTheme.ladyBag[i];
            };
            break;                 
    }
}

openSelectThemeBtn.onclick = () => {
    blockMenu.style.display = 'none';
    selectThemeMenu.style.display = 'block';
}