import { gsap } from "gsap";
import { isMobile } from "../files/functions.js";


document.addEventListener('DOMContentLoaded', () => {
	if (isMobile.any()) {
		cursor.hidden = true;
		follower.hidden = true;
	} else {
		cursor.hidden = false;
		follower.hidden = false;
		const cursor = document.getElementById('cursor');
		const follower = document.getElementById('aura');
		const bullets = document.querySelectorAll('.fp-bullet');
		let mouseX = 0;
		let mouseY = 0;
		let posX = 0;
		let posY = 0;

		document.body.addEventListener('mousemove', (e) => {
			mouseCoord(e);
			cursor.classList.remove('hidden')
			follower.classList.remove('hidden')
		})

		function mouseCoord(e) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}

		gsap.to({}, {
			duration: 0.01,
			repeat: -1,
			onRepeat: () => {

				posX += (mouseX - posX) / 5;
				posY += (mouseY - posY) / 5;

				gsap.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY
					}
				});

				gsap.set(follower, {
					css: {
						left: posX - 23,
						top: posY - 23
					}
				})
			}
		})

		for (let index = 0; index < bullets.length; index++) {
			const bullet = bullets[index];
			bullet.addEventListener('mouseover', () => {
				cursor.classList.add('active')
				follower.classList.add('active')
			})

			bullet.addEventListener('mouseout', () => {
				cursor.classList.remove('active')
				follower.classList.remove('active')
			})
		}

		document.body.addEventListener('mouseout', () => {
			cursor.classList.add('hidden')
			follower.classList.add('hidden')
		})
	}
})









