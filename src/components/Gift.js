import React, { Component } from "react";
import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Button
} from "react-bootstrap";

class Gift extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: "",
			present: ""
		};
	}

	updatePersonValue = e => {
		this.setState({ person: e.target.value });
	};

	updatePresentValue = e => {
		this.setState({ present: e.target.value });
	};

	render() {
		return (
			<div>
				<Form>
					<FormGroup>
						<ControlLabel>Person</ControlLabel>
						<FormControl
							className="input-person"
							onChange={e => this.updatePersonValue(e)}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Present</ControlLabel>
						<FormControl
							className="input-present"
							onChange={e => this.updatePresentValue(e)}
						/>
					</FormGroup>
				</Form>
				<Button
					className="btn-remove"
					onClick={() => this.props.removeGift(this.props.gift.id)}
				>
					Remvoe Gift
				</Button>
			</div>
		);
	}
}

export default Gift;
