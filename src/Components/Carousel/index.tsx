/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import './carousel.scss';
import { useEffect, useState } from 'react';
import { getRandomColor } from '../../utils/getRandomColor';
const Carousel = ({ tasks }: any) => {
	const [ number, setNumber ] = useState<number>(0);
	const [ albumSave, setAlbumSave ] = useState<any>([])
/* 	const carousel = document.querySelector('.carousel-container') as HTMLBodyElement;
	let cellCount = 9;
	let selectedIndex = 0; */
	const wheelCarrousel2 = (e: any) => {
		const main2 = document.querySelector('.realisations-carrousel3') as HTMLBodyElement;
		main2.scrollLeft += e.deltaY;
		if (e.deltaY > 0) {
			if (number === 10) {
				setNumber(10);
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
		let rotation = (((number - 1) / (liElement.length - 1)) - 0.5) * 25;
		let transform = `scale(0.6)`;
		let rotate = `rotate(${rotation}deg)`
		menuList[0][number].style.transform = transform;
		menuList[0][number].style.transform += rotate;
		menuList[0][number].style.opacity=1;
		menuList[0][number].style.transition= 'top 1s ease-in 0s';
		menuList[0][number].style.top='100px';
		const before = menuList[0][number].querySelector('.disk-before')as HTMLElement;
		before!.style.background = getRandomColor();
	}
	const scrollCarrouselCardBack = (e: any, number: number) => {
		const menuList: any = [];
		const ulElement = document.querySelector(".realisations-list-3") as HTMLBodyElement;
		const liElement = ulElement.querySelectorAll<HTMLElement>(".realisations-item-3");
		menuList.push(liElement);
		menuList[0][number].style.opacity=0;
		menuList[0][number].style.transition= 'top 1s ease-in 0s';
		menuList[0][number].style.top='-150px';
	}
	const clicOnImage = (e: any) => {
		e.preventDefault();
		console.log(albumSave)
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
							{tasks.map((task : any, i: number) => { 
								return (
									<li className="realisations-item-3" onMouseOver={()=> setAlbumSave(task)} onClick={clicOnImage} key={i}>
										<div className="pochette"><img src={task.images} alt="" /></div>
										<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">{task.artist}</div></div>
									</li>
								)
							})}
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>

							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
							<li className="realisations-item-3">
								<div className="pochette"></div>
								<div className="disk"><span className="disk-before"></span><span className="disk-line"></span><span className="disk-line--2"></span><div className="disk-titre">le titre</div></div>
							</li>
						</ul>
					</div>

				</section>
{/* 				<iframe src="https://open.spotify.com/embed/album/42QybsqCIxCc1H2SEskAiv?utm_source=generator" width="100%" height="380" frameBorder="0" ></iframe> */}
		</>
	)
}

export default Carousel;