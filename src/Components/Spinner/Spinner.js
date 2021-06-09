import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		height: '100vh',
		placeItems: 'center',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

const Spinner = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	);
};
export default Spinner;
