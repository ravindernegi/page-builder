import React, { Component } from "react";
import { PopupWidget } from "./index";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/icons/Icon";
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
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.popup === true && <PopupWidget />}

        <Button onclick={this.openComponents}>
          <Icon className={classes.icon} color="secondary">
          add_circle
          </Icon>
        </Button>
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
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
});

export default withStyles(useStyles)(Container);
