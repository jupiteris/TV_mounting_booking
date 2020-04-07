import React, { useState } from 'react';
import CarouselDateSelector from './CarouselDateSelector';
import CarouselDateGroupSelector from './CarouselDateGroupSelector';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import TimeComponent from './TimeComponent';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 20,
		padding: '15px 20px',
		backgroundColor: '#fff',
		margin: '20px 0px',
		width: '100%',
	},
	carouselDiv: {
		display: 'flex',
		justifyContent: 'center',
	},
	moreDaysDive: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: '20px 0px 30px 0px',
	},
	moreDaysButton: {
		width: '25%',
		background: '#f2f2f2',
		color: '#030303',
		fontSize: 9,
		fontWeight: 500,
	},
	line: {
		marginLeft: -20,
		marginRight: -20,
	},
	dayBooking: {
		display: 'flex',
		justifyContent: 'center',
		color: '#030303',
		flexFlow: 'column',
		textAlign: 'center',
		'& span': {
			padding: '20px 0px',
			fontSize: 14,
			fontWeight: 500,
		},
	},
}));

const times = [8, 10, 1, 3, 5, 7];

const DatePaper = () => {
	const classes = useStyles();
	const [selectedTime, setSelectedTime] = useState(0);
	const [expandMth, setExpandMth] = useState(false);
	const handleTime = (t) => {
		setSelectedTime(t);
	};
	const handleExpandDates = () => {
		setExpandMth(!expandMth);
	};
	return (
		<>
			<Paper elevation={0} className={classes.root}>
				<div className={classes.carouselDiv}>
					{expandMth ? <CarouselDateGroupSelector /> : <CarouselDateSelector />}
				</div>
				<div className={classes.moreDaysDive}>
					<Button
						className={classes.moreDaysButton}
						onClick={handleExpandDates}
					>
						{expandMth ? 'Back' : 'More Days'}
					</Button>
				</div>
				<hr className={classes.line} />
				<div className={classes.dayBooking}>
					<span>Per Day Time</span>
					<div className={classes.timesDiv}>
						{times.map((time) => (
							<TimeComponent
								key={time}
								handleTime={handleTime}
								startTime={time}
								selectedTime={selectedTime}
							/>
						))}
					</div>
				</div>
			</Paper>
		</>
	);
};

export default DatePaper;
