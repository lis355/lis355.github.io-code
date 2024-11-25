import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { LoremIpsum } from "lorem-ipsum";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";

import ScrollIndicator from "../ScrollIndicator/ScrollIndicator.js";

import "./App.scss";

import MePhoto from "../../assets/images/me.png";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
});

function formatAgeInRussian(age) {
	const cases = {
		1: "год",
		2: "года",
		3: "года",
		4: "года",
		5: "лет",
		6: "лет",
		7: "лет",
		8: "лет",
		9: "лет",
		10: "лет"
	};

	const lastDigit = age % 10;
	const lastTwoDigits = age % 100;

	if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
		return `${age} лет`;
	}

	return `${age} ${cases[lastDigit]}`;
}

class MePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="block-vertical flex flex-row flex-justify-center">
					<img className="photo" src={MePhoto} alt="" width="200" height="100%" />
					<div className="flex flex-column">
						<div className="flex flex-row flex-align-center" style={{ marginTop: "-7px" }}>
							<p style={{ fontSize: "2rem" }}>Иван Ларцов</p>
							&nbsp;
							<p style={{ fontSize: "1.2rem", color: "lightgray" }}> [{formatAgeInRussian(new Date().getFullYear() - 1993)}]</p>
						</div>
						<p style={{ fontSize: "1.2rem" }}>Нижний Новгород</p>
						<p style={{ fontSize: "1.2rem" }}>ННГУ им. Лобачевского</p>
						<p style={{ fontSize: "1.2rem" }}>Бакалавр информационных технологий</p>
						<div className="link">
							<a href="mailto:lartsov@gmail.com" target="_blank" rel="noopener noreferrer"
								onClick={() => window.location.href = "mailto:lartsov@gmail.com"}>
								<div style={{ display: "inline-block" }}>
									<div className="flex flex-row flex-align-center">
										<div className="icon">
											<MdAlternateEmail />
										</div>
										<p>lartsov@gmail.com</p>
									</div>
								</div>
							</a>
						</div>
						<div className="link">
							<a href="https://t.me/lis355" target="_blank" rel="noopener noreferrer">
								<div style={{ display: "inline-block" }}>
									<div className="flex flex-row flex-align-center">
										<div className="icon">
											<FaTelegram />
										</div>
										<p>@lis355</p>
									</div>
								</div>
							</a>
						</div>
						<div className="link">
							<a href="https://github.com/lis355" target="_blank" rel="noopener noreferrer">
								<div style={{ display: "inline-block" }}>
									<div className="flex flex-row flex-align-center">
										<div className="icon">
											<FaGithub />
										</div>
										<p>https://github.com/lis355</p>
									</div>
								</div>
							</a>
						</div>
						<div className="link">
							<a href="https://nn.hh.ru/resume/ab956444ff01ae077c0039ed1f6d3531415864" target="_blank" rel="noopener noreferrer">
								<div style={{ display: "inline-block" }}>
									<div className="flex flex-row flex-align-center">
										<div className="icon">
											<svg width="48" height="48" style={{ zoom: "0.38" }} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24" /><path d="M13.65 13.169v8.164c1.243-1.482 2.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507.717.335 1.253.765 1.615 1.287.364.527.61 1.104.743 1.74.132.633.198 1.618.198 2.954v8.729h-3.862V26.46c0-1.56-.07-2.548-.217-2.968a1.917 1.917 0 00-.775-1c-.372-.251-.835-.375-1.394-.375-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437-.236.64-.354 1.585-.35 2.836l-.004 7.454H9.789V13.169h3.862m15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228.887 0 1.69.17 2.406.507.714.335 1.25.765 1.61 1.287a4.69 4.69 0 01.743 1.74c.133.633.199 1.618.199 2.954v8.729h-3.858V26.46c0-1.56-.073-2.548-.22-2.968a1.91 1.91 0 00-.777-1c-.368-.251-.835-.375-1.394-.375-.639 0-1.213.16-1.713.478-.503.32-.871.798-1.106 1.437-.232.64-.35 1.585-.35 2.836v7.454H25V13.169h3.857" fill="#FEFEFE" /></svg>
										</div>
										<p>https://hh.ru</p>
									</div>
								</div>
							</a>
						</div>
						<div className="flex">
							<a className="download-resume-button" href="https://github.com/lis355" target="_blank" rel="noopener noreferrer">Скачать резюме (PDF)</a>
						</div>
					</div>
				</div>

				<div className="block-vertical">
					<p>Увлекся программированием я в возрасте 13-14 лет, когда мне стало интересно, как отрисовывается кадр игры Quake III.
						Я не понимал, как так много разных вещей учитывается в отрисовке кадра, причем делалось это 60 раз в секунду.
						После этого (в течении многих лет) я узнал про рендеринг, ray tracing, компонентный подход, оптимизации, алгоритм быстрого инверсного квадратного корня...
						и с большим интересом погрузился в мир программирования
					</p>
				</div>
				<div className="block-vertical">
					<p>Первое знакомство - в школе, Turbo Pascal. В университете - C++ и самостоятельное изучение C#.
						Тогда мне стали интересны дискретная математика, теория графов, регулярные выражения.
						Как и любой программист, я стал мечтать написать свой компилятор, конечно, своего языка программирования.
						Благодаря этому я много узнал про синтаксический LL и семантический анализ, деревья разбора, парсинг, написал программу для работы с булевой алгеброй, которая поддерживала произвольные математические выражения с функциями и переменными, строила схемы и таблицы истинности, раскладывала формулы в СКНФ и СДНФ.
						Было очень интересно, это была конкурсная лаборатоная работа - я очень много программировал 2-3 месяца напролет, и занял первое место, получив возможность распределения на любую кафедру.
						Тема моей дипломной работы - ""
					</p>
				</div>

				<div className="block-vertical">
					<p>На поздних курсах университета я много программировал на C# (много своих идей, игр), так же увлекся ассемблером и более "низким уровнем": читал книгу про дизассемблирование, внутреннее устройство таблицы виртуальных функций, работу компилятора, линтера, устройство ОС
					</p>
				</div>

				<div className="block-vertical">
					<p>Первая работа - разработка 2D игры для мобильных устройств на C++. Здесь я получил первый опыт работы в коллективе, ответственности, "долгих вечеров отладки" с исследованием памяти 0xCDCDCDCD.
						Позже мне доверили программировать серверную часть на C#, я стал старшим программистом на проекте, и много общался с менеджерами и дизайнерами - учился понимать, как видит задачу "не-программист", договариваться, говорить о проблемах и предлагать решения.
					</p>
				</div>

				<div className="block-vertical">
					<p>Долгая работа - проект по автоматизации действий в браузере. Нужно было разрабатывать автоматизацию (эмулирование) действий пользователя, парсинг и взаимодействие с сайтом.
						Мною были подробно изучены средства защит сайтов от ботов, веб-скрапинг, парсинга, мультиаккаунтинга - изучено много библиотек, занимающимися т.н. отпечатками - fingerprints браузера.
						Взаимодействие с браузером впоследствии было переписано с использованием Chrome CDP (Chrome DevTools Protocol).
						Этот проект - моё настоящие "детище", т.к. я разрабатывал всю "эко-систему": программу, сервер, микросервисы, админка, БД, вспомогательные инструменты.
						и взаимодействие с API.
					</p>
				</div>

				<div className="block-vertical">
					<p>Среди моих увлечений - турпоходы и путешествия, игра на разных музыкальных инструментах, фотография</p>
				</div>
			</React.Fragment>
		);
	}
}

class KnowledgePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="block-vertical"><p style={{ fontSize: "1.2rem" }} >Стеки</p></div>
				<div className="block-vertical"><p>C++ / STL</p></div>
				<div className="block-vertical"><p>C# / Windows Forms / WinAPI</p></div>
				<div className="block-vertical"><p>NodeJS / Express / MongoDB / React / MobX / Electron</p></div>
				<div className="block-vertical"><p>Python / Django / SQL / React / Redux</p></div>
				<div className="block-vertical"><p>Unity3D</p></div>

				<div className="block-vertical"><p style={{ fontSize: "1.2rem" }}>Технологии</p></div>



				<div className="block-vertical"><p style={{ fontSize: "1.2rem" }}>Знания</p></div>
			</React.Fragment>
		);
	}
}

class CareerPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="block-vertical">
					<table style={{ width: "100%" }}>
						<tbody>
							<tr>
								<th style={{ width: "0%" }}></th>
								<th style={{ width: "5rem" }}></th>
								<th></th>
							</tr>
							<tr>
								<td className="v-a-top">2024</td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>{lorem.generateParagraphs(1)}</td>
							</tr>
							<tr>
								<td className="v-a-top">2023</td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>{lorem.generateParagraphs(1)}</td>
							</tr>
							<tr>
								<td className="v-a-top">2022</td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>{lorem.generateParagraphs(1)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment >
		);
	}
}

class MusicPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="block-vertical">
					<p>Долгое время я фотографировал, что попало под глаз, на сотовый телефон. Часто телефона не хватало для "кадра".
						В 2023 году я решил твердо взяться за цифровую фотографию, разобрался с теорией и выбрал обьективы.
					</p>
				</div>

				<div className="block-vertical">
					<div className="flex flex-row flex-justify-center">
						<iframe title="В​с​е​г​о 17 Л​е​т​.​.​. by SUNNYCORE" style={{ zoom: 0.8, border: 0, width: "350px", height: "786px" }} src="https://bandcamp.com/EmbeddedPlayer/album=4171414044/size=large/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="https://lartsov.bandcamp.com/album/17">В​с​е​г​о 17 Л​е​т​.​.​. by SUNNYCORE</a></iframe>
					</div>
				</div>

				<div className="block-vertical">
					<p>Долгое время я фотографировал, что попало под глаз, на сотовый телефон. Часто телефона не хватало для "кадра".
						В 2023 году я решил твердо взяться за цифровую фотографию, разобрался с теорией и выбрал обьективы.
					</p>
				</div>

				<div className="block-vertical">
					<div className="flex flex-row flex-justify-center">
						<iframe title="Человеку Нужен Человек by SUNNYCORE" style={{ zoom: 0.8, border: 0, width: "350px", height: "786px" }} src="https://bandcamp.com/EmbeddedPlayer/album=533910795/size=large/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="https://lartsov.bandcamp.com/album/--2">Человеку Нужен Человек by SUNNYCORE</a></iframe>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class HobbiesPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="block-vertical">
					<p>Долгое время я фотографировал, что попало под глаз, на сотовый телефон. Часто телефона не хватало для "кадра".
						В 2023 году я решил твердо взяться за цифровую фотографию, разобрался с теорией и выбрал обьективы.
					</p>
				</div>

				<div className="block-vertical">
					<iframe title="telegram-post-lartsovphoto-39" src="https://t.me/lartsovphoto/39?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "768px" }}></iframe>
				</div>

				<div className="block-vertical">
					<p>Мне очень нравятся искажения при обработе фотографий: неестественные пересыщенные цвета, гранж-ломо-фото, зерно, помехи;
						нравятся контурные черно-белые фотографии
					</p>
				</div>

				<div className="block-vertical">
					<iframe title="telegram-post-lartsovphoto-56" src="https://t.me/lartsovphoto/56?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "832px" }}></iframe>
				</div>

				<div className="block-vertical">
					<p>
						Мне очень хочется развиваться в фотографии, фотографировать людей и придумывать образы
					</p>
				</div>

				<div className="block-vertical">
					<iframe title="telegram-post-lartsovphoto-61" src="https://t.me/lartsovphoto/61?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "746px" }}></iframe>
				</div>


				<div className="block-vertical">
					<p>
						Хочу оставить это хобби - не требовать от себя, а творить и радоваться.
					</p>
				</div>

				<div className="block-vertical">
					<iframe title="telegram-post-lartsovphoto-67" src="https://t.me/lartsovphoto/67?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "773px" }}></iframe>
				</div>

				<div className="block-vertical">
					<iframe title="telegram-post-lartsovphoto-125" src="https://t.me/lartsovphoto/125?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "794px" }}></iframe>
				</div>
			</React.Fragment>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-items">
					<div className="content">
						<div className="flex flex-row">
							<Link to="/" className="header-item">о себе</Link>
							<Link to="/knowledge" className="header-item">знания</Link>
							<Link to="/career" className="header-item">карьера</Link>
							<Link to="/articles" className="header-item">статьи</Link>
							<Link to="/github" className="header-item">github</Link>
							<Link to="/music" className="header-item">музыка</Link>
							<Link to="/hobbies" className="header-item">хобби</Link>
						</div>
					</div>
				</div>
				<ScrollIndicator containerElement={this.containerElementRef} />
			</div>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="content">
					<p>Ivan Lartsov {new Date().getFullYear()}</p>
					<div className="icons">
						<div className="icon"
							onClick={() => window.location.href = "mailto:lartsov@gmail.com"}>
							<MdAlternateEmail />
						</div>
						<div className="icon">
							<a href="https://t.me/lis355" target="_blank" rel="noopener noreferrer">
								<FaTelegram />
							</a>
						</div>
						<div className="icon">
							<a href="https://github.com/lis355" target="_blank" rel="noopener noreferrer">
								<FaGithub />
							</a>
						</div>
						<div className="icon">
							<a href="https://nn.hh.ru/resume/ab956444ff01ae077c0039ed1f6d3531415864" target="_blank" rel="noopener noreferrer">
								<svg width="48" height="48" style={{ zoom: "0.38" }} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24" /><path d="M13.65 13.169v8.164c1.243-1.482 2.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507.717.335 1.253.765 1.615 1.287.364.527.61 1.104.743 1.74.132.633.198 1.618.198 2.954v8.729h-3.862V26.46c0-1.56-.07-2.548-.217-2.968a1.917 1.917 0 00-.775-1c-.372-.251-.835-.375-1.394-.375-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437-.236.64-.354 1.585-.35 2.836l-.004 7.454H9.789V13.169h3.862m15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228.887 0 1.69.17 2.406.507.714.335 1.25.765 1.61 1.287a4.69 4.69 0 01.743 1.74c.133.633.199 1.618.199 2.954v8.729h-3.858V26.46c0-1.56-.073-2.548-.22-2.968a1.91 1.91 0 00-.777-1c-.368-.251-.835-.375-1.394-.375-.639 0-1.213.16-1.713.478-.503.32-.871.798-1.106 1.437-.232.64-.35 1.585-.35 2.836v7.454H25V13.169h3.857" fill="#FEFEFE" /></svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Header />

					<div className="main">
						<div className="content">
							<Routes>
								<Route exact path="/" element={
									<MePage />
								} />
								<Route exact path="/knowledge" element={
									<KnowledgePage />
								} />
								<Route exact path="/career" element={
									<CareerPage />
								} />
								<Route exact path="/github" element={
									null
								} />
								<Route exact path="/music" element={
									<MusicPage />
								} />
								<Route exact path="/hobbies" element={
									<HobbiesPage />
								} />
							</Routes>
						</div>
					</div>

					<Footer />
				</Router >
			</React.Fragment >
		);
	}
}

export default App;
