import React from "react";

import "./ScrollIndicator.scss";

export default class ScrollIndicator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		debugger;
		this.props.containerElement.addEventListener("scroll", this.handleScroll);

		this.updateScroll();
	}

	componentWillUnmount() {
		this.props.containerElement.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll() {
		this.updateScroll();
	}

	updateScroll() {
		this.setState({ scroll: this.getCurrentScroll() });
	}

	getCurrentScroll() {
		const containerElement = this.props.containerElement;
		if (!containerElement) return 0;

		const scroll = containerElement.scrollTop;
		const height = containerElement.scrollHeight - containerElement.clientHeight;

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
