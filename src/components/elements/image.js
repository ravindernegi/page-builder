import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

	box : {
        width: '100%',
        height : '100px',
        backgroundColor: '#4F3897'
	}

}));

export default function Image(props) {
    const classes = useStyles();
	return (<div className={classes.box}></div>);
}
