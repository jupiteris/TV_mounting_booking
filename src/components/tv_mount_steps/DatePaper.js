import React from 'react';
import CarouselDateSelector from './CarouselDateSelector';
import CarouselDateGroupSelector from './CarouselDateGroupSelector';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import TimeComponent from './TimeComponent';
import { setBookingTime, setExpandMth } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 20,
		padding: '15px 20px',
		backgroundColor: '#fff',
		margin: '20px 0px',
		width: '100%',
		'@media (max-width: 414px)': {
			borderRadius: 10,
			padding: '8px 15px',
			margin: '10px 0px',
		},
	},
	carouselDiv: {
		display: 'flex',
		justifyContent: 'center',
	},
	moreDaysDive: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: '10px 0px 20px 0px',
		'@media (max-height: 640px)': {
			margin: '15px 0px 20px 0px',
		},
	},
	moreDaysButton: {
		width: '25%',
		background: '#f2f2f2',
		color: '#030303',
		fontSize: 9,
		fontWeight: 500,
		padding: '10px 20px !important',
		'@media (max-width: 414px)': {
			width: '30%',
			padding: '3px 0px !important',
			fontSize: 9,
		},
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
			'@media (max-width: 414px)': {
				fontSize: 12,
			},
			'@media (max-height: 640px)': {
				padding: '10px 0px 5px 0px !important',
			},
		},
	},
	spaceDiv: {
		padding: 10,
	},
}));

const times = [8, 10, 1, 3, 5, 7];

const DatePaper = ({ expandMth, setBookingTime, setExpandMth }) => {
	const classes = useStyles();
	const handleTime = (t) => {
		setBookingTime(t);
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
							/>
						))}
					</div>
					<div className={classes.spaceDiv}></div>
				</div>
			</Paper>
		</>
	);
};

const mapStateToProps = (state) => ({
	expandMth: state.step.expandMth,
});

export default connect(mapStateToProps, { setBookingTime, setExpandMth })(
	DatePaper
);
