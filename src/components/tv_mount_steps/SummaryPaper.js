import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 20,
		padding: 15,
		backgroundColor: '#fff',
		marginTop: 30,
	},
	title: {
		fontSize: 11,
		color: '#22d1c3',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		'& svg': {
			fontSize: 24,
			padding: 5,
			background: '#dffcfa',
			borderRadius: 8,
		},
		width: '10%',
	},
	content: {
		width: '90%',
	},
	serviceWrapper: {},
	serviceItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	seviceIcon: {
		'& svg': {
			fontSize: 18,
			color: '#22d1c3',
		},
		width: '10%',
	},
	serviceName: {
		width: '40%',
		fontWeight: 500,
		fontSize: 14,
	},
	servicePrice: {
		width: '40%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	serviceEdit: {
		width: '10%',
		display: 'flex',
		justifyContent: 'flex-end',
		'& button': {
			padding: 0,
			'& svg': {
				fontSize: 24,
				padding: 5,
				borderRadius: 20,
				border: '1px solid #ebebeb',
			},
		},
	},
	priceBoard: {
		width: '45%',
		border: '2px solid #ebebeb',
		textAlign: 'center',
		padding: 5,
		fontSize: 11,
		borderRadius: 5,
		fontWeight: 500,
		cursor: 'pointer',
		'&:hover': {
			borderColor: '#22d1c3',
			color: '#22d1c3',
		},
	},
}));

const SummaryPaper = () => {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.root}>
			<div className={classes.title}>
				<div className={classes.icon}>
					<DesktopWindowsIcon />
				</div>
				<div className={classes.content}>Tv Mounting</div>
			</div>
			<div className={classes.serviceWrapper}>
				<div className={classes.serviceItem}>
					<div className={classes.seviceIcon}>
						<DoneIcon />
					</div>
					<div className={classes.serviceName}>
						32" - 60" &nbsp;(&nbsp;1&nbsp;tv)
					</div>
					<div className={classes.servicePrice}>
						<div className={classes.priceBoard}>$99</div>
					</div>
					<div className={classes.serviceEdit}>
						<IconButton aria-label="edit">
							<EditIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</Paper>
	);
};

export default SummaryPaper;
