import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

import ScrollIndicator from "../ScrollIndicator/ScrollIndicator.js";

import "./App.scss";

import MePhoto from "../../assets/images/me.png";
import SyntagePhoto from "../../assets/images/repos/syntage.png";
import KslPhoto from "../../assets/images/repos/ksl.png";
import Article1Photo from "../../assets/images/articles/art1.png";
import Article2Photo from "../../assets/images/articles/art2.png";
import Article3Photo from "../../assets/images/articles/art3.png";
import Article4Photo from "../../assets/images/articles/art4.png";

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

				<p>Увлекся программированием я в возрасте 13-14 лет, когда мне стало интересно, как отрисовывается кадр игры Quake III.
					Я не понимал, как так много разных вещей учитывается в отрисовке кадра, причем делалось это 60 раз в секунду.
					После этого (в течении многих лет) я узнал про рендеринг, ray tracing, компонентный подход, оптимизации, алгоритм быстрого инверсного квадратного корня...
					и с большим интересом погрузился в мир программирования
				</p>
				<p>Первое знакомство - в школе, Turbo Pascal. В университете - C++ и самостоятельное изучение C#.
					Тогда мне стали интересны дискретная математика, теория графов, регулярные выражения.
					Как и любой программист, я стал мечтать написать свой компилятор, конечно, своего языка программирования.
					Благодаря этому я много узнал про синтаксический LL и семантический анализ, деревья разбора, парсинг, написал программу для работы с булевой алгеброй, которая поддерживала произвольные математические выражения с функциями и переменными, строила схемы и таблицы истинности, раскладывала формулы в СКНФ и СДНФ.
					Было очень интересно, это была конкурсная лаборатоная работа - я очень много программировал 2-3 месяца напролет, и занял первое место, получив возможность распределения на любую кафедру.
					Тема моей дипломной работы - ""
				</p>
				<p>На поздних курсах университета я много программировал на C# (много своих идей, игр), так же увлекся ассемблером и более "низким уровнем": читал книгу про дизассемблирование, внутреннее устройство таблицы виртуальных функций, работу компилятора, линтера, устройство ОС
				</p>
				<p>Первая работа - разработка 2D игры для мобильных устройств на C++. Здесь я получил первый опыт работы в коллективе, ответственности, "долгих вечеров отладки" с исследованием памяти 0xCDCDCDCD.
					Позже мне доверили программировать серверную часть на C#, я стал старшим программистом на проекте, и много общался с менеджерами и дизайнерами - учился понимать, как видит задачу "не-программист", договариваться, говорить о проблемах и предлагать решения.
				</p>
				<p>Долгая работа - проект по автоматизации действий в браузере. Нужно было разрабатывать автоматизацию (эмулирование) действий пользователя, парсинг и взаимодействие с сайтом.
					Мною были подробно изучены средства защит сайтов от ботов, веб-скрапинг, парсинга, мультиаккаунтинга - изучено много библиотек, занимающимися т.н. отпечатками - fingerprints браузера.
					Взаимодействие с браузером впоследствии было переписано с использованием Chrome CDP (Chrome DevTools Protocol).
					Этот проект - моё настоящие "детище", т.к. я разрабатывал всю "эко-систему": программу, сервер, микросервисы, админка, БД, вспомогательные инструменты.
					и взаимодействие с API.
				</p>
				<p>Среди моих увлечений - турпоходы и путешествия, игра на разных музыкальных инструментах, фотография</p>
			</React.Fragment >
		);
	}
}

class KnowledgePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<p style={{ fontSize: "1.2rem" }} >Стеки</p>
				<p>C++ / STL</p>
				<p>C# / Windows Forms / WinAPI</p>
				<p>NodeJS / Express / MongoDB / React / MobX / Electron</p>
				<p>Python / Django / SQL / React / Redux</p>
				<p>Unity3D</p>
				<p style={{ fontSize: "1.2rem" }}>Технологии</p>
				<p style={{ fontSize: "1.2rem" }}>Знания</p>
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
								<td className="v-a-top"><p className="h">2024</p></td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>
									<p className="h">БК-Студия</p>
									<p>Нижний Новгород <a href="https://bk-s.pro/" target="_blank" rel="noopener noreferrer">https://bk-s.pro/</a></p>
									<p>Программист Unity3D</p>
									<p>Программирование обучающих приложений-тренажеров</p>
								</td>
							</tr>
							<tr>
								<td className="v-a-top"><p className="h">2024</p></td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>
									<p className="h">JDAM Corporation</p>
									<p>Технический директор</p>
									<p>NodeJS + Express + MongoDB / React + MobX + Electron / Chrome CDP</p>
									<p>Разработка и поддержка автоматизации действия пользователя в браузере, система для парсинга и взаимодействия с сайтами, логгирования, программирование обслуживающего сервера с микросервисной архитектурой.</p>
									<p>Разработка антидетект-стратегий для работы браузера в автоматическом режиме.</p>
									<p>Поддержка рабочего состояния системы: сервер, админ-панель, программа, обновления, CI/CD</p>
								</td>
							</tr>
							<tr>
								<td className="v-a-top"><p className="h">2019</p></td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>
									<p className="h">Webim</p>
									<p>Санкт-Петербург</p>
									<p>Web-разработчик Python Django / React</p>
									<p>Проект по автоматизации сервиса аренды жилплощадей. Внутрибраузерная игра на базе VK API</p>
								</td>
							</tr>
							<tr>
								<td className="v-a-top"><p className="h">2016</p></td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>
									<p className="h">Общество Сферического Кино</p>
									<p>Нижний Новгород <a href="http://fulldomefilm.org" target="_blank" rel="noopener noreferrer">http://fulldomefilm.org</a></p>
									<p>Программист Unity3D</p>
									<p>Программирование клиента и сервера симулятора солнечной системы, впоследствии так же музыкального визуализатора на Unity3D. Сервер работает на Linux, клиент - на Apple Ipad.</p>
									<div className="">
										<iframe width="560" height="315" style={{ zoom: "0.7" }} src="https://www.youtube.com/embed/jo4kapFla1E?si=JCz98zuYmbFaSamK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
									</div>
								</td>
							</tr>
							<tr>
								<td className="v-a-top"><p className="h">2015</p></td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>
									<p className="h">DivoGames (Games Insight)</p>
									<p>Нижний Новгород <a href="http://www.divogames.com" target="_blank" rel="noopener noreferrer">http://www.divogames.com</a></p>
									<p>Старший программист C++/C#</p>
									<p>Программирование основных механик (логик) игры на стороне клиента. Программирование движка. Программирование сервера (игровые логики).
										Разработка и сопровождения внутренних утилит для редактирования данных для игры.</p>
								</td>
							</tr>
							<tr>
								<td className="v-a-top"><p className="h">2012</p></td>
								<td className="v-a-top"><div className="line-box" /></td>
								<td>
									<p className="h">Датавижн НН, ООО</p>
									<p>Нижний Новгород <a href="http://www.opencascade.org" target="_blank" rel="noopener noreferrer">http://www.opencascade.org</a></p>
									<p>Программист C++</p>
									<p>Работа с фреймверком Open CASCADE Technology, расширение функционала, работа с документацией фреймверка</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment >
		);
	}
}

class ArticlesPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="big-block-vertical">
					<p className="h"><a href="https://habr.com/ru/articles/311220/" target="_blank" rel="noopener noreferrer">Программирование&Музыка: понимаем и пишем VSTi синтезатор на C# WPF. Часть 1</a></p>
					<p>Программист Unity3D</p>
					<p>Программирование обучающих приложений-тренажеров</p>
					<p>
						<div className="flex flex-row flex-justify-center">
							<iframe width="560" height="315" style={{ zoom: "0.7" }} src="https://www.youtube.com/embed/6zAVMEtIb2w?si=1_k0znso5zm3Ddi6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
						</div>
					</p>
				</div>
				<div className="big-block-vertical">
					<p className="h"><a href="https://habr.com/ru/articles/311750/" target="_blank" rel="noopener noreferrer">Программирование&Музыка: ADSR-огибающая сигнала. Часть 2</a></p>
					<p>Программист Unity3D</p>
					<p>Программирование обучающих приложений-тренажеров</p>
					<p>
						<div className="flex flex-row flex-justify-center">
							<img className="photo" src={Article1Photo} alt="" width="400" height="100%" />
						</div>
					</p>
				</div>
				<div className="big-block-vertical">
					<p className="h"><a href="https://habr.com/ru/articles/313062/" target="_blank" rel="noopener noreferrer">Программирование&Музыка: Частотный фильтр Баттервота. Часть 3</a></p>
					<p>Программист Unity3D</p>
					<p>Программирование обучающих приложений-тренажеров</p>
					<p>
						<div className="flex flex-row flex-justify-center">
							<img className="photo" src={Article2Photo} alt="" width="400" height="100%" />
						</div>
					</p>
				</div>
				<div className="big-block-vertical">
					<p className="h"><a href="https://habr.com/ru/articles/313338/" target="_blank" rel="noopener noreferrer">Программирование&Музыка: Delay, Distortion и модуляция параметров. Часть 4</a></p>
					<p>Программист Unity3D</p>
					<p>Программирование обучающих приложений-тренажеров</p>
					<p>
						<div className="flex flex-row flex-justify-center">
							<img className="photo" src={Article3Photo} alt="" width="400" height="100%" />
						</div>
					</p>
				</div>
				<div className="big-block-vertical">
					<p className="h"><a href="https://habr.com/ru/articles/799821/" target="_blank" rel="noopener noreferrer">В помощь музыканту: меняем тональность (и не только) звука с компьютера в Windows</a></p>
					<p>Программист Unity3D</p>
					<p>Программирование обучающих приложений-тренажеров</p>
					<p>
						<div className="flex flex-row flex-justify-center">
							<img className="photo" src={Article4Photo} alt="" width="400" height="100%" />
						</div>
					</p>
				</div>
			</React.Fragment >
		);
	}
}

class GitHubForksAndStars extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			forks: 0,
			stars: 0
		};
	}

	componentDidMount() {
		fetch(this.props.repositoryUrl)
			.then(response => response.json())
			.then(data => {
				this.setState({
					forks: data.forks,
					stars: data.stargazers_count
				});
			});
	}

	render() {
		return (
			<p className="flex flex-row flex-align-center">
				{this.state.forks > 0 && this.props.showForks &&
					<React.Fragment>
						<svg height="16" width="16" viewBox="0 0 16 16" style={{ marginRight: "0.2rem" }}>
							<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
						</svg>
						<div style={{ marginRight: "0.2rem" }}>{this.state.forks}</div>
					</React.Fragment>
				}
				{this.state.stars > 0 && this.props.showStars &&
					<React.Fragment>
						<svg height="16" width="16" viewBox="0 0 16 16" style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>
							<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
						</svg>
						{this.state.stars}
					</React.Fragment>
				}
			</p>
		);
	}
}

class GitHubPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="block-vertical">
					<div className="big-block-vertical">
						<p className="h"><a href="https://github.com/lis355/Syntage" target="_blank" rel="noopener noreferrer">Syntage</a></p>
						<GitHubForksAndStars repositoryUrl="https://api.github.com/repos/lis355/Syntage" showForks={true} showStars={true} />
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/ksl" target="_blank" rel="noopener noreferrer">ksl</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={KslPhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/enumjs" target="_blank" rel="noopener noreferrer">enumjs</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/pass-telegram-bot" target="_blank" rel="noopener noreferrer">pass-telegram-bot</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/node-ytdl-audio-telegram-bot" target="_blank" rel="noopener noreferrer">node-ytdl-audio-telegram-bot</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/xmuselib" target="_blank" rel="noopener noreferrer">xmuselib</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/sider" target="_blank" rel="noopener noreferrer">sider</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/node-divert" target="_blank" rel="noopener noreferrer">node-divert</a></p>
						<p>null</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/sharya" target="_blank" rel="noopener noreferrer">sharya</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/diarybot" target="_blank" rel="noopener noreferrer">diarybot</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/ydc" target="_blank" rel="noopener noreferrer">ydc</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/slight-pcmp-js" target="_blank" rel="noopener noreferrer">slight-pcmp-js</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/retand" target="_blank" rel="noopener noreferrer">retand</a></p>
						<p>Kotlin</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/1moneyParser" target="_blank" rel="noopener noreferrer">1moneyParser</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/pomtpjs" target="_blank" rel="noopener noreferrer">pomtpjs</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/tgansweringmachine" target="_blank" rel="noopener noreferrer">tgansweringmachine</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/rps-game" target="_blank" rel="noopener noreferrer">rps-game</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/node-jobs-manager" target="_blank" rel="noopener noreferrer">node-jobs-manager</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/snake-game-js" target="_blank" rel="noopener noreferrer">snake-game-js</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/Futor" target="_blank" rel="noopener noreferrer">Futor</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/tracktags" target="_blank" rel="noopener noreferrer">tracktags</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/ndapp" target="_blank" rel="noopener noreferrer">ndapp</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/eslint-config-protop" target="_blank" rel="noopener noreferrer">eslint-config-protop</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/Knocle" target="_blank" rel="noopener noreferrer">Knocle</a></p>
						<p>TypeScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/postmapse" target="_blank" rel="noopener noreferrer">postmapse</a></p>
						<p>Python</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/angular-vk-photos" target="_blank" rel="noopener noreferrer">angular-vk-photos</a></p>
						<p>TypeScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/celery_local" target="_blank" rel="noopener noreferrer">celery_local</a></p>
						<p>Python</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/fastflex" target="_blank" rel="noopener noreferrer">fastflex</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/jsonf-python" target="_blank" rel="noopener noreferrer">jsonf-python</a></p>
						<p>Python</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/human-parser-generator" target="_blank" rel="noopener noreferrer">human-parser-generator</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/chrome-tab-switcher" target="_blank" rel="noopener noreferrer">chrome-tab-switcher</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/celect" target="_blank" rel="noopener noreferrer">celect</a></p>
						<p>JavaScript</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/af-io" target="_blank" rel="noopener noreferrer">af-io</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/Unity-Implet" target="_blank" rel="noopener noreferrer">Unity-Implet</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/GJson" target="_blank" rel="noopener noreferrer">GJson</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/PointsOnline" target="_blank" rel="noopener noreferrer">PointsOnline</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

					<div className="big-block-vertical">
						<p className="h"><a href="https://api.github.com/repos/lis355/TableCloth" target="_blank" rel="noopener noreferrer">TableCloth</a></p>
						<p>C#</p>
						<p>VST 2.4 .Net Study Synth</p>
						<p>
							<div className="flex flex-row flex-justify-center">
								<img className="photo" src={SyntagePhoto} alt="" width="400" height="100%" />
							</div>
						</p>
					</div>

				</div>
			</React.Fragment>
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

function scrollToTop() {
	window.scrollTo(0, 0);
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-items">
					<div className="content">
						<div className="flex flex-row">
							<Link to="/me" className="header-item" onClick={scrollToTop}>о себе</Link>
							<Link to="/knowledge" className="header-item" onClick={scrollToTop}>знания</Link>
							<Link to="/career" className="header-item" onClick={scrollToTop}>карьера</Link>
							<Link to="/articles" className="header-item" onClick={scrollToTop}>статьи</Link>
							<Link to="/github" className="header-item" onClick={scrollToTop}>github</Link>
							<Link to="/music" className="header-item" onClick={scrollToTop}>музыка</Link>
							<Link to="/hobbies" className="header-item" onClick={scrollToTop}>хобби</Link>
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
								<Route exact path="/me" element={
									<MePage />
								} />
								<Route exact path="/knowledge" element={
									<KnowledgePage />
								} />
								<Route exact path="/career" element={
									<CareerPage />
								} />
								<Route exact path="/articles" element={
									<ArticlesPage />
								} />
								<Route exact path="/github" element={
									<GitHubPage />
								} />
								<Route exact path="/music" element={
									<MusicPage />
								} />
								<Route exact path="/hobbies" element={
									<HobbiesPage />
								} />
								<Route path="/" element={<Navigate replace to="/me" />} />
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
