import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

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
		},
		width: '10%',
	},
	content: {
		width: '90%',
	},
	detailDiv: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: 12,
		'@media (max-width: 414px)': {
			fontSize: 10,
		},
	},
	detailTitle: { fontWeight: 500 },
	serviceEdit: {
		width: '10%',
		display: 'flex',
		justifyContent: 'flex-end',
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
	phoneNumber: {
		fontWeight: 500,
		fontSize: 12,
		'@media (max-width: 414px)': {
			fontSize: 10,
		},
	},
}));

const CustomDetailPaper = () => {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.root}>
			<div className={classes.title}>
				<div className={classes.icon}>
					<EventNoteIcon />
				</div>
				<div className={classes.content}>Details</div>
			</div>
			<div className={classes.detailDiv}>
				<div className={classes.detailTitle}>Test</div>
				<div className={classes.serviceEdit}>
					<IconButton aria-label="edit">
						<EditIcon />
					</IconButton>
				</div>
			</div>
			<div className={classes.phoneNumber}>(313)&nbsp;000-0013</div>
		</Paper>
	);
};

export default CustomDetailPaper;
