import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LoremIpsum } from "lorem-ipsum";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";

import ScrollIndicator from "../ScrollIndicator/ScrollIndicator.js";

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
				<div className="page">
					{/* <ScrollIndicator containerElement={this.containerElementRef} /> */}

					<div className="header">
						<button type="button" className="">о себе</button>
						<button type="button" className="">github</button>
						<button type="button" className="">музыка</button>
						<button type="button" className="">хобби</button>
					</div>

					<div className="content"
						ref={this.containerElementRef}
					// onScroll={() => this.setState({ scroll: this.containerElementRef.current.scrollTop / this.containerElementRef.current.scrollHeight })}
					>
						<div className="column">
							<p>{lorem.generateParagraphs(60)}</p>
						</div>
					</div>

					<div className="footer">
						<div className="column">
							<p>{new Date().getFullYear()} Ivan Lartsov</p>
							<div className="icons">
								<div className="icon">
									<MdAlternateEmail />
								</div>
								<div className="icon">
									<FaTelegram />
								</div>
								<div className="icon">
									<FaGithub />
								</div>
							</div>
						</div>
					</div>

				</div>
			</React.Fragment>
		);
	}
}

export default App;
