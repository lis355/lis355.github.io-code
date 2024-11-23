import React from "react";

import "./ScrollIndicator.scss";

export default class ScrollIndicator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		document.addEventListener("scroll", this.handleScroll);
		document.addEventListener("resize", this.handleScroll);

		this.updateScroll();
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleScroll);
		document.removeEventListener("resize", this.handleScroll);
	}

	handleScroll(e) {
		this.updateScroll();
	}

	updateScroll() {
		this.setState({ scroll: this.getCurrentScroll() });
	}

	getCurrentScroll() {
		const element = document.querySelector("html");
		if (!element) return 0;

		const scroll = element.scrollTop;
		const height = element.scrollHeight - element.clientHeight;

		return scroll / height;
	}

	render() {
		return (
			<div className="scroll-indicator">
				<div className="scroll-indicator-bar" style={{ width: `${this.state.scroll * 100}%` }} />
			</div>
		);
	}
}
