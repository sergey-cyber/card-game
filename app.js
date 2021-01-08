
let pole = document.querySelector(".gamePole");
let card = document.querySelectorAll(".card");
let btnRetry = document.querySelector(".btnRetry");
let score = document.querySelector(".score");
let menu = document.querySelector(".menuList");
let menuOpt = document.querySelector(".menuOpt");
let optSub = document.querySelectorAll(".OptSub");
let blockMenu = document.querySelector(".blockMenu");
let front = document.querySelector(".front");
let back = document.querySelector(".back");

let complexity = "easy"; //Сложность 
let schetClick = 0;//для счета нажатия на кнопку сложности
let scoreReslt = 0;
let arrData = [];
let arrItem =[];
let schet = 0;
let scoreStroke = "Попытки: ";

/////////////Перемешиваем итемы в начале игры и добавляем их в  поле
let arrWithItemHtml = []; //Массив в который спушены удаленные элементы

let mixItem = function(z){ 
	arrWithItemHtml = [];
	for(x=0; x<card.length-z; x++) {
		if(complexity == "medium"){
			card[x].classList.add("forMedium");
		} if(complexity == "hard"){
			card[x].classList.add("forHard");
		}
		arrWithItemHtml.push(card[x]);
	}
	for(u=0; u<card.length; u++) {
		card[u].remove();
	}
		
	function shuffle(array) {	//функция перемешивает любой массив
	  return array.sort(() => Math.random() - 0.5); 
	}
	checkTheme();
	shuffle(arrWithItemHtml);	//перемешиваем спушенные елементы
	
	for(j=0;j<arrWithItemHtml.length;j++) {
		pole.append(arrWithItemHtml[j]);//цикл добавляет в поле елементы перемешанного массива
	}	

}
mixItem();
///////////////
//Обработчик кликов меню
menu.addEventListener("click", function(e){
	if(e.target.className == "menuOpt") {	
	//Отслеживает нажатие на кнопку сложность и выдвигает меню сложности
		schetClick++;
		for(i=0; i<optSub.length; i++) {
			if(schetClick % 2 != 0) {
				optSub[i].style.display = "block";
			} else {
				optSub[i].style.display = "none";
			}
		}
	}

	//Устанавливаем сложность нажатием на кнопки 
	if(e.target.getAttribute("data") == "easy") {
		complexity = "easy";
		e.target.style.backgroundColor = "red";
		optSub[1].style.backgroundColor = "green";
		optSub[2].style.backgroundColor = "green";
	} else if (e.target.getAttribute("data") == "medium") {
		optSub[0].style.backgroundColor = "green";
		optSub[2].style.backgroundColor = "green";
		complexity = "medium";
		e.target.style.backgroundColor = "red";
	} else if (e.target.getAttribute("data") == "hard") {
		complexity = "hard";
		e.target.style.backgroundColor = "red";
		optSub[0].style.backgroundColor = "green";
		optSub[1].style.backgroundColor = "green";
	} 
	//Условия кнопки Старт. Запускает функцию mixItem в зависимости от выбранного уровня сложности
	if(e.target.className == "menuStart") {
		if(complexity == "easy") {
			mixItem(8);
		} else if(complexity == "medium") {
			mixItem(4);
		} else if(complexity == "hard") {
			mixItem(0);
		}
		blockMenu.style.display = "none";
		setTimeout( () => {
			for(i=0; i<card.length; i++) {
				card[i].style.transform = 'rotateY(180deg)';
			}
		}, 2000);
	}
});

let ShowRetry = function() {	//Показывает кнопку Начать Заново если все карточки открыты
	btnRetry.style = "display: block";
}
score.innerText = scoreStroke;

for(i=0; i<card.length; i++) {//Вешает клик на все карточки

card[i].addEventListener("click", function(e){
	//Обработчик событий кликов по карточке(находится в цикле)
	if(this.style.transform == "rotateY(0deg)") {
		return;
	}
	this.style = "transform: rotateY(0deg)";
	arrData.push(this.getAttribute("data"));
	arrItem.push(this);
	if(arrData.length > 1) {
		scoreReslt++;
		score.innerText = scoreStroke + scoreReslt;
		if(arrData[0] == arrData[1]) {
			arrData = [];
			arrItem =[];
			schet++;	
		} else {
			setTimeout(function(){
				arrItem[0].style = "transform: rotateY(180deg)";
				arrItem[1].style = "transform: rotateY(180deg)";
				arrData = [];
				arrItem =[];
			},500);
		}
	} 	//Условия появления кнопки начать заново в зависимости от выбранной сложности
		if(complexity == "easy") {
			if(schet > 3){
				ShowRetry();
				schet = 0;
			}
		} else if(complexity == "medium") {
			if(schet > 5){
				ShowRetry();
				schet = 0;
			}
		} else if(complexity == "hard") {
			if(schet > 7){
				ShowRetry();
				schet = 0;
			}
		}
	});
}

btnRetry.onclick = function(){
	//Обработчик событий кнопки Начать снова
	if(complexity == "easy") {
		mixItem(8);
	} else if(complexity == "medium") {
		mixItem(4);
	} else if(complexity == "hard") {
		mixItem(0);
	}
	setTimeout( () => {
		for(i=0; i<card.length; i++) {
			card[i].style.transform = 'rotateY(180deg)';
		}
	}, 2000);
	this.style.display = "none";
	scoreReslt = 0;
	score.innerText = scoreStroke + scoreReslt;
	console.log("1");
}



















