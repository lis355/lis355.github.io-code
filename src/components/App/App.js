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
						<div className="flex">
							<a className="download-resume-button" href="https://github.com/lis355" target="_blank" rel="noopener noreferrer">Скачать резюме (PDF)</a>
						</div>
					</div>
				</div>

				<div className="block-vertical">
					<p>{lorem.generateParagraphs(1)}</p>
				</div>

				<div className="block-vertical">
					<p>{lorem.generateParagraphs(2)}</p>
				</div>

				<div className="block-vertical">
					<p>{lorem.generateParagraphs(2)}</p>
				</div>

				<div className="block-vertical">
					<p>{lorem.generateParagraphs(2)}</p>
				</div>
			</React.Fragment>
		);
	}
}

class CareerPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="flex flex-column">
					<div className="flex flex-row">
						<div>
							<p>2024</p>
						</div>
						<div className="box">
						</div>
						<div>
							<p>{lorem.generateParagraphs(1)}</p>
						</div>
					</div>

					<div className="flex flex-row">
						<div>
							<p>2024</p>
						</div>
						<div className="box">
						</div>
						<div>
							<p>{lorem.generateParagraphs(1)}</p>
						</div>
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
				<div className="flex flex-row flex-justify-center">
					<iframe title="В​с​е​г​о 17 Л​е​т​.​.​. by SUNNYCORE" style={{ zoom: 0.8, border: 0, width: "350px", height: "786px" }} src="https://bandcamp.com/EmbeddedPlayer/album=4171414044/size=large/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="https://lartsov.bandcamp.com/album/17">В​с​е​г​о 17 Л​е​т​.​.​. by SUNNYCORE</a></iframe>
				</div>
				<div className="flex flex-row flex-justify-center">
					<iframe title="Человеку Нужен Человек by SUNNYCORE" style={{ zoom: 0.8, border: 0, width: "350px", height: "786px" }} src="https://bandcamp.com/EmbeddedPlayer/album=533910795/size=large/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="https://lartsov.bandcamp.com/album/--2">Человеку Нужен Человек by SUNNYCORE</a></iframe>
				</div>
			</React.Fragment>
		);
	}
}

class HobbiesPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<iframe title="telegram-post-lartsovphoto-39" src="https://t.me/lartsovphoto/39?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "768px" }}></iframe>
				<iframe title="telegram-post-lartsovphoto-56" src="https://t.me/lartsovphoto/56?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "832px" }}></iframe>
				<iframe title="telegram-post-lartsovphoto-61" src="https://t.me/lartsovphoto/61?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "746px" }}></iframe>
				<iframe title="telegram-post-lartsovphoto-67" src="https://t.me/lartsovphoto/67?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "773px" }}></iframe>
				<iframe title="telegram-post-lartsovphoto-125" src="https://t.me/lartsovphoto/125?embed=1&amp;userpic=false&amp;color=29B127&amp;dark_color=72E350" width="100%" height="" frameBorder="0" scrolling="no" style={{ zoom: 0.75, overflow: "hidden", colorScheme: "light dark", border: "none", minWidth: "320px", height: "794px" }}></iframe>
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
