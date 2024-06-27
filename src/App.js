import React from "react";

// import './App.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: Date()
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ text: Date() });
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				{this.state.text}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showClock: false
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.showClock && <Clock />}
				<button type="button" onClick={() => {
					this.setState({ showClock: !this.state.showClock });
				}}>BTN</button>
			</div>
		);
	}
}

export default App;
