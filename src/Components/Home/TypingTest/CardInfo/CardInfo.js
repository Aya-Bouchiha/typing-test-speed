import React from 'react';
import { CalculateCPM } from '../../../../Utilities/Functions/TypingTest/CalculateCPM';
import { CalculateAccuracy } from '../../../../Utilities/Functions/TypingTest/CalculateAccuracy';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TYPING_DURATION } from '../../../../Settings/TypingTest/TypingDuration';
const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const CardInfo = ({
	setShowCard,
	setDuration,
	typedLetters,
	correctLetters,
	textAreaRef,
	duration,
}) => {
	console.log();
	const [open, setOpen] = React.useState(true);
	const handleClose = () => {
		setOpen(false);
		setShowCard(false);
		// rest textarea's value
		textAreaRef.current.value = '';
		setDuration(TYPING_DURATION);
	};

	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}>
				<DialogTitle id='customized-dialog-title' onClose={handleClose}>
					KeyTest: Typing Test Speed
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom variant='h5'>
						{/* a math operttion for calculating the accuracy */}
						You type with the speed of {CalculateCPM(typedLetters)}
					</Typography>
					<Typography gutterBottom variant='h5'>
						Your accuracy was{' '}
						{/* a math operttion for calculating the accuracy */}
						{CalculateAccuracy(typedLetters, correctLetters)}
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Test your typing skills another time
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CardInfo;
// case of typined letters> wordList
