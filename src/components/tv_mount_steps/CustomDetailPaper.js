import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 20,
		padding: 20,
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
	detailDiv: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	detailTitle: { fontSize: 12, fontWeight: 500 },
	serviceEdit: {
		width: '10%',
		display: 'flex',
		justifyContent: 'flex-end',
		'& svg': {
			fontSize: 24,
			padding: 5,
			borderRadius: 20,
			border: '1px solid #ebebeb',
		},
	},
	phoneNumber: {
		fontWeight: 500,
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
