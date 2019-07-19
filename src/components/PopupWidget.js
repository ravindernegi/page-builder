import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
class PopupWidget extends Component {
	constructor() {
	  super();
	  this.state = { popup: false };
	  this.openComponents = this.openComponents.bind(this);
	  this.closeComponents = this.closeComponents.bind(this);
	}
  
	openComponents() {
	  this.setState({ popup: true });
	}

	closeComponents() {
		this.setState({ popup: false });
	  }
	render() {
	  const { classes } = this.props;


  return (
    <div>
	<Button variant="contained"  onClick={this.openComponents} color="primary">
          <Icon className={classes.icon}>
          add_circle
          </Icon>
        </Button>
      
      <Dialog
        open={this.state.popup}
        onClose={this.closeComponents}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Components</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
		  <Icon className={classes.icon}>
          		view_list
          </Icon>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeComponents} color="primary" variant="contained">
		 	 <Icon className={classes.icon}>
          		cancel_circle
          </Icon>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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
  
  export default withStyles(useStyles)(PopupWidget);
  