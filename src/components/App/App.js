import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { LoremIpsum } from "lorem-ipsum";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";

import MePhoto from "../../assets/images/me.png";

// import ScrollIndicator from "../ScrollIndicator/ScrollIndicator.js";

import "./App.scss";

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

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scroll: 0
		};

		this.containerElementRef = React.createRef();
	}

	// componentDidMount() {
	// 	window.addEventListener("scroll", () => {
	// 		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	// 		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 		const scrolled = (winScroll / height) * 100;
	// 		// this.setState({ scroll: winScroll / height });
	// 		// document.getElementById("myBar").style.width = scrolled + "%";
	// 	});
	// }

	render() {
		return (
			<React.Fragment>
				{/* <ScrollIndicator containerElement={this.containerElementRef} /> */}

				<div className="header">
					<div className="content">
						<button type="button" className="">о себе</button>
						<button type="button" className="">карьера</button>
						<button type="button" className="">github</button>
						<button type="button" className="">музыка</button>
						<button type="button" className="">хобби</button>
					</div>
				</div>

				<div className="main"
					ref={this.containerElementRef}
				// onScroll={() => this.setState({ scroll: this.containerElementRef.current.scrollTop / this.containerElementRef.current.scrollHeight })}
				>
					<div className="content">
						<div className="flex flex-row">
							<img src={MePhoto} alt="" />
							<div>
								<h1>Иван Ларцов</h1>
								<h1>31 год</h1>
								<h1>Нижний Новгород</h1>
								<h1>ННГУ им. Лобачевского</h1>
								<h1>Бакалавр информационных технологий</h1>
								<div className=""
									onClick={() => window.location.href = "mailto:lartsov@gmail.com"}>
									<MdAlternateEmail />
									lartsov@gmail.com
								</div>
								<div className="">
									<a href="https://t.me/lis355" target="_blank" rel="noopener noreferrer">
										<FaTelegram />
										@lis355
									</a>
								</div>
								<div className="">
									<a href="https://github.com/lis355" target="_blank" rel="noopener noreferrer">
										<FaGithub />
										https://github.com/lis355
									</a>
								</div>
							</div>
						</div>

						<iframe title="--2" style={{ border: 0, width: "350px", height: "786px" }} src="https://bandcamp.com/EmbeddedPlayer/album=533910795/size=large/bgcol=ffffff/linkcol=2ebd35/transparent=true/" seamless><a href="https://lartsov.bandcamp.com/album/--2">Человеку Нужен Человек by SUNNYCORE</a></iframe>

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
						</div>

						<p>{lorem.generateParagraphs(60)}</p>
					</div>
				</div>

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
			</React.Fragment>
		);
	}
}

export default App;
