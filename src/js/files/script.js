// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener("load", windowLoad);

function windowLoad() {
	const counters = document.querySelectorAll('.section-3__percent');
	const ranges = document.querySelectorAll('.section-3__range span');


	// Создаем новый экземпляр MutationObserver
	let observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (!mutation.target.parentElement.classList.contains('_watcher-view')) {
				ranges[mutation.target.dataset.sectionRange].style.width = `${0}%`
			} else {
				ranges[mutation.target.dataset.sectionRange].style.width = `${mutation.target.innerHTML}%`
			}

		});
	});

	// Настройка объекта observer
	let config = { attributes: true, childList: true, characterData: true };

	// Начинаем наблюдение за изменениями в каждом элементе "span"
	counters.forEach(function (counter) {
		observer.observe(counter, config);
	});
}

