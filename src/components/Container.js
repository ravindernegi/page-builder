import React, { Component } from "react";
import { PopupWidget } from "./index";
import { withStyles } from '@material-ui/core/styles';
class Container extends Component {
	constructor() {
		super();
		this.state = { 
			components : {
				items : []
			}
		};
		this.setComponents = this.setComponents.bind(this);
	}


	setComponents = (name,value) => {
		const mainState = {...this.state.components};
		mainState.items.push({name : name,value:value});
		this.setState({components:mainState});
	}

	renderHtml = () => {
		console.log(this.state.components.items);
		
		return this.state.components.items.map((val,index) => {
			return (<div key={index}>{val.name}</div>)
		})
		//return JSON.stringify(this.state);
	}

	render() {
		const parseHtml = () => {

			return <div className="editer-box">{this.renderHtml()}</div>;
		};

		return (
			<React.Fragment>
				<PopupWidget setComponents={this.setComponents}/>
				{parseHtml()}
			</React.Fragment>
		);
	}
}
const useStyles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	icon: {
		margin: theme.spacing(0),
	}

});

export default withStyles(useStyles)(Container);
