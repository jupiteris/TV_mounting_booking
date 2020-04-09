import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { connect } from 'react-redux';

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
		padding: 0,
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
		fontSize: 8,
		fontWeight: 600,
		padding: '6px 4px',
		'@media (max-height: 640px)': {
			padding: 2,
			fontSize: 7,
			fontWeight: 600,
		},
	},
}));

const DateComponent = ({
	date,
	dateIndex,
	dateBlockIndex,
	datesBlockIndex,
	handleDateIndex,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.timeDiv}>
			<div
				className={classes.bookingTime}
				onClick={(e) => handleDateIndex(dateIndex)}
				style={
					dateIndex === dateBlockIndex.dateIndex &&
					datesBlockIndex === dateBlockIndex.blockIndex
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

const mapStateToProps = (state) => ({
	dateBlockIndex: state.step.dateBlockIndex,
});

export default connect(mapStateToProps, {})(DateComponent);
