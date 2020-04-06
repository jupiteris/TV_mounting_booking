import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles(() => ({
	timeDiv: {
		width: '25%',
		float: 'left',
		display: 'flex',
		justifyContent: 'center',
		marginTop: 10,
	},
	bookingTime: {
		width: '90%',
		border: '2px solid #ebebeb',
		textAlign: 'center',
		padding: 8,
		fontSize: 11,
		borderRadius: 5,
		fontWeight: 500,
		cursor: 'pointer',
		'&:hover': {
			borderColor: '#22d1c3',
			color: '#22d1c3',
		},
	},
	dateBlock: {
		fontSize: 9,
		fontWeight: 600,
	},
}));

const DateComponent = ({
	date,
	dateIndex,
	handleDateIndex,
	selectedDateIndex,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.timeDiv}>
			<div
				className={classes.bookingTime}
				onClick={(e) => handleDateIndex(dateIndex)}
				style={
					dateIndex === selectedDateIndex
						? {
								borderColor: '#22d1c3',
								color: '#22d1c3',
						  }
						: {}
				}
			>
				<div className={classes.dateBlock}>
					{moment(date).format('ddd')} <br />
					{moment(date).format('MMM DD')}
				</div>
			</div>
		</div>
	);
};

export default DateComponent;
