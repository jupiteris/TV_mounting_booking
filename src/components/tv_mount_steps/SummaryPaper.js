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
		'@media (max-height: 640px)': {
			padding: '8px 15px',
			borderRadius: 10,
		},
	},
	title: {
		fontSize: 11,
		color: '#22d1c3',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'@media (max-width: 414px)': {
			fontSize: 9,
		},
	},
	icon: {
		'& svg': {
			fontSize: '24px !important',
			padding: 5,
			background: '#dffcfa',
			borderRadius: 8,
			'@media (max-width: 414px)': {
				fontSize: '20px !important',
			},
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
			fontSize: '18px !important',
			color: '#22d1c3',
			'@media (max-width: 414px)': {
				fontSize: '15px !important',
			},
		},
		width: '10%',
	},
	serviceName: {
		width: '40%',
		fontWeight: 500,
		fontSize: 14,
		'@media (max-width: 414px)': {
			fontSize: 10,
		},
	},
	servicePrice: {
		width: '38%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	serviceEdit: {
		width: '12%',
		display: 'flex',
		justifyContent: 'flex-end',
		'& button': {
			padding: 0,
			'& svg': {
				fontSize: '24px !important',
				padding: 5,
				borderRadius: 20,
				border: '1px solid #ebebeb',
				'@media (max-width: 414px)': {
					fontSize: '18px !important',
				},
			},
		},
	},
	priceBoard: {
		width: '50%',
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
		'@media (max-width: 414px)': {
			fontSize: 9,
			padding: 2,
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
				<div className={classes.serviceItem}>
					<div className={classes.seviceIcon}>
						<DoneIcon />
					</div>
					<div className={classes.serviceName}>Drywall or wood</div>
					<div className={classes.servicePrice}>
						<div className={classes.priceBoard}>$99</div>
					</div>
					<div className={classes.serviceEdit}>
						<IconButton aria-label="edit">
							<EditIcon />
						</IconButton>
					</div>
				</div>
				<div className={classes.serviceItem}>
					<div className={classes.seviceIcon}>
						<DoneIcon />
					</div>
					<div className={classes.serviceName}>Fixed</div>
					<div className={classes.servicePrice}>
						<div className={classes.priceBoard}>$99</div>
					</div>
					<div className={classes.serviceEdit}>
						<IconButton aria-label="edit">
							<EditIcon />
						</IconButton>
					</div>
				</div>
				<div className={classes.serviceItem}>
					<div className={classes.seviceIcon}>
						<DoneIcon />
					</div>
					<div className={classes.serviceName}>On the wall</div>
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
