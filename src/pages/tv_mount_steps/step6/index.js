import React, { useState } from 'react';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';
import ExpandableTitle from '../../../components/tv_mount_steps/ExpandableTitle';
import DatePaper from '../../../components/tv_mount_steps/DatePaper';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({}));

const Step6 = ({}) => {
	const classes = useStyles();
	const [dateExpand, setDateExpand] = useState(true);
	const handleDateExpand = () => {
		setDateExpand(!dateExpand);
	};
	return (
		<>
			<Header step="5" stepTitle="Booking" />
			<ExpandableTitle
				title="CHOOSE YOUR DATE AND TIME"
				expandState={dateExpand}
				handleExpand={handleDateExpand}
			/>
			{dateExpand && <DatePaper />}
		</>
	);
};

const mapStateToProps = (state) => ({
	// addictionalQuizs: state.step.addictionalQuizs,
});

export default connect(mapStateToProps, {})(Step6);
