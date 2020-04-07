import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 15,
		padding: 20,
		backgroundColor: '#fff',
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
		width: '30%',
	},
	content: {
		width: '90%',
	},
	detailDiv: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: 10,
		alignItems: 'center',
	},
	date: { fontSize: 12, fontWeight: 500 },
	serviceEdit: {
		width: '10%',
		display: 'flex',
		justifyContent: 'flex-end',
		'& button': {
			padding: 0,
		},
		'& svg': {
			fontSize: 24,
			padding: 5,
			borderRadius: 20,
			border: '1px solid #ebebeb',
		},
	},
}));

const AppointmentPaper = ({ width }) => {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.root} style={{ width: width }}>
			<div className={classes.title}>
				<div className={classes.icon}>
					<ScheduleIcon />
				</div>
				<div className={classes.content}>Appointment</div>
			</div>
			<div className={classes.detailDiv}>
				<div className={classes.date}>
					{moment(new Date().getTime()).format('MMM Do YYYY')}.<br />
					1pm - 3pm
				</div>
				<div className={classes.serviceEdit}>
					<IconButton aria-label="edit">
						<EditIcon />
					</IconButton>
				</div>
			</div>
		</Paper>
	);
};

export default AppointmentPaper;
