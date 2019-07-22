import React, { Component } from "react";
import { PopupWidget } from "./index";
import { withStyles } from '@material-ui/core/styles';
class Container extends Component {
  constructor() {
    super();
    this.state = { popup: false };
    this.openComponents = this.openComponents.bind(this);
  }

  openComponents() {
    this.setState({ popup: true });
  }
  render() {
    
    return (
      <React.Fragment>
        <PopupWidget />

        
        <div className="editer-box" />
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
