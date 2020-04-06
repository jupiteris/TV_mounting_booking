import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	timeDiv: {
		width: '50%',
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
}));

const TimeComponent = ({ startTime, handleTime, selectedTime }) => {
	const classes = useStyles();
	const timeRange = startTime + '-' + (startTime + 2);
	return (
		<div className={classes.timeDiv}>
			<div
				className={classes.bookingTime}
				onClick={(e) => handleTime(startTime)}
				style={
					startTime === selectedTime
						? {
								borderColor: '#22d1c3',
								color: '#22d1c3',
						  }
						: {}
				}
			>
				{timeRange}
			</div>
		</div>
	);
};

export default TimeComponent;
