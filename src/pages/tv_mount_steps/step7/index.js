import React from 'react';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SummaryPaper from '../../../components/tv_mount_steps/SummaryPaper';
import AppointmentPaper from '../../../components/tv_mount_steps/AppointmentPaper';
import CouponPaper from '../../../components/tv_mount_steps/CouponPaper';
import CustomDetailPaper from '../../../components/tv_mount_steps/CustomDetailPaper';

const useStyles = makeStyles(() => ({
	lastStep: {
		height: 600,
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	paperGroup: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	payAffer: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: 11,
		padding: 20,
		color: '#888888',
		fontWeight: 500,
	},
}));

const Step7 = () => {
	const classes = useStyles();
	return (
		<>
			<Header
				step="7"
				stepTitle="One last thing, Test! <br/>Review and Confirm your details"
			/>
			<div id="last-page-container" className={classes.lastStep}>
				<SummaryPaper />
				<div className={classes.payAffer}>Pay after installation is done</div>
				<div className={classes.paperGroup}>
					<AppointmentPaper width="47%" />
					<CouponPaper width="47%" />
				</div>
				<CustomDetailPaper />
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	// addictionalQuizs: state.step.addictionalQuizs,
});

export default connect(mapStateToProps, {})(Step7);
