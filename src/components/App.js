import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "../helper/";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifts: []
		};
	}

	addGift = () => {
		const { gifts } = this.state;

		const ids = this.state.gifts.map(gift => gift.id);

		gifts.push({
			id: max_number(ids) + 1
		});

		this.setState({ gifts });
	};

	removeGift = id => {
		const gifts = this.state.gifts.filter(gift => gift.id !== id);

		this.setState({ gifts });
	};

	render() {
		return (
			<div>
				<h1>React TDD</h1>
				<h2>Gift Giver</h2>

				<div className="gift-list">
					{this.state.gifts.map(gift => {
						return (
							<Gift
								key={gift.id}
								id={gift.id}
								removeGift={this.removeGift}
							/>
						);
					})}
				</div>

				<Button onClick={this.addGift} className="btn-add">
					Add gift
				</Button>
			</div>
		);
	}
}

export default App;
