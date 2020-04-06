import React, { useState } from 'react';
import DateComponent from './DateComponent';

const dateIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const milisecPerDay = 24 * 60 * 60 * 1000;

const DateGroup = ({ datesBlock }) => {
	const startDate =
		new Date().getTime() + datesBlock * dateIndexs.length * milisecPerDay;
	const [selectedDateIndex, setSelectedDateIndex] = useState(null);
	const handleDateIndex = (dateIndex) => {
		setSelectedDateIndex(dateIndex);
	};
	return (
		<div>
			{dateIndexs.map((dateIndex) => (
				<DateComponent
					key={dateIndex}
					date={startDate + milisecPerDay * dateIndex}
					dateIndex={dateIndex}
					handleDateIndex={handleDateIndex}
					selectedDateIndex={selectedDateIndex}
				/>
			))}
		</div>
	);
};

export default DateGroup;
