import './carousel.scss';
import { useState } from 'react';
const Carousel = ({ tasks }: any) => {
	const [ number, setNumber ] = useState<number>(0);
/* 	const carousel = document.querySelector('.carousel-container') as HTMLBodyElement;
	let cellCount = 9;
	let selectedIndex = 0; */
	const wheelCarrousel2 = (e: any) => {
		const main2 = document.querySelector('.realisations-carrousel3') as HTMLBodyElement;
		main2.scrollLeft += e.deltaY;
		if (e.deltaY > 0) {
			if (number === 10) {
				setNumber(5);
				setTimeout(()=>document.getElementById('section5')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }),2000);
			}
			else {
				setNumber(number+1);
				scrollCarrouselCardFoward(e, number);
			}	
		}
		if (e.deltaY < 0) {
			if(number < 1) {
				setNumber(1);
				document.getElementById('section3')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
			}
			else {
				setNumber(number-1);
				scrollCarrouselCardBack(e, number);
			}
		}
	}
	const scrollCarrouselCardFoward = (e: any, number: any) => {
		const menuList: any = [];
		const ulElement = document.querySelector(".realisations-list-3") as HTMLBodyElement;
		const liElement = ulElement.querySelectorAll<HTMLElement>(".realisations-item-3");
		menuList.push(liElement);
		menuList[0][number].style.opacity=1;
		menuList[0][number].style.transition= 'bottom 1s ease-in 0s';
		menuList[0][number].style.bottom='200px';
		 
	}
	const scrollCarrouselCardBack = (e: any, number: number) => {
		const menuList: any = [];
		const ulElement = document.querySelector(".realisations-list-3") as HTMLBodyElement;
		const liElement = ulElement.querySelectorAll<HTMLElement>(".realisations-item-3");
		menuList.push(liElement);
		menuList[0][number].style.opacity=0;
		menuList[0][number].style.transition= 'bottom 1s ease-in 0s';
		menuList[0][number].style.bottom='-150px';
	}
	const clicOnImage = (e: any) => {
		e.preventDefault();
		console.log(e)
	}
	return (
		<>
		<section className="section-real parallax-real" id="section4">
					<div className="realisations-carrousel3" onWheel={wheelCarrousel2}>
						<ul className="realisations-list-3" >
							<li className="realisations-item-3" onClick={clicOnImage}>
								<div className="card">
									<div className="card_face card_face--front">Front</div>
									<div className="card_face card_face--back">Back</div>
								</div>
							</li>
							<li className="realisations-item-3" onClick={clicOnImage}>
								<div className="pochette"></div>
								<div className="disk"><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">2</li>
							<li className="realisations-item-3">3</li>
							<li className="realisations-item-3">4</li>
							<li className="realisations-item-3">5</li>
							<li className="realisations-item-3">6</li>
							<li className="realisations-item-3">7</li>
							<li className="realisations-item-3">8</li>
							<li className="realisations-item-3">9</li>
							<li className="realisations-item-3">0</li>
						</ul>
					</div>
				</section>
		</>
	)
}

export default Carousel;