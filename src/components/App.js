import { LoremIpsum } from "lorem-ipsum";
import React from "react";

// import './App.css';

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

class ScrollIndicator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scroll: ScrollIndicator.getCurrentScroll()
		};

		this.handleWindowScroll = this.handleWindowScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleWindowScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleWindowScroll);
	}

	handleWindowScroll() {
		this.setState({ scroll: ScrollIndicator.getCurrentScroll() });
	}

	static getCurrentScroll() {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		return winScroll / height;
	}

	render() {
		return (
			<div className="progress-container">
				<div className="progress-bar" style={{ width: `${this.state.scroll * 100}%` }} />
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scroll: 0
		};
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
				<div className="header">
					{/* <h2>Scroll Indicator</h2>
					<div className="progress-container">
						<div className="progress-bar" id="myBar" style={{ width: `${this.state.scroll * 100}%` }}></div>
					</div> */}

					<ScrollIndicator />

					<button type="button" className="">резюме</button>
					<button type="button" className="">программирование</button>
					<button type="button" className="">музыка</button>
					<button type="button" className="">путешествия</button>
					<button type="button" className="">BTN</button>
				</div>

				<div className="content">
					<p>{lorem.generateParagraphs(60)}</p>
				</div>

				<div className="footer">
					<div className="icons">
						<div className="icon" />
						<div className="icon" />
						<div className="icon" />
						<div className="icon" />
					</div>
					<p>{new Date().getFullYear()} Ivan Lartsov</p>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
