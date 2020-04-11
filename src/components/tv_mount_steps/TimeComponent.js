import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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
		'@media (max-width: 414px)': {
			fontSize: 10,
		},
		'@media (max-height: 640px)': {
			padding: 6,
		},
	},
}));

const TimeComponent = ({ startTime, handleTime, bookingTimes }) => {
	const classes = useStyles();
	const timeRange = startTime + '-' + (startTime + 2);
	return (
		<div className={classes.timeDiv}>
			<div
				className={classes.bookingTime}
				onClick={(e) => handleTime(startTime)}
				style={
					bookingTimes.length > 0 && bookingTimes.includes(startTime)
						? {
								borderColor: '#22d1c3',
								color: '#22d1c3',
						  }
						: {
								borderColor: '#ebebeb',
								color: '#030303',
						  }
				}
			>
				{timeRange}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	bookingTimes: state.step.bookingTimes,
});

export default connect(mapStateToProps, {})(TimeComponent);
