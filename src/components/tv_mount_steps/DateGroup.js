import React from 'react';
import DateComponent from './DateComponent';
import { setDateBlockIndex } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const dateIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const milisecPerDay = 24 * 60 * 60 * 1000;

const DateGroup = ({ datesBlockIndex, setDateBlockIndex }) => {
	const startDate =
		new Date().getTime() + datesBlockIndex * dateIndexs.length * milisecPerDay;
	const handleDateIndex = (dateIndex) => {
		setDateBlockIndex({
			blockIndex: datesBlockIndex,
			dateIndex: dateIndex,
		});
	};
	return (
		<div>
			{dateIndexs.map((dateIndex) => (
				<DateComponent
					key={dateIndex}
					date={startDate + milisecPerDay * dateIndex}
					dateIndex={dateIndex}
					datesBlockIndex={datesBlockIndex}
					handleDateIndex={handleDateIndex}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setDateBlockIndex })(DateGroup);
